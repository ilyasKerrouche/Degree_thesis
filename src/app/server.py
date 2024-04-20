import os
from flask import Flask, request, send_file, jsonify, send_from_directory
from omegaconf import OmegaConf
from pathlib import Path
from ultralytics import YOLO
import cv2
import tempfile
from ultralytics.utils.plotting import Annotator
from collections import Counter
from flask_cors import CORS
import uuid
import base64
from flask_socketio import SocketIO, emit


app = Flask(__name__)
CORS(app)  # Abilita CORS per tutte le rotte

socketio = SocketIO(app, cors_allowed_origins="*")


analyzed_photos_dir = 'analyzed_photos'


@socketio.on('new_photo_analyzed')
def handle_new_photo_analyzed():
    # Invia un segnale ai client quando viene analizzata una nuova foto
    socketio.emit('photo_analyzed_notification', namespace='/')


@app.route('/photo_list')
def get_photo_list():
    # Ottieni l'elenco dei nomi delle immagini nella directory analyzed_photos,
    # escludendo il file .DS_Store se presente
    photo_data_list = []

    for filename in os.listdir(analyzed_photos_dir):
        if filename != ".DS_Store":
            with open(os.path.join(analyzed_photos_dir, filename), "rb") as image_file:
                image_data = base64.b64encode(
                    image_file.read()).decode("utf-8")
                photo_data_list.append(f"data:image/jpeg;base64,{image_data}")

    return jsonify(photo_data_list)


# Load Hydra configuration file
with open("yolo/config/config.yaml") as f:
    cfg = OmegaConf.load(f)

# Load YOLO model
model = YOLO(Path(cfg.model_path), task="detect")


def predicted_classes(boxes, class_names):
    """
    Extracts classes and corresponding frequencies.
    """
    # Extract predicted classes and corresponding frequencies
    classes_ids = [int(id.cls) for id in boxes]
    class_freq = Counter(classes_ids)

    # Convert class IDs to names
    pred_class_names = {}
    for c in class_freq:
        pred_class_names[class_names[c]] = class_freq[c]

    return pred_class_names


@app.route('/analyze', methods=['POST'])
def analyze():
    # Check if the file was uploaded
    if 'file' not in request.files:
        return 'No file uploaded', 400

    # Get the file and selected model from the form
    uploaded_file = request.files['file']
    selected_model = request.form.get('selectedModel')

    # Determine which analysis function to call based on the selected model
    if selected_model == 'photo':
        return analyze_photo(uploaded_file)
    elif selected_model == 'video':
        return analyze_video(uploaded_file)
    else:
        return 'Invalid model selection', 400


def analyze_photo(photo):
    # Save the image temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix='.jpg') as temp_file:
        photo.save(temp_file.name)

    # Read the image from the temporary file
    image = cv2.imread(temp_file.name)

    # Analyze the image using the YOLO model
    results = model.predict(image)

    # Delete the temporary file
    os.unlink(temp_file.name)

    # Annotate the image with identifying rectangles
    annotator = Annotator(image)
    for res in results:
        for box in res.boxes:
            box_xy = box.xyxy[0]  # Get the bounding box coordinates
            cls = box.cls  # Class index
            annotator.box_label(box_xy, model.names[int(cls)])

    # Get the annotated image
    annotated_image = annotator.result()

    # Get unique id for every image to save
    unique_id = uuid.uuid4().hex

    # Save the analyzed image to a folder with a unique name
    analyzed_photos_dir = 'analyzed_photos'
    os.makedirs(analyzed_photos_dir, exist_ok=True)
    analyzed_photo_path = os.path.join(
        analyzed_photos_dir, f'analyzed_photo_{unique_id}.jpg')
    cv2.imwrite(analyzed_photo_path, annotated_image)

    handle_new_photo_analyzed()

    # Return the analyzed image as a response to the client
    return send_file(analyzed_photo_path, mimetype='image/jpeg')


def analyze_video(video):
    # Percorso completo del video di output
    # output_path = 'video/cars_analyzed.mp4'

    # Apri il video
    video_capture = cv2.VideoCapture(video)

    # Imposta i codec e il frame rate del video di output
    codec = cv2.VideoWriter_fourcc(*'avc1')
    fps = int(video_capture.get(cv2.CAP_PROP_FPS))
    frame_size = (int(video_capture.get(cv2.CAP_PROP_FRAME_WIDTH)),
                  int(video_capture.get(cv2.CAP_PROP_FRAME_HEIGHT)))

    # Crea il video di output
    out = cv2.VideoWriter(video, codec, fps, frame_size)

    # Ciclo sui frame del video di input
    while True:
        ret, frame = video_capture.read()
        if not ret:
            break

        # Analizza il frame con il modello YOLO
        results_list = model(frame)  # Ogni elemento è un oggetto Results

        # Ciclo su ogni elemento della lista
        for results in results_list:
            # Annotate the image with identifying rectangles and class names
            for box in results.boxes:
                box_xy = box.xyxy[0]  # Get the bounding box coordinates
                cls = box.cls  # Class index
                class_name = model.names[int(cls)]  # Get the class name
                cv2.rectangle(frame, (int(box_xy[0]), int(box_xy[1])), (int(
                    box_xy[2]), int(box_xy[3])), (0, 255, 0), 2)
                cv2.putText(frame, class_name, (int(box_xy[0]), int(
                    box_xy[1]) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

        # Salva il frame nel video di output
        out.write(frame)

    # Rilascia le risorse
    video_capture.release()
    out.release()


if __name__ == '__main__':
    socketio.run(app, debug=True)

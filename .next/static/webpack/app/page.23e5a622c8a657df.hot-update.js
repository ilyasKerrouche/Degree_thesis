"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6d0cdce583e2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjZkMGNkY2U1ODNlMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _spark_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spark-test */ \"(app-pages-browser)/./src/app/spark-test.tsx\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _tabs_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-test */ \"(app-pages-browser)/./src/app/tabs-test.tsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-T23UE3AD.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-YRZGWF2W.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-TSPNSPCL.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-FKPXBCGS.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-CIL4Y7FA.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-F3UDT23P.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst colors = [\n    \"default\",\n    \"primary\",\n    \"secondary\",\n    \"success\",\n    \"warning\",\n    \"danger\"\n];\nfunction Home() {\n    _s();\n    const [photoList, setPhotoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Estraggo le foto analizzate salvate nella directory lato server\n    async function fetchPhotoList() {\n        try {\n            const response = await fetch(\"http://127.0.0.1:5000/photo_list\");\n            const data = await response.json();\n            setPhotoList(data);\n        } catch (error) {\n            console.error(\"Errore durante il recupero dell'elenco delle foto:\", error);\n            return [];\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"http://127.0.0.1:5000\");\n        socket.on(\"photo_analyzed_notification\", ()=>{\n            // quando ricevo una notifica dal client, aggiorno lista foto\n            // -------------- PROVA A METTERE QUI IL LOADING ANIMAZIONE --------------\n            fetchPhotoList();\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPhotoList();\n    }, []); // Le parentesi quadre vuote indicano che questo effetto non dipende da nessuna variabile e quindi verrà eseguito solo una volta dopo il montaggio del componente.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_spark_test__WEBPACK_IMPORTED_MODULE_2__.SparklesPreview, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabs_test__WEBPACK_IMPORTED_MODULE_4__.TabsDemo, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.table_default, {\n                        color: \"primary\",\n                        selectionMode: \"multiple\",\n                        \"aria-label\": \"Example static collection table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.table_header_default, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"IMAGE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 3\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"NAME\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"STATUS\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 5\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.table_body_default, {\n                                children: photoList.map((photo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.table_row_default, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.table_cell_default, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: photo.imageUrl,\n                                                    alt: \"Photo \".concat(index),\n                                                    style: {\n                                                        maxWidth: \"70px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 9\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 7\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.table_cell_default, {\n                                                children: photo.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 7\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 5\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"C/RfK+gTUbkdesJSi8jdjHSMMBw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUVKO0FBQ3pCO0FBQ2lCO0FBQ087QUFDdUU7QUFFckgsTUFBTVksU0FBUztJQUFDO0lBQVc7SUFBVztJQUFhO0lBQVc7SUFBVztDQUFTO0FBR25FLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUc3QyxrRUFBa0U7SUFDbEUsZUFBZWU7UUFDYixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsYUFBYUk7UUFDZixFQUFFLE9BQU9FLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHNEQUF1REE7WUFDckUsT0FBTyxFQUFFO1FBQ1g7SUFDRjtJQUVBbkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNcUIsU0FBU2xCLDREQUFjQSxDQUFDO1FBRTlCa0IsT0FBT0MsRUFBRSxDQUFDLCtCQUErQjtZQUN2Qyw2REFBNkQ7WUFFN0QsMEVBQTBFO1lBQzFFUjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUxkLGdEQUFTQSxDQUFDO1FBQ1JjO0lBQ0YsR0FBRyxFQUFFLEdBQUUsa0tBQWtLO0lBR3pLLHFCQUVFLDhEQUFDUzs7MEJBRUMsOERBQUN0Qix3REFBZUE7Ozs7OzBCQUNoQiw4REFBQ0MsZ0RBQVFBOzs7OzswQkFJVCw4REFBQ3NCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ3JCLDREQUFLQTt3QkFDWnNCLE9BQU87d0JBQ1BDLGVBQWM7d0JBQ2RDLGNBQVc7OzBDQUVYLDhEQUFDdkIsbUVBQVdBOztrREFDWiw4REFBQ0MsbUVBQVdBO2tEQUFDOzs7Ozs7a0RBQ1gsOERBQUNBLG1FQUFXQTtrREFBQzs7Ozs7O2tEQUNiLDhEQUFDQSxtRUFBV0E7a0RBQUM7Ozs7Ozs7Ozs7OzswQ0FHZiw4REFBQ0MsaUVBQVNBOzBDQUNUSyxVQUFVaUIsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNyQiw4REFBQ3ZCLGlFQUFRQTs7MERBQ1AsOERBQUNDLGtFQUFTQTswREFDUiw0RUFBQ3VCO29EQUFJQyxLQUFLSCxNQUFNSSxRQUFRO29EQUFFQyxLQUFLLFNBQWUsT0FBTko7b0RBQVNLLE9BQU87d0RBQUVDLFVBQVU7b0RBQU87Ozs7Ozs7Ozs7OzBEQUU3RSw4REFBQzVCLGtFQUFTQTswREFBRXFCLE1BQU1RLElBQUk7Ozs7Ozs7dUNBSlRQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCbkI7R0FoRndCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhyZWVEQ2FyZERlbW8gfSBmcm9tIFwiLi8zZC10ZXN0XCI7XHJcbmltcG9ydCB7IFNwYXJrbGVzUHJldmlldyB9IGZyb20gXCIuL3NwYXJrLXRlc3RcIjtcclxuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgeyBUYWJzRGVtbyB9IGZyb20gJy4vdGFicy10ZXN0JztcclxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQge1RhYmxlLCBUYWJsZUhlYWRlciwgVGFibGVDb2x1bW4sIFRhYmxlQm9keSwgVGFibGVSb3csIFRhYmxlQ2VsbCwgUmFkaW9Hcm91cCwgUmFkaW99IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5cclxuY29uc3QgY29sb3JzID0gW1wiZGVmYXVsdFwiLCBcInByaW1hcnlcIiwgXCJzZWNvbmRhcnlcIiwgXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiLCBcImRhbmdlclwiXTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwaG90b0xpc3QsIHNldFBob3RvTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAvLyBFc3RyYWdnbyBsZSBmb3RvIGFuYWxpenphdGUgc2FsdmF0ZSBuZWxsYSBkaXJlY3RvcnkgbGF0byBzZXJ2ZXJcclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFBob3RvTGlzdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9waG90b19saXN0Jyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldFBob3RvTGlzdChkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yZSBkdXJhbnRlIGlsIHJlY3VwZXJvIGRlbGxcXCdlbGVuY28gZGVsbGUgZm90bzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwJylcclxuXHJcbiAgICBzb2NrZXQub24oJ3Bob3RvX2FuYWx5emVkX25vdGlmaWNhdGlvbicsICgpID0+IHtcclxuICAgICAgLy8gcXVhbmRvIHJpY2V2byB1bmEgbm90aWZpY2EgZGFsIGNsaWVudCwgYWdnaW9ybm8gbGlzdGEgZm90b1xyXG5cclxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0gUFJPVkEgQSBNRVRURVJFIFFVSSBJTCBMT0FESU5HIEFOSU1BWklPTkUgLS0tLS0tLS0tLS0tLS1cclxuICAgICAgZmV0Y2hQaG90b0xpc3QoKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGhvdG9MaXN0KCk7XHJcbiAgfSwgW10pOy8vIExlIHBhcmVudGVzaSBxdWFkcmUgdnVvdGUgaW5kaWNhbm8gY2hlIHF1ZXN0byBlZmZldHRvIG5vbiBkaXBlbmRlIGRhIG5lc3N1bmEgdmFyaWFiaWxlIGUgcXVpbmRpIHZlcnLDoCBlc2VndWl0byBzb2xvIHVuYSB2b2x0YSBkb3BvIGlsIG1vbnRhZ2dpbyBkZWwgY29tcG9uZW50ZS5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8bWFpbj5cclxuICAgICAgXHJcbiAgICAgIDxTcGFya2xlc1ByZXZpZXcgLz5cclxuICAgICAgPFRhYnNEZW1vIC8+XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRhYmxlIFxyXG4gIGNvbG9yPXsncHJpbWFyeSd9XHJcbiAgc2VsZWN0aW9uTW9kZT1cIm11bHRpcGxlXCIgXHJcbiAgYXJpYS1sYWJlbD1cIkV4YW1wbGUgc3RhdGljIGNvbGxlY3Rpb24gdGFibGVcIlxyXG4+XHJcbiAgPFRhYmxlSGVhZGVyPlxyXG4gIDxUYWJsZUNvbHVtbj5JTUFHRTwvVGFibGVDb2x1bW4+IFxyXG4gICAgPFRhYmxlQ29sdW1uPk5BTUU8L1RhYmxlQ29sdW1uPlxyXG4gICAgPFRhYmxlQ29sdW1uPlNUQVRVUzwvVGFibGVDb2x1bW4+XHJcbiAgICBcclxuICA8L1RhYmxlSGVhZGVyPlxyXG4gIDxUYWJsZUJvZHk+XHJcbiAge3Bob3RvTGlzdC5tYXAoKHBob3RvLCBpbmRleCkgPT4gKCAvLyBVdGlsaXp6YSBwaG90byBjb21lIGVsZW1lbnRvIGNvcnJlbnRlXHJcbiAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XHJcbiAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgPGltZyBzcmM9e3Bob3RvLmltYWdlVXJsfSBhbHQ9e2BQaG90byAke2luZGV4fWB9IHN0eWxlPXt7IG1heFdpZHRoOiAnNzBweCcgfX0gLz5cclxuICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgIDxUYWJsZUNlbGw+e3Bob3RvLm5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICA8L1RhYmxlUm93PlxyXG4gICkpfVxyXG48L1RhYmxlQm9keT5cclxuPC9UYWJsZT5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIDwvbWFpbiA+XHJcblxyXG5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTcGFya2xlc1ByZXZpZXciLCJUYWJzRGVtbyIsInNvY2tldElPQ2xpZW50IiwiVGFibGUiLCJUYWJsZUhlYWRlciIsIlRhYmxlQ29sdW1uIiwiVGFibGVCb2R5IiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJjb2xvcnMiLCJIb21lIiwicGhvdG9MaXN0Iiwic2V0UGhvdG9MaXN0IiwiZmV0Y2hQaG90b0xpc3QiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJzb2NrZXQiLCJvbiIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjb2xvciIsInNlbGVjdGlvbk1vZGUiLCJhcmlhLWxhYmVsIiwibWFwIiwicGhvdG8iLCJpbmRleCIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0Iiwic3R5bGUiLCJtYXhXaWR0aCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
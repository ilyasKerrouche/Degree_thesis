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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0202f39dc829\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjAyMDJmMzlkYzgyOVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _spark_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spark-test */ \"(app-pages-browser)/./src/app/spark-test.tsx\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _tabs_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-test */ \"(app-pages-browser)/./src/app/tabs-test.tsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-T23UE3AD.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-YRZGWF2W.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-TSPNSPCL.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-FKPXBCGS.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-CIL4Y7FA.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-F3UDT23P.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst colors = [\n    \"default\",\n    \"primary\",\n    \"secondary\",\n    \"success\",\n    \"warning\",\n    \"danger\"\n];\nfunction Home() {\n    _s();\n    const [photoList, setPhotoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Estraggo le foto analizzate salvate nella directory lato server\n    async function fetchPhotoList() {\n        try {\n            const response = await fetch(\"http://127.0.0.1:5000/photo_list\");\n            const data = await response.json();\n            setPhotoList(data);\n        } catch (error) {\n            console.error(\"Errore durante il recupero dell'elenco delle foto:\", error);\n            return [];\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"http://127.0.0.1:5000\");\n        socket.on(\"photo_analyzed_notification\", ()=>{\n            // quando ricevo una notifica dal client, aggiorno lista foto\n            // -------------- PROVA A METTERE QUI IL LOADING ANIMAZIONE --------------\n            fetchPhotoList();\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPhotoList();\n    }, []); // Le parentesi quadre vuote indicano che questo effetto non dipende da nessuna variabile e quindi verrà eseguito solo una volta dopo il montaggio del componente.\n    const [selectedColor, setSelectedColor] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"default\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_spark_test__WEBPACK_IMPORTED_MODULE_2__.SparklesPreview, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabs_test__WEBPACK_IMPORTED_MODULE_4__.TabsDemo, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.table_default, {\n                        color: \"primary\",\n                        selectionMode: \"multiple\",\n                        \"aria-label\": \"Example static collection table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.table_header_default, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"IMAGE\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 3\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"NAME\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"STATUS\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 5\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.table_body_default, {\n                                children: photoList.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.table_row_default, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.table_cell_default, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: imageUrl,\n                                                    alt: \"Photo \".concat(index),\n                                                    style: {\n                                                        maxWidth: \"70px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 11\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.table_cell_default, {\n                                                children: [\n                                                    \"Photo:\",\n                                                    index\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.table_cell_default, {\n                                                children: \"aaaa\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 7\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"kHk1p2IVeW48JmIIl9jWoKYwUgs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUVKO0FBQ3pCO0FBQ2lCO0FBQ087QUFDdUU7QUFFckgsTUFBTVksU0FBUztJQUFDO0lBQVc7SUFBVztJQUFhO0lBQVc7SUFBVztDQUFTO0FBR25FLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUc3QyxrRUFBa0U7SUFDbEUsZUFBZWU7UUFDYixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsYUFBYUk7UUFDZixFQUFFLE9BQU9FLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHNEQUF1REE7WUFDckUsT0FBTyxFQUFFO1FBQ1g7SUFDRjtJQUVBbkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNcUIsU0FBU2xCLDREQUFjQSxDQUFDO1FBRTlCa0IsT0FBT0MsRUFBRSxDQUFDLCtCQUErQjtZQUN2Qyw2REFBNkQ7WUFFN0QsMEVBQTBFO1lBQzFFUjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUxkLGdEQUFTQSxDQUFDO1FBQ1JjO0lBQ0YsR0FBRyxFQUFFLEdBQUUsa0tBQWtLO0lBR3pLLE1BQU0sQ0FBQ1MsZUFBZUMsaUJBQWlCLEdBQUcxQixxREFBYyxDQUFDO0lBRXpELHFCQUVFLDhEQUFDMkI7OzBCQUVDLDhEQUFDeEIsd0RBQWVBOzs7OzswQkFDaEIsOERBQUNDLGdEQUFRQTs7Ozs7MEJBSVQsOERBQUN3QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2YsNEVBQUN2Qiw0REFBS0E7d0JBQ1p3QixPQUFPO3dCQUNQQyxlQUFjO3dCQUNkQyxjQUFXOzswQ0FFWCw4REFBQ3pCLG1FQUFXQTs7a0RBQ1osOERBQUNDLG1FQUFXQTtrREFBQzs7Ozs7O2tEQUNYLDhEQUFDQSxtRUFBV0E7a0RBQUM7Ozs7OztrREFDYiw4REFBQ0EsbUVBQVdBO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBR2YsOERBQUNDLGlFQUFTQTswQ0FDUEssVUFBVW1CLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxzQkFDeEIsOERBQUN6QixpRUFBUUE7OzBEQUNDLDhEQUFDQyxrRUFBU0E7MERBQ2hCLDRFQUFDeUI7b0RBQUlDLEtBQUtIO29EQUFVSSxLQUFLLFNBQWUsT0FBTkg7b0RBQVNJLE9BQU87d0RBQUVDLFVBQVU7b0RBQU87Ozs7Ozs7Ozs7OzBEQUd2RSw4REFBQzdCLGtFQUFTQTs7b0RBQUM7b0RBQU93Qjs7Ozs7OzswREFDbEIsOERBQUN4QixrRUFBU0E7MERBQUM7Ozs7Ozs7dUNBTkV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQnJCO0dBckZ3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRocmVlRENhcmREZW1vIH0gZnJvbSBcIi4vM2QtdGVzdFwiO1xyXG5pbXBvcnQgeyBTcGFya2xlc1ByZXZpZXcgfSBmcm9tIFwiLi9zcGFyay10ZXN0XCI7XHJcbmltcG9ydCAnLi9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHsgVGFic0RlbW8gfSBmcm9tICcuL3RhYnMtdGVzdCc7XHJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IHtUYWJsZSwgVGFibGVIZWFkZXIsIFRhYmxlQ29sdW1uLCBUYWJsZUJvZHksIFRhYmxlUm93LCBUYWJsZUNlbGwsIFJhZGlvR3JvdXAsIFJhZGlvfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IFtcImRlZmF1bHRcIiwgXCJwcmltYXJ5XCIsIFwic2Vjb25kYXJ5XCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIl07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcGhvdG9MaXN0LCBzZXRQaG90b0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgLy8gRXN0cmFnZ28gbGUgZm90byBhbmFsaXp6YXRlIHNhbHZhdGUgbmVsbGEgZGlyZWN0b3J5IGxhdG8gc2VydmVyXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQaG90b0xpc3QoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjUwMDAvcGhvdG9fbGlzdCcpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQaG90b0xpc3QoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcmUgZHVyYW50ZSBpbCByZWN1cGVybyBkZWxsXFwnZWxlbmNvIGRlbGxlIGZvdG86JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMCcpXHJcblxyXG4gICAgc29ja2V0Lm9uKCdwaG90b19hbmFseXplZF9ub3RpZmljYXRpb24nLCAoKSA9PiB7XHJcbiAgICAgIC8vIHF1YW5kbyByaWNldm8gdW5hIG5vdGlmaWNhIGRhbCBjbGllbnQsIGFnZ2lvcm5vIGxpc3RhIGZvdG9cclxuXHJcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tIFBST1ZBIEEgTUVUVEVSRSBRVUkgSUwgTE9BRElORyBBTklNQVpJT05FIC0tLS0tLS0tLS0tLS0tXHJcbiAgICAgIGZldGNoUGhvdG9MaXN0KCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBob3RvTGlzdCgpO1xyXG4gIH0sIFtdKTsvLyBMZSBwYXJlbnRlc2kgcXVhZHJlIHZ1b3RlIGluZGljYW5vIGNoZSBxdWVzdG8gZWZmZXR0byBub24gZGlwZW5kZSBkYSBuZXNzdW5hIHZhcmlhYmlsZSBlIHF1aW5kaSB2ZXJyw6AgZXNlZ3VpdG8gc29sbyB1bmEgdm9sdGEgZG9wbyBpbCBtb250YWdnaW8gZGVsIGNvbXBvbmVudGUuXHJcblxyXG4gIFxyXG4gIGNvbnN0IFtzZWxlY3RlZENvbG9yLCBzZXRTZWxlY3RlZENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKFwiZGVmYXVsdFwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8bWFpbj5cclxuICAgICAgXHJcbiAgICAgIDxTcGFya2xlc1ByZXZpZXcgLz5cclxuICAgICAgPFRhYnNEZW1vIC8+XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRhYmxlIFxyXG4gIGNvbG9yPXsncHJpbWFyeSd9XHJcbiAgc2VsZWN0aW9uTW9kZT1cIm11bHRpcGxlXCIgXHJcbiAgYXJpYS1sYWJlbD1cIkV4YW1wbGUgc3RhdGljIGNvbGxlY3Rpb24gdGFibGVcIlxyXG4+XHJcbiAgPFRhYmxlSGVhZGVyPlxyXG4gIDxUYWJsZUNvbHVtbj5JTUFHRTwvVGFibGVDb2x1bW4+IFxyXG4gICAgPFRhYmxlQ29sdW1uPk5BTUU8L1RhYmxlQ29sdW1uPlxyXG4gICAgPFRhYmxlQ29sdW1uPlNUQVRVUzwvVGFibGVDb2x1bW4+XHJcbiAgICBcclxuICA8L1RhYmxlSGVhZGVyPlxyXG4gIDxUYWJsZUJvZHk+XHJcbiAgICB7cGhvdG9MaXN0Lm1hcCgoaW1hZ2VVcmwsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD17YFBob3RvICR7aW5kZXh9YH0gc3R5bGU9e3sgbWF4V2lkdGg6ICc3MHB4JyB9fSAvPlxyXG5cclxuICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICA8VGFibGVDZWxsPlBob3RvOntpbmRleH08L1RhYmxlQ2VsbD5cclxuICAgICAgICA8VGFibGVDZWxsPmFhYWE8L1RhYmxlQ2VsbD5cclxuXHJcbiAgICAgIDwvVGFibGVSb3c+XHJcbiAgICApKX1cclxuICA8L1RhYmxlQm9keT5cclxuPC9UYWJsZT5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICA8L21haW4gPlxyXG5cclxuXHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3BhcmtsZXNQcmV2aWV3IiwiVGFic0RlbW8iLCJzb2NrZXRJT0NsaWVudCIsIlRhYmxlIiwiVGFibGVIZWFkZXIiLCJUYWJsZUNvbHVtbiIsIlRhYmxlQm9keSIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiY29sb3JzIiwiSG9tZSIsInBob3RvTGlzdCIsInNldFBob3RvTGlzdCIsImZldGNoUGhvdG9MaXN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic29ja2V0Iiwib24iLCJzZWxlY3RlZENvbG9yIiwic2V0U2VsZWN0ZWRDb2xvciIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjb2xvciIsInNlbGVjdGlvbk1vZGUiLCJhcmlhLWxhYmVsIiwibWFwIiwiaW1hZ2VVcmwiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsInN0eWxlIiwibWF4V2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
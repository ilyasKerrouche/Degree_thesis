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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1ad09fc3d673\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjFhZDA5ZmMzZDY3M1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _spark_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spark-test */ \"(app-pages-browser)/./src/app/spark-test.tsx\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _tabs_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-test */ \"(app-pages-browser)/./src/app/tabs-test.tsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-T23UE3AD.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-YRZGWF2W.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-TSPNSPCL.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-FKPXBCGS.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-CIL4Y7FA.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/table/dist/chunk-F3UDT23P.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [photoList, setPhotoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Estraggo le foto analizzate salvate nella directory lato server\n    async function fetchPhotoList() {\n        try {\n            const response = await fetch(\"http://127.0.0.1:5000/photo_list\");\n            const data = await response.json();\n            setPhotoList(data);\n        } catch (error) {\n            console.error(\"Errore durante il recupero dell'elenco delle foto:\", error);\n            return [];\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"http://127.0.0.1:5000\");\n        socket.on(\"photo_analyzed_notification\", ()=>{\n            // quando ricevo una notifica dal client, aggiorno lista foto\n            // -------------- PROVA A METTERE QUI IL LOADING ANIMAZIONE --------------\n            fetchPhotoList();\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPhotoList();\n    }, []); // Le parentesi quadre vuote indicano che questo effetto non dipende da nessuna variabile e quindi verrà eseguito solo una volta dopo il montaggio del componente.\n    const renderCell = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((user, columnKey)=>{\n        const cellValue = user[columnKey];\n        switch(columnKey){\n            case \"name\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(User, {\n                    avatarProps: {\n                        radius: \"lg\",\n                        src: user.avatar\n                    },\n                    description: user.email,\n                    name: cellValue,\n                    children: user.email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this);\n            case \"role\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-bold text-sm capitalize\",\n                            children: cellValue\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-bold text-sm capitalize text-default-400\",\n                            children: user.team\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this);\n            case \"status\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chip, {\n                    className: \"capitalize\",\n                    color: statusColorMap[user.status],\n                    size: \"sm\",\n                    variant: \"flat\",\n                    children: cellValue\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this);\n            case \"actions\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                            content: \"Details\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg text-default-400 cursor-pointer active:opacity-50\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EyeIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                            content: \"Edit user\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg text-default-400 cursor-pointer active:opacity-50\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                            color: \"danger\",\n                            content: \"Delete user\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg text-danger cursor-pointer active:opacity-50\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DeleteIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this);\n            default:\n                return cellValue;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_spark_test__WEBPACK_IMPORTED_MODULE_2__.SparklesPreview, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabs_test__WEBPACK_IMPORTED_MODULE_4__.TabsDemo, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.table_default, {\n                        \"aria-label\": \"Example table with dynamic content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.table_header_default, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"File Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"Image\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.table_column_default, {\n                                        children: \"Action\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 5\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.table_body_default, {\n                                children: photoList.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.table_row_default, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.table_cell_default, {\n                                                children: \"Photo \".concat(index)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.table_cell_default, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: imageUrl,\n                                                    alt: \"Photo \".concat(index),\n                                                    style: {\n                                                        maxWidth: \"100px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 11\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.table_cell_default, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: imageUrl,\n                                                    download: true,\n                                                    children: \"Download\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 11\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 119,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 7\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\explo\\\\OneDrive\\\\Desktop\\\\Degree_thesis\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"zc6zrv6JTuGiMiBxgl5mJC8HO8c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0VBQVNBOzBEQUNSLDRFQUFDK0M7b0RBQUkxQixLQUFLd0I7b0RBQVVHLEtBQUssU0FBZSxPQUFORjtvREFBU0csT0FBTzt3REFBRUMsVUFBVTtvREFBUTs7Ozs7Ozs7Ozs7MERBRXhFLDhEQUFDbEQsa0VBQVNBOzBEQUNSLDRFQUFDbUQ7b0RBQUVDLE1BQU1QO29EQUFVUSxRQUFROzhEQUFDOzs7Ozs7Ozs7Ozs7dUNBTmpCUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QnJCO0dBOUh3QjdDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRocmVlRENhcmREZW1vIH0gZnJvbSBcIi4vM2QtdGVzdFwiO1xyXG5pbXBvcnQgeyBTcGFya2xlc1ByZXZpZXcgfSBmcm9tIFwiLi9zcGFyay10ZXN0XCI7XHJcbmltcG9ydCAnLi9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHsgVGFic0RlbW8gfSBmcm9tICcuL3RhYnMtdGVzdCc7XHJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IHtUYWJsZSwgVGFibGVIZWFkZXIsIFRhYmxlQ29sdW1uLCBUYWJsZUJvZHksIFRhYmxlUm93LCBUYWJsZUNlbGwsIFJhZGlvR3JvdXAsIFJhZGlvfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcGhvdG9MaXN0LCBzZXRQaG90b0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgLy8gRXN0cmFnZ28gbGUgZm90byBhbmFsaXp6YXRlIHNhbHZhdGUgbmVsbGEgZGlyZWN0b3J5IGxhdG8gc2VydmVyXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQaG90b0xpc3QoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjUwMDAvcGhvdG9fbGlzdCcpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQaG90b0xpc3QoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcmUgZHVyYW50ZSBpbCByZWN1cGVybyBkZWxsXFwnZWxlbmNvIGRlbGxlIGZvdG86JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMCcpXHJcblxyXG4gICAgc29ja2V0Lm9uKCdwaG90b19hbmFseXplZF9ub3RpZmljYXRpb24nLCAoKSA9PiB7XHJcbiAgICAgIC8vIHF1YW5kbyByaWNldm8gdW5hIG5vdGlmaWNhIGRhbCBjbGllbnQsIGFnZ2lvcm5vIGxpc3RhIGZvdG9cclxuXHJcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tIFBST1ZBIEEgTUVUVEVSRSBRVUkgSUwgTE9BRElORyBBTklNQVpJT05FIC0tLS0tLS0tLS0tLS0tXHJcbiAgICAgIGZldGNoUGhvdG9MaXN0KCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBob3RvTGlzdCgpO1xyXG4gIH0sIFtdKTsvLyBMZSBwYXJlbnRlc2kgcXVhZHJlIHZ1b3RlIGluZGljYW5vIGNoZSBxdWVzdG8gZWZmZXR0byBub24gZGlwZW5kZSBkYSBuZXNzdW5hIHZhcmlhYmlsZSBlIHF1aW5kaSB2ZXJyw6AgZXNlZ3VpdG8gc29sbyB1bmEgdm9sdGEgZG9wbyBpbCBtb250YWdnaW8gZGVsIGNvbXBvbmVudGUuXHJcblxyXG4gIGNvbnN0IHJlbmRlckNlbGwgPSBSZWFjdC51c2VDYWxsYmFjaygodXNlciwgY29sdW1uS2V5KSA9PiB7XHJcbiAgICBjb25zdCBjZWxsVmFsdWUgPSB1c2VyW2NvbHVtbktleV07XHJcblxyXG4gICAgc3dpdGNoIChjb2x1bW5LZXkpIHtcclxuICAgICAgY2FzZSBcIm5hbWVcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFVzZXJcclxuICAgICAgICAgICAgYXZhdGFyUHJvcHM9e3tyYWRpdXM6IFwibGdcIiwgc3JjOiB1c2VyLmF2YXRhcn19XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt1c2VyLmVtYWlsfVxyXG4gICAgICAgICAgICBuYW1lPXtjZWxsVmFsdWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1c2VyLmVtYWlsfVxyXG4gICAgICAgICAgPC9Vc2VyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJyb2xlXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJvbGQgdGV4dC1zbSBjYXBpdGFsaXplXCI+e2NlbGxWYWx1ZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYm9sZCB0ZXh0LXNtIGNhcGl0YWxpemUgdGV4dC1kZWZhdWx0LTQwMFwiPnt1c2VyLnRlYW19PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcInN0YXR1c1wiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q2hpcCBjbGFzc05hbWU9XCJjYXBpdGFsaXplXCIgY29sb3I9e3N0YXR1c0NvbG9yTWFwW3VzZXIuc3RhdHVzXX0gc2l6ZT1cInNtXCIgdmFyaWFudD1cImZsYXRcIj5cclxuICAgICAgICAgICAge2NlbGxWYWx1ZX1cclxuICAgICAgICAgIDwvQ2hpcD5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiYWN0aW9uc1wiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnQ9XCJEZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWRlZmF1bHQtNDAwIGN1cnNvci1wb2ludGVyIGFjdGl2ZTpvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8RXllSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50PVwiRWRpdCB1c2VyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWRlZmF1bHQtNDAwIGN1cnNvci1wb2ludGVyIGFjdGl2ZTpvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPFRvb2x0aXAgY29sb3I9XCJkYW5nZXJcIiBjb250ZW50PVwiRGVsZXRlIHVzZXJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZGFuZ2VyIGN1cnNvci1wb2ludGVyIGFjdGl2ZTpvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gY2VsbFZhbHVlO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8bWFpbj5cclxuICAgICAgXHJcbiAgICAgIDxTcGFya2xlc1ByZXZpZXcgLz5cclxuICAgICAgPFRhYnNEZW1vIC8+XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJFeGFtcGxlIHRhYmxlIHdpdGggZHluYW1pYyBjb250ZW50XCI+XHJcbiAgPFRhYmxlSGVhZGVyPlxyXG4gICAgPFRhYmxlQ29sdW1uPkZpbGUgTmFtZTwvVGFibGVDb2x1bW4+XHJcbiAgICA8VGFibGVDb2x1bW4+SW1hZ2U8L1RhYmxlQ29sdW1uPlxyXG4gICAgPFRhYmxlQ29sdW1uPkFjdGlvbjwvVGFibGVDb2x1bW4+XHJcbiAgPC9UYWJsZUhlYWRlcj5cclxuICA8VGFibGVCb2R5PlxyXG4gICAge3Bob3RvTGlzdC5tYXAoKGltYWdlVXJsLCBpbmRleCkgPT4gKFxyXG4gICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPFRhYmxlQ2VsbD57YFBob3RvICR7aW5kZXh9YH08L1RhYmxlQ2VsbD5cclxuICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9e2BQaG90byAke2luZGV4fWB9IHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHgnIH19IC8+XHJcbiAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgIDxhIGhyZWY9e2ltYWdlVXJsfSBkb3dubG9hZD5Eb3dubG9hZDwvYT5cclxuICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgPC9UYWJsZVJvdz5cclxuICAgICkpfVxyXG4gIDwvVGFibGVCb2R5PlxyXG48L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgPC9tYWluID5cclxuXHJcblxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNwYXJrbGVzUHJldmlldyIsIlRhYnNEZW1vIiwic29ja2V0SU9DbGllbnQiLCJUYWJsZSIsIlRhYmxlSGVhZGVyIiwiVGFibGVDb2x1bW4iLCJUYWJsZUJvZHkiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsIkhvbWUiLCJwaG90b0xpc3QiLCJzZXRQaG90b0xpc3QiLCJmZXRjaFBob3RvTGlzdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInNvY2tldCIsIm9uIiwicmVuZGVyQ2VsbCIsInVzZUNhbGxiYWNrIiwidXNlciIsImNvbHVtbktleSIsImNlbGxWYWx1ZSIsIlVzZXIiLCJhdmF0YXJQcm9wcyIsInJhZGl1cyIsInNyYyIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiZW1haWwiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInRlYW0iLCJDaGlwIiwiY29sb3IiLCJzdGF0dXNDb2xvck1hcCIsInN0YXR1cyIsInNpemUiLCJ2YXJpYW50IiwiVG9vbHRpcCIsImNvbnRlbnQiLCJzcGFuIiwiRXllSWNvbiIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIm1haW4iLCJhcmlhLWxhYmVsIiwibWFwIiwiaW1hZ2VVcmwiLCJpbmRleCIsImltZyIsImFsdCIsInN0eWxlIiwibWF4V2lkdGgiLCJhIiwiaHJlZiIsImRvd25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
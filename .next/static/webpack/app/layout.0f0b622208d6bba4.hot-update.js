"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/styles/tailwind.css":
/*!*********************************!*\
  !*** ./src/styles/tailwind.css ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"4e4deb4e53b5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvdGFpbHdpbmQuY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsiL1VzZXJzL2Nhcm1lbnZhY2NoaW8vRGV2ZWxvcGVyL2NvZGUvY2FydXNvL3Jldi9zcmMvc3R5bGVzL3RhaWx3aW5kLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjRlNGRlYjRlNTNiNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/tailwind.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.jsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Logo */ \"(app-pages-browser)/./src/components/Logo.jsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Navigation */ \"(app-pages-browser)/./src/components/Navigation.jsx\");\n/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/SectionProvider */ \"(app-pages-browser)/./src/components/SectionProvider.jsx\");\n/* __next_internal_client_entry_do_not_use__ Layout auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { children, allSections } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    // We consider any route under /docs to be a doc route\n    const isDocs = pathname.startsWith(\"/docs\");\n    // Grab the relevant doc sections if any\n    const sectionsForThisPage = allSections[pathname] ?? [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SectionProvider__WEBPACK_IMPORTED_MODULE_7__.SectionProvider, {\n        sections: sectionsForThisPage,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: isDocs ? \"h-full lg:ml-72 xl:ml-80\" : \"h-full\",\n            children: [\n                isDocs ? /* ------------- DOC ROUTE PINNED LAYOUT ------------- */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.header, {\n                    layoutScroll: true,\n                    className: \"contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto  lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden lg:flex mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    \"aria-label\": \"Home\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_5__.Logo, {\n                                        className: \"h-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__.Navigation, {\n                                className: \"hidden lg:mt-10 lg:block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this) : /* ------------- NON-DOC ROUTE ------------- */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                            className: \"flex-auto\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {\n                            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNpQjtBQUNQO0FBRU07QUFDQTtBQUNKO0FBQ1k7QUFDVTtBQUV2RCxTQUFTUSxPQUFPLEtBQXlCO1FBQXpCLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQXpCOztJQUNyQixNQUFNQyxXQUFXViw0REFBV0E7SUFDNUIsc0RBQXNEO0lBQ3RELE1BQU1XLFNBQVNELFNBQVNFLFVBQVUsQ0FBQztJQUVuQyx3Q0FBd0M7SUFDeEMsTUFBTUMsc0JBQXNCSixXQUFXLENBQUNDLFNBQVMsSUFBSSxFQUFFO0lBRXZELHFCQUNFLDhEQUFDSix3RUFBZUE7UUFBQ1EsVUFBVUQ7a0JBS3pCLDRFQUFDRTtZQUFJQyxXQUFXTCxTQUFTLDZCQUE2Qjs7Z0JBQ25EQSxTQUNDLHVEQUF1RCxpQkFDdkQsOERBQUNWLGlEQUFNQSxDQUFDZ0IsTUFBTTtvQkFDWkMsWUFBWTtvQkFDWkYsV0FBVTs4QkFFViw0RUFBQ0Q7d0JBQ0NDLFdBQVU7OzBDQUtWLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ2pCLGtEQUFJQTtvQ0FBQ29CLE1BQUs7b0NBQUlDLGNBQVc7OENBQ3hCLDRFQUFDaEIsa0RBQUlBO3dDQUFDWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUlwQiw4REFBQ2Isc0RBQU1BOzs7OzswQ0FDUCw4REFBQ0UsOERBQVVBO2dDQUFDVyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzJCQUkxQiw2Q0FBNkMsaUJBQzdDLDhEQUFDYixzREFBTUE7Ozs7OzhCQU9ULDhEQUFDWTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUFLTCxXQUFVO3NDQUFhUjs7Ozs7O3NDQUM3Qiw4REFBQ04sc0RBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCO0dBckRnQks7O1FBQ0dQLHdEQUFXQTs7O0tBRGRPIiwic291cmNlcyI6WyIvVXNlcnMvY2FybWVudmFjY2hpby9EZXZlbG9wZXIvY29kZS9jYXJ1c28vcmV2L3NyYy9jb21wb25lbnRzL0xheW91dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3RlclwiXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Mb2dvXCJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiQC9jb21wb25lbnRzL05hdmlnYXRpb25cIlxuaW1wb3J0IHsgU2VjdGlvblByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TZWN0aW9uUHJvdmlkZXJcIlxuXG5leHBvcnQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGFsbFNlY3Rpb25zIH0pIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG4gIC8vIFdlIGNvbnNpZGVyIGFueSByb3V0ZSB1bmRlciAvZG9jcyB0byBiZSBhIGRvYyByb3V0ZVxuICBjb25zdCBpc0RvY3MgPSBwYXRobmFtZS5zdGFydHNXaXRoKFwiL2RvY3NcIilcblxuICAvLyBHcmFiIHRoZSByZWxldmFudCBkb2Mgc2VjdGlvbnMgaWYgYW55XG4gIGNvbnN0IHNlY3Rpb25zRm9yVGhpc1BhZ2UgPSBhbGxTZWN0aW9uc1twYXRobmFtZV0gPz8gW11cblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uUHJvdmlkZXIgc2VjdGlvbnM9e3NlY3Rpb25zRm9yVGhpc1BhZ2V9PlxuICAgICAgey8qIFxuICAgICAgICBJZiBkb2Mgcm91dGUsIG9mZnNldCBsZWZ0IGZvciBwaW5uZWQgc2lkZWJhciBcbiAgICAgICAgRWxzZSBub3JtYWwgbGF5b3V0IFxuICAgICAgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNEb2NzID8gXCJoLWZ1bGwgbGc6bWwtNzIgeGw6bWwtODBcIiA6IFwiaC1mdWxsXCJ9PlxuICAgICAgICB7aXNEb2NzID8gKFxuICAgICAgICAgIC8qIC0tLS0tLS0tLS0tLS0gRE9DIFJPVVRFIFBJTk5FRCBMQVlPVVQgLS0tLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIDxtb3Rpb24uaGVhZGVyXG4gICAgICAgICAgICBsYXlvdXRTY3JvbGxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRzIGxnOnBvaW50ZXItZXZlbnRzLW5vbmUgbGc6Zml4ZWQgbGc6aW5zZXQtMCBsZzp6LTQwIGxnOmZsZXhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudHMgbGc6cG9pbnRlci1ldmVudHMtYXV0byBsZzpibG9jayBsZzp3LTcyIGxnOm92ZXJmbG93LXktYXV0byBcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZzpib3JkZXItciBsZzpib3JkZXItemluYy05MDAvMTAgbGc6cHgtNiBsZzpwYi04IGxnOnB0LTQgeGw6dy04MFxuICAgICAgICAgICAgICAgICAgICAgICAgIGxnOmRhcms6Ym9yZGVyLXdoaXRlLzEwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIFBpbm5lZCBkb2MgbG9nbyAoZGVza3RvcCBvbmx5KSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBtYi00XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcmlhLWxhYmVsPVwiSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgPExvZ28gY2xhc3NOYW1lPVwiaC02XCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogUmVuZGVycyBkb2Mgcm91dGXigJlzIHNlYXJjaCAmIG5hdiBvbiB0b3AsIG9yIHlvdSBjYW4gc2tpcCAqL31cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICA8TmF2aWdhdGlvbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6bXQtMTAgbGc6YmxvY2tcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uaGVhZGVyPlxuICAgICAgICApIDogKFxuICAgICAgICAgIC8qIC0tLS0tLS0tLS0tLS0gTk9OLURPQyBST1VURSAtLS0tLS0tLS0tLS0tICovXG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBcbiAgICAgICAgICBNYWluIGNvbnRlbnQgYXJlYSwgdW5kZXIgdGhlIGhlYWRlciBcbiAgICAgICAgICBXZSBkbyBwdC0xNCB0byBhdm9pZCBvdmVybGFwIHdpdGggdGhlIGZpeGVkIGhlYWRlciBcbiAgICAgICAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgZmxleC1jb2wgcHgtNCBwdC0xNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWF1dG9cIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NlY3Rpb25Qcm92aWRlcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUGF0aG5hbWUiLCJtb3Rpb24iLCJGb290ZXIiLCJIZWFkZXIiLCJMb2dvIiwiTmF2aWdhdGlvbiIsIlNlY3Rpb25Qcm92aWRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiYWxsU2VjdGlvbnMiLCJwYXRobmFtZSIsImlzRG9jcyIsInN0YXJ0c1dpdGgiLCJzZWN0aW9uc0ZvclRoaXNQYWdlIiwic2VjdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJsYXlvdXRTY3JvbGwiLCJocmVmIiwiYXJpYS1sYWJlbCIsIm1haW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout.jsx\n"));

/***/ })

});
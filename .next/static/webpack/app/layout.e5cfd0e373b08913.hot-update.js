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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"701a4a603e56\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvdGFpbHdpbmQuY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsiL1VzZXJzL2Nhcm1lbnZhY2NoaW8vRGV2ZWxvcGVyL2NvZGUvY2FydXNvL3Jldi9zcmMvc3R5bGVzL3RhaWx3aW5kLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjcwMWE0YTYwM2U1NlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/tailwind.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/MobileNavigation.jsx":
/*!*********************************************!*\
  !*** ./src/components/MobileNavigation.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nvar _s = $RefreshSig$();\nfunction MobileNavigationDialog(param) {\n    let { isOpen, close } = param;\n    _s();\n    let pathname = usePathname();\n    let searchParams = useSearchParams();\n    let initialPathname = useRef(pathname).current;\n    let initialSearchParams = useRef(searchParams).current;\n    useEffect({\n        \"MobileNavigationDialog.useEffect\": ()=>{\n            if (pathname !== initialPathname || searchParams !== initialSearchParams) {\n                close();\n            }\n        }\n    }[\"MobileNavigationDialog.useEffect\"], [\n        pathname,\n        searchParams,\n        close,\n        initialPathname,\n        initialSearchParams\n    ]);\n    function onClickDialog(event) {\n        if (!(event.target instanceof HTMLElement)) {\n            return;\n        }\n        let link = event.target.closest(\"a\");\n        if (link && link.pathname + link.search + link.hash === window.location.pathname + window.location.search + window.location.hash) {\n            close();\n        }\n    }\n    let isDocs = pathname.startsWith(\"/docs\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dialog, {\n        open: isOpen,\n        onClickCapture: onClickDialog,\n        onClose: close,\n        className: \"fixed inset-0 z-50 lg:hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DialogBackdrop, {\n                transition: true,\n                className: \"fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm  data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200  data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/40\"\n            }, void 0, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DialogPanel, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransitionChild, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                            className: \"data-[closed]:opacity-0 data-[enter]:duration-300  data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransitionChild, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion.div, {\n                            layoutScroll: true,\n                            className: \"fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 duration-500 ease-in-out data-[closed]:-translate-x-full min-[416px]:max-w-sm sm:px-6 sm:pb-10 dark:bg-zinc-900 dark:ring-zinc-800\",\n                            children: isDocs ? /* If doc route => show doc nav exactly as before */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navigation, {}, void 0, false, {\n                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this) : /* If landing or any non-doc route => show your 3 links + doc nav as well */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"space-y-4 text-sm mb-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    className: \"text-zinc-600 dark:text-white text-base font-semibold\",\n                                                    children: \"NFT\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    className: \"text-zinc-600 dark:text-white text-base font-semibold\",\n                                                    children: \"Bettors Club\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"/docs\",\n                                                    className: \"text-zinc-600 dark:text-white text-base font-semibold\",\n                                                    children: \"Docs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navigation, {}, void 0, false, {\n                                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/MobileNavigation.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(MobileNavigationDialog, \"+grgFhB4x43OZm4RdOA/RJ/J+xo=\", true);\n_c = MobileNavigationDialog;\nvar _c;\n$RefreshReg$(_c, \"MobileNavigationDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vYmlsZU5hdmlnYXRpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSx1QkFBdUIsS0FBaUI7UUFBakIsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBakI7O0lBQzlCLElBQUlDLFdBQVdDO0lBQ2YsSUFBSUMsZUFBZUM7SUFDbkIsSUFBSUMsa0JBQWtCQyxPQUFPTCxVQUFVTSxPQUFPO0lBQzlDLElBQUlDLHNCQUFzQkYsT0FBT0gsY0FBY0ksT0FBTztJQUV0REU7NENBQVU7WUFDUixJQUFJUixhQUFhSSxtQkFBbUJGLGlCQUFpQksscUJBQXFCO2dCQUN4RVI7WUFDRjtRQUNGOzJDQUFHO1FBQUNDO1FBQVVFO1FBQWNIO1FBQU9LO1FBQWlCRztLQUFvQjtJQUV4RSxTQUFTRSxjQUFjQyxLQUFLO1FBQzFCLElBQUksQ0FBRUEsQ0FBQUEsTUFBTUMsTUFBTSxZQUFZQyxXQUFVLEdBQUk7WUFDMUM7UUFDRjtRQUNBLElBQUlDLE9BQU9ILE1BQU1DLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO1FBQ2hDLElBQ0VELFFBQ0FBLEtBQUtiLFFBQVEsR0FBR2EsS0FBS0UsTUFBTSxHQUFHRixLQUFLRyxJQUFJLEtBQ3JDQyxPQUFPQyxRQUFRLENBQUNsQixRQUFRLEdBQUdpQixPQUFPQyxRQUFRLENBQUNILE1BQU0sR0FBR0UsT0FBT0MsUUFBUSxDQUFDRixJQUFJLEVBQzFFO1lBQ0FqQjtRQUNGO0lBQ0Y7SUFFQSxJQUFJb0IsU0FBU25CLFNBQVNvQixVQUFVLENBQUM7SUFFakMscUJBQ0UsOERBQUNDO1FBQ0NDLE1BQU14QjtRQUNOeUIsZ0JBQWdCZDtRQUNoQmUsU0FBU3pCO1FBQ1QwQixXQUFVOzswQkFFViw4REFBQ0M7Z0JBQ0NDLFVBQVU7Z0JBQ1ZGLFdBQVU7Ozs7OzswQkFLWiw4REFBQ0c7O2tDQUNDLDhEQUFDQztrQ0FFQyw0RUFBQ0M7NEJBQ0NMLFdBQVU7Ozs7Ozs7Ozs7O2tDQUtkLDhEQUFDSTtrQ0FDQyw0RUFBQ0UsT0FBT0MsR0FBRzs0QkFDVEMsWUFBWTs0QkFDWlIsV0FBVTtzQ0FLVE4sU0FDQyxrREFBa0QsaUJBQ2xELDhEQUFDZTs7Ozt1Q0FFRCwwRUFBMEUsaUJBQzFFOztrREFDRSw4REFBQ0M7d0NBQUdWLFdBQVU7OzBEQUNaLDhEQUFDVzswREFDQyw0RUFBQ0M7b0RBQUVDLE1BQUs7b0RBQUliLFdBQVU7OERBQXdEOzs7Ozs7Ozs7OzswREFJaEYsOERBQUNXOzBEQUNDLDRFQUFDQztvREFBRUMsTUFBSztvREFBSWIsV0FBVTs4REFBd0Q7Ozs7Ozs7Ozs7OzBEQUloRiw4REFBQ1c7MERBQ0MsNEVBQUNDO29EQUFFQyxNQUFLO29EQUFRYixXQUFVOzhEQUF3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBT3RGLDhEQUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakI7R0E1RlNyQztLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2Nhcm1lbnZhY2NoaW8vRGV2ZWxvcGVyL2NvZGUvY2FydXNvL3Jldi9zcmMvY29tcG9uZW50cy9Nb2JpbGVOYXZpZ2F0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBNb2JpbGVOYXZpZ2F0aW9uRGlhbG9nKHsgaXNPcGVuLCBjbG9zZSB9KSB7XG4gIGxldCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG4gIGxldCBpbml0aWFsUGF0aG5hbWUgPSB1c2VSZWYocGF0aG5hbWUpLmN1cnJlbnRcbiAgbGV0IGluaXRpYWxTZWFyY2hQYXJhbXMgPSB1c2VSZWYoc2VhcmNoUGFyYW1zKS5jdXJyZW50XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGF0aG5hbWUgIT09IGluaXRpYWxQYXRobmFtZSB8fCBzZWFyY2hQYXJhbXMgIT09IGluaXRpYWxTZWFyY2hQYXJhbXMpIHtcbiAgICAgIGNsb3NlKClcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBjbG9zZSwgaW5pdGlhbFBhdGhuYW1lLCBpbml0aWFsU2VhcmNoUGFyYW1zXSlcblxuICBmdW5jdGlvbiBvbkNsaWNrRGlhbG9nKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGxpbmsgPSBldmVudC50YXJnZXQuY2xvc2VzdChcImFcIilcbiAgICBpZiAoXG4gICAgICBsaW5rICYmXG4gICAgICBsaW5rLnBhdGhuYW1lICsgbGluay5zZWFyY2ggKyBsaW5rLmhhc2ggPT09XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaFxuICAgICkge1xuICAgICAgY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0RvY3MgPSBwYXRobmFtZS5zdGFydHNXaXRoKFwiL2RvY3NcIilcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgIG9uQ2xpY2tDYXB0dXJlPXtvbkNsaWNrRGlhbG9nfVxuICAgICAgb25DbG9zZT17Y2xvc2V9XG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgbGc6aGlkZGVuXCJcbiAgICA+XG4gICAgICA8RGlhbG9nQmFja2Ryb3BcbiAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHRvcC0xNCBiZy16aW5jLTQwMC8yMCBiYWNrZHJvcC1ibHVyLXNtIFxuICAgICAgICAgICAgICAgICAgIGRhdGEtW2Nsb3NlZF06b3BhY2l0eS0wIGRhdGEtW2VudGVyXTpkdXJhdGlvbi0zMDAgZGF0YS1bbGVhdmVdOmR1cmF0aW9uLTIwMCBcbiAgICAgICAgICAgICAgICAgICBkYXRhLVtlbnRlcl06ZWFzZS1vdXQgZGF0YS1bbGVhdmVdOmVhc2UtaW4gZGFyazpiZy1ibGFjay80MFwiXG4gICAgICAvPlxuXG4gICAgICA8RGlhbG9nUGFuZWw+XG4gICAgICAgIDxUcmFuc2l0aW9uQ2hpbGQ+XG4gICAgICAgICAgey8qIEtlZXAgeW91ciBleGlzdGluZyA8SGVhZGVyPiwgdW5jaGFuZ2VkICovfVxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGEtW2Nsb3NlZF06b3BhY2l0eS0wIGRhdGEtW2VudGVyXTpkdXJhdGlvbi0zMDAgXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtW2xlYXZlXTpkdXJhdGlvbi0yMDAgZGF0YS1bZW50ZXJdOmVhc2Utb3V0IGRhdGEtW2xlYXZlXTplYXNlLWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1RyYW5zaXRpb25DaGlsZD5cblxuICAgICAgICA8VHJhbnNpdGlvbkNoaWxkPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBsYXlvdXRTY3JvbGxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCB0b3AtMTQgdy1mdWxsIG92ZXJmbG93LXktYXV0byBiZy13aGl0ZSBweC00IHBiLTQgcHQtNlxuICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3ctbGcgc2hhZG93LXppbmMtOTAwLzEwIHJpbmctMSByaW5nLXppbmMtOTAwLzcuNSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1bY2xvc2VkXTotdHJhbnNsYXRlLXgtZnVsbCBtaW4tWzQxNnB4XTptYXgtdy1zbSBzbTpweC02IHNtOnBiLTEwXG4gICAgICAgICAgICAgICAgICAgICAgIGRhcms6YmctemluYy05MDAgZGFyazpyaW5nLXppbmMtODAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNEb2NzID8gKFxuICAgICAgICAgICAgICAvKiBJZiBkb2Mgcm91dGUgPT4gc2hvdyBkb2MgbmF2IGV4YWN0bHkgYXMgYmVmb3JlICovXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAvKiBJZiBsYW5kaW5nIG9yIGFueSBub24tZG9jIHJvdXRlID0+IHNob3cgeW91ciAzIGxpbmtzICsgZG9jIG5hdiBhcyB3ZWxsICovXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktNCB0ZXh0LXNtIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNjAwIGRhcms6dGV4dC13aGl0ZSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIE5GVFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtemluYy02MDAgZGFyazp0ZXh0LXdoaXRlIHRleHQtYmFzZSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQmV0dG9ycyBDbHViXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZG9jc1wiIGNsYXNzTmFtZT1cInRleHQtemluYy02MDAgZGFyazp0ZXh0LXdoaXRlIHRleHQtYmFzZSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRG9jc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICB7LyogSW5zZXJ0IGRvYyBuYXYgc28gdGhlIGxhbmRpbmcgc2VlcyBkb2MgcGFnZXMgdG9vICovfVxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvVHJhbnNpdGlvbkNoaWxkPlxuICAgICAgPC9EaWFsb2dQYW5lbD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufSJdLCJuYW1lcyI6WyJNb2JpbGVOYXZpZ2F0aW9uRGlhbG9nIiwiaXNPcGVuIiwiY2xvc2UiLCJwYXRobmFtZSIsInVzZVBhdGhuYW1lIiwic2VhcmNoUGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwiaW5pdGlhbFBhdGhuYW1lIiwidXNlUmVmIiwiY3VycmVudCIsImluaXRpYWxTZWFyY2hQYXJhbXMiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrRGlhbG9nIiwiZXZlbnQiLCJ0YXJnZXQiLCJIVE1MRWxlbWVudCIsImxpbmsiLCJjbG9zZXN0Iiwic2VhcmNoIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaXNEb2NzIiwic3RhcnRzV2l0aCIsIkRpYWxvZyIsIm9wZW4iLCJvbkNsaWNrQ2FwdHVyZSIsIm9uQ2xvc2UiLCJjbGFzc05hbWUiLCJEaWFsb2dCYWNrZHJvcCIsInRyYW5zaXRpb24iLCJEaWFsb2dQYW5lbCIsIlRyYW5zaXRpb25DaGlsZCIsIkhlYWRlciIsIm1vdGlvbiIsImRpdiIsImxheW91dFNjcm9sbCIsIk5hdmlnYXRpb24iLCJ1bCIsImxpIiwiYSIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MobileNavigation.jsx\n"));

/***/ })

});
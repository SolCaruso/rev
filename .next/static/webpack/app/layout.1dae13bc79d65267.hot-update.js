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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"c0bce6572492\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvdGFpbHdpbmQuY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsiL1VzZXJzL2Nhcm1lbnZhY2NoaW8vRGV2ZWxvcGVyL2NvZGUvY2FydXNvL3Jldi9zcmMvc3R5bGVzL3RhaWx3aW5kLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMwYmNlNjU3MjQ5MlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/tailwind.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.jsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Logo */ \"(app-pages-browser)/./src/components/Logo.jsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Navigation */ \"(app-pages-browser)/./src/components/Navigation.jsx\");\n/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/SectionProvider */ \"(app-pages-browser)/./src/components/SectionProvider.jsx\");\n/* __next_internal_client_entry_do_not_use__ Layout auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { children, allSections } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const isDocs = pathname.startsWith(\"/docs\");\n    const sectionsForThisPage = allSections[pathname] ?? [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SectionProvider__WEBPACK_IMPORTED_MODULE_7__.SectionProvider, {\n        sections: sectionsForThisPage,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: isDocs ? \"h-full md:ml-72 xl:ml-80\" : \"h-full\",\n            children: [\n                isDocs ? /* ------------ DOC ROUTE PINNED LAYOUT FROM MD ------------ */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.header, {\n                    layoutScroll: true,\n                    className: \"contents md:pointer-events-none md:fixed md:inset-0 md:z-40 md:flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"contents md:pointer-events-auto md:block md:w-72 md:overflow-y-auto  md:border-r md:border-zinc-900/10 md:px-6 md:pb-8 md:pt-4 xl:w-80 md:dark:border-white/10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden md:flex mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    \"aria-label\": \"Home\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_5__.Logo, {\n                                        className: \"h-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__.Navigation, {\n                                className: \"hidden md:mt-10 md:block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this) : /* ----------- NON-DOC ROUTE ----------- */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex h-full flex-col px-4 pt-14 sm:px-6 md:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                            className: \"flex-auto\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {\n                            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/Layout.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNpQjtBQUNQO0FBRU07QUFDQTtBQUNKO0FBQ1k7QUFDVTtBQUV2RCxTQUFTUSxPQUFPLEtBQXlCO1FBQXpCLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQXpCOztJQUNyQixNQUFNQyxXQUFXViw0REFBV0E7SUFDNUIsTUFBTVcsU0FBU0QsU0FBU0UsVUFBVSxDQUFDO0lBRW5DLE1BQU1DLHNCQUFzQkosV0FBVyxDQUFDQyxTQUFTLElBQUksRUFBRTtJQUV2RCxxQkFDRSw4REFBQ0osd0VBQWVBO1FBQUNRLFVBQVVEO2tCQUV6Qiw0RUFBQ0U7WUFBSUMsV0FBV0wsU0FBUyw2QkFBNkI7O2dCQUNuREEsU0FDQyw2REFBNkQsaUJBQzdELDhEQUFDVixpREFBTUEsQ0FBQ2dCLE1BQU07b0JBQ1pDLFlBQVk7b0JBQ1pGLFdBQVU7OEJBRVYsNEVBQUNEO3dCQUNDQyxXQUFVOzswQ0FLViw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNqQixrREFBSUE7b0NBQUNvQixNQUFLO29DQUFJQyxjQUFXOzhDQUN4Qiw0RUFBQ2hCLGtEQUFJQTt3Q0FBQ1ksV0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHcEIsOERBQUNiLHNEQUFNQTs7Ozs7MENBQ1AsOERBQUNFLDhEQUFVQTtnQ0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7OzsyQkFJMUIseUNBQXlDLGlCQUN6Qyw4REFBQ2Isc0RBQU1BOzs7Ozs4QkFPVCw4REFBQ1k7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBS0wsV0FBVTtzQ0FBYVI7Ozs7OztzQ0FDN0IsOERBQUNOLHNEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtHQS9DZ0JLOztRQUNHUCx3REFBV0E7OztLQURkTyIsInNvdXJjZXMiOlsiL1VzZXJzL2Nhcm1lbnZhY2NoaW8vRGV2ZWxvcGVyL2NvZGUvY2FydXNvL3Jldi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXJcIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIlxuaW1wb3J0IHsgTG9nbyB9IGZyb20gXCJAL2NvbXBvbmVudHMvTG9nb1wiXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9OYXZpZ2F0aW9uXCJcbmltcG9ydCB7IFNlY3Rpb25Qcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2VjdGlvblByb3ZpZGVyXCJcblxuZXhwb3J0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBhbGxTZWN0aW9ucyB9KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxuICBjb25zdCBpc0RvY3MgPSBwYXRobmFtZS5zdGFydHNXaXRoKFwiL2RvY3NcIilcblxuICBjb25zdCBzZWN0aW9uc0ZvclRoaXNQYWdlID0gYWxsU2VjdGlvbnNbcGF0aG5hbWVdID8/IFtdXG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvblByb3ZpZGVyIHNlY3Rpb25zPXtzZWN0aW9uc0ZvclRoaXNQYWdlfT5cbiAgICAgIHsvKiBJZiBkb2Mgcm91dGUsIG9mZnNldCBsZWZ0IGZvciBwaW5uZWQgc2lkZWJhciBmcm9tIG1kIHVwLCBlbHNlIG5vcm1hbCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc0RvY3MgPyBcImgtZnVsbCBtZDptbC03MiB4bDptbC04MFwiIDogXCJoLWZ1bGxcIn0+XG4gICAgICAgIHtpc0RvY3MgPyAoXG4gICAgICAgICAgLyogLS0tLS0tLS0tLS0tIERPQyBST1VURSBQSU5ORUQgTEFZT1VUIEZST00gTUQgLS0tLS0tLS0tLS0tICovXG4gICAgICAgICAgPG1vdGlvbi5oZWFkZXJcbiAgICAgICAgICAgIGxheW91dFNjcm9sbFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudHMgbWQ6cG9pbnRlci1ldmVudHMtbm9uZSBtZDpmaXhlZCBtZDppbnNldC0wIG1kOnotNDAgbWQ6ZmxleFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50cyBtZDpwb2ludGVyLWV2ZW50cy1hdXRvIG1kOmJsb2NrIG1kOnctNzIgbWQ6b3ZlcmZsb3cteS1hdXRvIFxuICAgICAgICAgICAgICAgICAgICAgICAgIG1kOmJvcmRlci1yIG1kOmJvcmRlci16aW5jLTkwMC8xMCBtZDpweC02IG1kOnBiLTggbWQ6cHQtNCB4bDp3LTgwXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWQ6ZGFyazpib3JkZXItd2hpdGUvMTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogUGlubmVkIGRvYyBsb2dvIChkZXNrdG9wIG9ubHkpID0+IGhpZGRlbiBiZWxvdyBtZCwgZmxleCBhYm92ZSBtZCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtYi00XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcmlhLWxhYmVsPVwiSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgPExvZ28gY2xhc3NOYW1lPVwiaC02XCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIGNsYXNzTmFtZT1cImhpZGRlbiBtZDptdC0xMCBtZDpibG9ja1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5oZWFkZXI+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgLyogLS0tLS0tLS0tLS0gTk9OLURPQyBST1VURSAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogXG4gICAgICAgICAgTWFpbiBjb250ZW50IGFyZWEgdW5kZXIgdGhlIGhlYWRlciBcbiAgICAgICAgICBXZSBrZWVwIHRoZSB0b3AgcGFkZGluZyBzbyB0aGUgZml4ZWQgSGVhZGVyIGRvZXNuJ3Qgb3ZlcmxhcCBjb250ZW50XG4gICAgICAgICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC1mdWxsIGZsZXgtY29sIHB4LTQgcHQtMTQgc206cHgtNiBtZDpweC04XCI+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC1hdXRvXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9TZWN0aW9uUHJvdmlkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwibW90aW9uIiwiRm9vdGVyIiwiSGVhZGVyIiwiTG9nbyIsIk5hdmlnYXRpb24iLCJTZWN0aW9uUHJvdmlkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImFsbFNlY3Rpb25zIiwicGF0aG5hbWUiLCJpc0RvY3MiLCJzdGFydHNXaXRoIiwic2VjdGlvbnNGb3JUaGlzUGFnZSIsInNlY3Rpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibGF5b3V0U2Nyb2xsIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJtYWluIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout.jsx\n"));

/***/ })

});
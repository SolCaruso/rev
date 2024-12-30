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

/***/ "(app-pages-browser)/./src/components/ThemeToggle.jsx":
/*!****************************************!*\
  !*** ./src/components/ThemeToggle.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeToggle: () => (/* binding */ ThemeToggle)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.module.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SunIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        viewBox: \"0 0 20 20\",\n        fill: \"none\",\n        \"aria-hidden\": \"true\",\n        ...props,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z\"\n            }, void 0, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/ThemeToggle.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                strokeLinecap: \"round\",\n                d: \"M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707\"\n            }, void 0, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/ThemeToggle.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/ThemeToggle.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = SunIcon;\nfunction MoonIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        viewBox: \"0 0 20 20\",\n        fill: \"none\",\n        \"aria-hidden\": \"true\",\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z\"\n        }, void 0, false, {\n            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/ThemeToggle.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/ThemeToggle.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c1 = MoonIcon;\nfunction ThemeToggle() {\n    _s();\n    let { resolvedTheme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';\n    let [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeToggle.useEffect\": ()=>{\n            setMounted(true);\n        }\n    }[\"ThemeToggle.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5\",\n        \"aria-label\": mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme',\n        onClick: ()=>setTheme(otherTheme),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SunIcon, {\n                className: \"h-5 w-5 stroke-zinc-900 dark:hidden\"\n            }, void 0, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/ThemeToggle.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MoonIcon, {\n                className: \"hidden h-5 w-5 stroke-white dark:block\"\n            }, void 0, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/ThemeToggle.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/components/ThemeToggle.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ThemeToggle, \"t8+WCtmY6Q/K+YFmVfyga28+HWc=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c2 = ThemeToggle;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SunIcon\");\n$RefreshReg$(_c1, \"MoonIcon\");\n$RefreshReg$(_c2, \"ThemeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0w7QUFFdEMsU0FBU0csUUFBUUMsS0FBSztJQUNwQixxQkFDRSw4REFBQ0M7UUFBSUMsU0FBUTtRQUFZQyxNQUFLO1FBQU9DLGVBQVk7UUFBUSxHQUFHSixLQUFLOzswQkFDL0QsOERBQUNLO2dCQUFLQyxHQUFFOzs7Ozs7MEJBQ1IsOERBQUNEO2dCQUNDRSxlQUFjO2dCQUNkRCxHQUFFOzs7Ozs7Ozs7Ozs7QUFJVjtLQVZTUDtBQVlULFNBQVNTLFNBQVNSLEtBQUs7SUFDckIscUJBQ0UsOERBQUNDO1FBQUlDLFNBQVE7UUFBWUMsTUFBSztRQUFPQyxlQUFZO1FBQVEsR0FBR0osS0FBSztrQkFDL0QsNEVBQUNLO1lBQUtDLEdBQUU7Ozs7Ozs7Ozs7O0FBR2Q7TUFOU0U7QUFRRixTQUFTQzs7SUFDZCxJQUFJLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFLEdBQUdiLHFEQUFRQTtJQUMxQyxJQUFJYyxhQUFhRixrQkFBa0IsU0FBUyxVQUFVO0lBQ3RELElBQUksQ0FBQ0csU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUM7SUFFckNELGdEQUFTQTtpQ0FBQztZQUNSa0IsV0FBVztRQUNiO2dDQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFDQ0MsTUFBSztRQUNMQyxXQUFVO1FBQ1ZDLGNBQVlMLFVBQVUsQ0FBQyxVQUFVLEVBQUVELFdBQVcsTUFBTSxDQUFDLEdBQUc7UUFDeERPLFNBQVMsSUFBTVIsU0FBU0M7OzBCQUV4Qiw4REFBQ2I7Z0JBQVFrQixXQUFVOzs7Ozs7MEJBQ25CLDhEQUFDVDtnQkFBU1MsV0FBVTs7Ozs7Ozs7Ozs7O0FBRzFCO0dBcEJnQlI7O1FBQ29CWCxpREFBUUE7OztNQUQ1QlciLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJtZW52YWNjaGlvL0RldmVsb3Blci9jb2RlL2NhcnVzby9yZXYvc3JjL2NvbXBvbmVudHMvVGhlbWVUb2dnbGUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5cbmZ1bmN0aW9uIFN1bkljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aCBkPVwiTTEyLjUgMTBhMi41IDIuNSAwIDEgMS01IDAgMi41IDIuNSAwIDAgMSA1IDBaXCIgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIGQ9XCJNMTAgNS41di0xTTEzLjE4MiA2LjgxOGwuNzA3LS43MDdNMTQuNSAxMGgxTTEzLjE4MiAxMy4xODJsLjcwNy43MDdNMTAgMTUuNXYtMU02LjExIDEzLjg4OWwuNzA4LS43MDdNNC41IDEwaDFNNi4xMSA2LjExMWwuNzA4LjcwN1wiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmZ1bmN0aW9uIE1vb25JY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGggZD1cIk0xNS4yMjQgMTEuNzI0YTUuNSA1LjUgMCAwIDEtNi45NDktNi45NDkgNS41IDUuNSAwIDEgMCA2Ljk0OSA2Ljk0OVpcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVRvZ2dsZSgpIHtcbiAgbGV0IHsgcmVzb2x2ZWRUaGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgbGV0IG90aGVyVGhlbWUgPSByZXNvbHZlZFRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnXG4gIGxldCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaC02IHctNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGhvdmVyOmJnLXppbmMtOTAwLzUgZGFyazpob3ZlcjpiZy13aGl0ZS81XCJcbiAgICAgIGFyaWEtbGFiZWw9e21vdW50ZWQgPyBgU3dpdGNoIHRvICR7b3RoZXJUaGVtZX0gdGhlbWVgIDogJ1RvZ2dsZSB0aGVtZSd9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShvdGhlclRoZW1lKX1cbiAgICA+XG4gICAgICA8U3VuSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHN0cm9rZS16aW5jLTkwMCBkYXJrOmhpZGRlblwiIC8+XG4gICAgICA8TW9vbkljb24gY2xhc3NOYW1lPVwiaGlkZGVuIGgtNSB3LTUgc3Ryb2tlLXdoaXRlIGRhcms6YmxvY2tcIiAvPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUaGVtZSIsIlN1bkljb24iLCJwcm9wcyIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsInN0cm9rZUxpbmVjYXAiLCJNb29uSWNvbiIsIlRoZW1lVG9nZ2xlIiwicmVzb2x2ZWRUaGVtZSIsInNldFRoZW1lIiwib3RoZXJUaGVtZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ThemeToggle.jsx\n"));

/***/ })

});
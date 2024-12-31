/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_src_app_docs_docs_lazy_recursive_-_rsc_src_app_docs_docs_layout_jsx";
exports.ids = ["_rsc_src_app_docs_docs_lazy_recursive_-_rsc_src_app_docs_docs_layout_jsx"];
exports.modules = {

/***/ "(rsc)/./src/app/(docs)/docs lazy recursive ^\\.\\/.*$":
/*!*************************************************************!*\
  !*** ./src/app/(docs)/docs/ lazy ^\.\/.*$ namespace object ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./attachments/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/attachments/page.mdx",
		"_rsc_src_app_docs_docs_attachments_page_mdx"
	],
	"./authentication/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/authentication/page.mdx",
		"_rsc_src_app_docs_docs_authentication_page_mdx"
	],
	"./contacts/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/contacts/page.mdx",
		"_rsc_src_app_docs_docs_contacts_page_mdx"
	],
	"./conversations/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/conversations/page.mdx",
		"_rsc_src_app_docs_docs_conversations_page_mdx"
	],
	"./errors/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/errors/page.mdx",
		"_rsc_src_app_docs_docs_errors_page_mdx"
	],
	"./groups/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/groups/page.mdx",
		"_rsc_src_app_docs_docs_groups_page_mdx"
	],
	"./layout": [
		"(rsc)/./src/app/(docs)/docs/layout.jsx"
	],
	"./layout.jsx": [
		"(rsc)/./src/app/(docs)/docs/layout.jsx"
	],
	"./messages/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/messages/page.mdx",
		"_rsc_src_app_docs_docs_messages_page_mdx"
	],
	"./page.mdx": [
		"(rsc)/./src/app/(docs)/docs/page.mdx",
		"_rsc_src_app_docs_docs_page_mdx"
	],
	"./pagination/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/pagination/page.mdx",
		"_rsc_src_app_docs_docs_pagination_page_mdx"
	],
	"./quickstart/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/quickstart/page.mdx",
		"_rsc_src_app_docs_docs_quickstart_page_mdx"
	],
	"./sdks/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/sdks/page.mdx",
		"vendor-chunks/next",
		"_rsc_src_app_docs_docs_sdks_page_mdx"
	],
	"./webhooks/page.mdx": [
		"(rsc)/./src/app/(docs)/docs/webhooks/page.mdx",
		"_rsc_src_app_docs_docs_webhooks_page_mdx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(rsc)/./src/app/(docs)/docs lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(rsc)/./src/app/(docs)/docs/layout.jsx":
/*!****************************************!*\
  !*** ./src/app/(docs)/docs/layout.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DocsLayout),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-glob */ \"(rsc)/./node_modules/fast-glob/out/index.js\");\n/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_glob__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/providers */ \"(rsc)/./src/app/providers.jsx\");\n/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SectionProvider */ \"(rsc)/./src/components/SectionProvider.jsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ \"(rsc)/./src/components/Layout.jsx\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/tailwind.css */ \"(rsc)/./src/styles/tailwind.css\");\n// app/docs/docs/layout.jsx\n\n\n\n\n\n\nconst metadata = {\n    title: {\n        template: '%s - Protocol API Reference',\n        default: 'Protocol API Reference'\n    }\n};\nasync function DocsLayout({ children }) {\n    // Gather all doc sections from your MDX, same as before\n    let pages = await fast_glob__WEBPACK_IMPORTED_MODULE_1___default()('**/*.mdx', {\n        cwd: 'src/app/docs/docs'\n    });\n    let allSectionsEntries = await Promise.all(pages.map(async (filename)=>[\n            '/' + filename.replace(/(^|\\/)page\\.mdx$/, ''),\n            (await __webpack_require__(\"(rsc)/./src/app/(docs)/docs lazy recursive ^\\\\.\\\\/.*$\")(`./${filename}`)).sections\n        ]));\n    let allSections = Object.fromEntries(allSectionsEntries);\n    // Then wrap everything in Providers and SectionProvider\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_providers__WEBPACK_IMPORTED_MODULE_2__.Providers, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SectionProvider__WEBPACK_IMPORTED_MODULE_3__.SectionProvider, {\n            sections: [],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n                allSections: allSections,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/layout.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/layout.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/layout.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwLyhkb2NzKS9kb2NzL2xheW91dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJCQUEyQjs7QUFDQztBQUNlO0FBQ21CO0FBQ2xCO0FBQ2Q7QUFFdkIsTUFBTUksV0FBVztJQUN0QkMsT0FBTztRQUNMQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDWDtBQUNGLEVBQUM7QUFFYyxlQUFlQyxXQUFXLEVBQUVDLFFBQVEsRUFBRTtJQUNuRCx3REFBd0Q7SUFDeEQsSUFBSUMsUUFBUSxNQUFNVixnREFBSUEsQ0FBQyxZQUFZO1FBQUVXLEtBQUs7SUFBb0I7SUFDOUQsSUFBSUMscUJBQXFCLE1BQU1DLFFBQVFDLEdBQUcsQ0FDeENKLE1BQU1LLEdBQUcsQ0FBQyxPQUFPQyxXQUFhO1lBQzVCLE1BQU1BLFNBQVNDLE9BQU8sQ0FBQyxvQkFBb0I7WUFDMUMsT0FBTSw2RUFBTyxHQUFHLEVBQUVELFNBQVNBLENBQUMsR0FBR0UsUUFBUTtTQUN6QztJQUVILElBQUlDLGNBQWNDLE9BQU9DLFdBQVcsQ0FBQ1Q7SUFFckMsd0RBQXdEO0lBQ3hELHFCQUNFLDhEQUFDWCxxREFBU0E7a0JBTVIsNEVBQUNDLHdFQUFlQTtZQUFDZ0IsVUFBVSxFQUFFO3NCQUMzQiw0RUFBQ2Ysc0RBQU1BO2dCQUFDZ0IsYUFBYUE7MEJBQ2xCVjs7Ozs7Ozs7Ozs7Ozs7OztBQUtYIiwic291cmNlcyI6WyIvVXNlcnMvY2FybWVudmFjY2hpby9EZXZlbG9wZXIvY29kZS9jYXJ1c28vcmV2L3NyYy9hcHAvKGRvY3MpL2RvY3MvbGF5b3V0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvZG9jcy9kb2NzL2xheW91dC5qc3hcbmltcG9ydCBnbG9iIGZyb20gJ2Zhc3QtZ2xvYidcbmltcG9ydCB7IFByb3ZpZGVycyB9IGZyb20gJ0AvYXBwL3Byb3ZpZGVycydcbmltcG9ydCB7IFNlY3Rpb25Qcm92aWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9TZWN0aW9uUHJvdmlkZXInXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0ICdAL3N0eWxlcy90YWlsd2luZC5jc3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgdGl0bGU6IHtcbiAgICB0ZW1wbGF0ZTogJyVzIC0gUHJvdG9jb2wgQVBJIFJlZmVyZW5jZScsXG4gICAgZGVmYXVsdDogJ1Byb3RvY29sIEFQSSBSZWZlcmVuY2UnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBEb2NzTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICAvLyBHYXRoZXIgYWxsIGRvYyBzZWN0aW9ucyBmcm9tIHlvdXIgTURYLCBzYW1lIGFzIGJlZm9yZVxuICBsZXQgcGFnZXMgPSBhd2FpdCBnbG9iKCcqKi8qLm1keCcsIHsgY3dkOiAnc3JjL2FwcC9kb2NzL2RvY3MnIH0pXG4gIGxldCBhbGxTZWN0aW9uc0VudHJpZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBwYWdlcy5tYXAoYXN5bmMgKGZpbGVuYW1lKSA9PiBbXG4gICAgICAnLycgKyBmaWxlbmFtZS5yZXBsYWNlKC8oXnxcXC8pcGFnZVxcLm1keCQvLCAnJyksXG4gICAgICAoYXdhaXQgaW1wb3J0KGAuLyR7ZmlsZW5hbWV9YCkpLnNlY3Rpb25zLFxuICAgIF0pLFxuICApXG4gIGxldCBhbGxTZWN0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhhbGxTZWN0aW9uc0VudHJpZXMpXG5cbiAgLy8gVGhlbiB3cmFwIGV2ZXJ5dGhpbmcgaW4gUHJvdmlkZXJzIGFuZCBTZWN0aW9uUHJvdmlkZXJcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXJzPlxuICAgICAgey8qIFxuICAgICAgICAgUGFzcyB3aGF0ZXZlciBcInNlY3Rpb25zXCIgeW91IHdhbnQuIFxuICAgICAgICAgRm9yIGV4YW1wbGUsIGlmIExheW91dCBpdHNlbGYgbmVlZHMgYGFsbFNlY3Rpb25zYCxcbiAgICAgICAgIHlvdSBjYW4gYWxzbyBwaWNrIG9uZSBrZXkgZnJvbSBhbGxTZWN0aW9ucyBvciBjb21iaW5lIHRoZW0uIFxuICAgICAgKi99XG4gICAgICA8U2VjdGlvblByb3ZpZGVyIHNlY3Rpb25zPXtbXSAvKiBvciBhIGNvbWJpbmVkIGFycmF5IGlmIHlvdSB3YW50ICovfT5cbiAgICAgICAgPExheW91dCBhbGxTZWN0aW9ucz17YWxsU2VjdGlvbnN9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1NlY3Rpb25Qcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVycz5cbiAgKVxufSJdLCJuYW1lcyI6WyJnbG9iIiwiUHJvdmlkZXJzIiwiU2VjdGlvblByb3ZpZGVyIiwiTGF5b3V0IiwibWV0YWRhdGEiLCJ0aXRsZSIsInRlbXBsYXRlIiwiZGVmYXVsdCIsIkRvY3NMYXlvdXQiLCJjaGlsZHJlbiIsInBhZ2VzIiwiY3dkIiwiYWxsU2VjdGlvbnNFbnRyaWVzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImZpbGVuYW1lIiwicmVwbGFjZSIsInNlY3Rpb25zIiwiYWxsU2VjdGlvbnMiLCJPYmplY3QiLCJmcm9tRW50cmllcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/(docs)/docs/layout.jsx\n");

/***/ })

};
;
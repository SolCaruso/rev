"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_src_app_docs_docs_authentication_page_mdx";
exports.ids = ["_rsc_src_app_docs_docs_authentication_page_mdx"];
exports.modules = {

/***/ "(rsc)/./src/app/(docs)/docs/authentication/page.mdx":
/*!*****************************************************!*\
  !*** ./src/app/(docs)/docs/authentication/page.mdx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MDXContent),\n/* harmony export */   metadata: () => (/* binding */ metadata),\n/* harmony export */   sections: () => (/* binding */ sections)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-mdx-import-source-file */ \"(rsc)/./mdx-components.jsx\");\n\n\nconst metadata = {\n    title: 'Authentication',\n    description: 'In this guide, we’ll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token.'\n};\nconst sections = [\n    {\n        title: \"Basic authentication\",\n        id: \"basic-authentication\",\n        ...undefined\n    },\n    {\n        title: \"OAuth2 with bearer token\",\n        id: \"o-auth2-with-bearer-token\",\n        ...undefined\n    },\n    {\n        title: \"Using an SDK\",\n        id: \"using-an-sdk\",\n        ...undefined\n    }\n];\nfunction _createMdxContent(props) {\n    const _components = {\n        a: \"a\",\n        code: \"code\",\n        h1: \"h1\",\n        h2: \"h2\",\n        p: \"p\",\n        pre: \"pre\",\n        ...(0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(),\n        ...props.components\n    }, { Button } = _components;\n    if (!Button) _missingMdxReference(\"Button\", true, \"38:3-40:12\");\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.h1, {\n                children: \"Authentication\"\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 7,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                children: \"You'll need to authenticate your requests to access any of the endpoints in the Protocol API. In this guide, we'll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token — OAuth2 is the recommended way.\",\n                ...{\n                    className: 'lead'\n                }\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 9,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.h2, {\n                id: \"basic-authentication\",\n                children: \"Basic authentication\"\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 11,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                children: \"With basic authentication, you use your username and password to authenticate your HTTP requests. Unless you have a very good reason, you probably shouldn't use basic auth. Here's how to authenticate using cURL:\"\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 13,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.pre, {\n                language: \"bash\",\n                code: \"curl https://api.protocol.chat/v1/conversations \\\\\\n  -u username:password\\n\",\n                children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                    className: \"language-bash\",\n                    children: \"<span><span style=\\\"color: var(--shiki-token-function)\\\">curl</span><span style=\\\"color: var(--shiki-color-text)\\\"> </span><span style=\\\"color: var(--shiki-token-string)\\\">https://api.protocol.chat/v1/conversations</span><span style=\\\"color: var(--shiki-color-text)\\\"> \\\\</span></span>\\n<span><span style=\\\"color: var(--shiki-color-text)\\\">  </span><span style=\\\"color: var(--shiki-token-string)\\\">-u</span><span style=\\\"color: var(--shiki-color-text)\\\"> </span><span style=\\\"color: var(--shiki-token-string)\\\">username:password</span></span>\\n<span></span>\"\n                }, undefined, false, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                    lineNumber: 15,\n                    columnNumber: 1\n                }, this),\n                ...{\n                    title: 'Example request with basic auth'\n                }\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 15,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                children: \"Please don't commit your Protocol password to GitHub!\"\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 20,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.h2, {\n                id: \"o-auth2-with-bearer-token\",\n                children: \"OAuth2 with bearer token\"\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 22,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                children: [\n                    \"The recommended way to authenticate with the Protocol API is by using OAuth2. When establishing a connection using OAuth2, you will need your access token — you will find it in the \",\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.a, {\n                        href: \"#\",\n                        children: \"Protocol dashboard\"\n                    }, undefined, false, {\n                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                        lineNumber: 24,\n                        columnNumber: 182\n                    }, this),\n                    \" under API settings. Here's how to add the token to the request header using cURL:\"\n                ]\n            }, undefined, true, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 24,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.pre, {\n                language: \"bash\",\n                code: \"curl https://api.protocol.chat/v1/conversations \\\\\\n  -H \\\"Authorization: Bearer {token}\\\"\\n\",\n                children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                    className: \"language-bash\",\n                    children: \"<span><span style=\\\"color: var(--shiki-token-function)\\\">curl</span><span style=\\\"color: var(--shiki-color-text)\\\"> </span><span style=\\\"color: var(--shiki-token-string)\\\">https://api.protocol.chat/v1/conversations</span><span style=\\\"color: var(--shiki-color-text)\\\"> \\\\</span></span>\\n<span><span style=\\\"color: var(--shiki-color-text)\\\">  </span><span style=\\\"color: var(--shiki-token-string)\\\">-H</span><span style=\\\"color: var(--shiki-color-text)\\\"> </span><span style=\\\"color: var(--shiki-token-string-expression)\\\">&quot;Authorization: Bearer {token}&quot;</span></span>\\n<span></span>\"\n                }, undefined, false, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                    lineNumber: 26,\n                    columnNumber: 1\n                }, this),\n                ...{\n                    title: 'Example request with bearer token'\n                }\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 26,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                children: \"Always keep your token safe and reset it if you suspect it has been compromised.\"\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 31,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.h2, {\n                id: \"using-an-sdk\",\n                children: \"Using an SDK\"\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 33,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                children: [\n                    \"If you use one of our official SDKs, you won't have to worry about any of the above — fetch your access token from the \",\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.a, {\n                        href: \"#\",\n                        children: \"Protocol dashboard\"\n                    }, undefined, false, {\n                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                        lineNumber: 35,\n                        columnNumber: 120\n                    }, this),\n                    \" under API settings, and the client library will take care of the rest. All the client libraries use OAuth2 behind the scenes.\"\n                ]\n            }, undefined, true, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 35,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"not-prose\",\n                children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                    href: \"/sdks\",\n                    variant: \"text\",\n                    arrow: \"right\",\n                    children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: \"Check out our list of first-party SDKs\"\n                    }, undefined, false, {\n                        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, this)\n                }, undefined, false, {\n                    fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                    lineNumber: 38,\n                    columnNumber: 3\n                }, this)\n            }, undefined, false, {\n                fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n                lineNumber: 37,\n                columnNumber: 1\n            }, this)\n        ]\n    }, undefined, true, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\",\n        lineNumber: 1,\n        columnNumber: 1\n    }, this);\n}\nfunction MDXContent(props = {}) {\n    const { wrapper: MDXLayout } = {\n        ...(0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(),\n        ...props.components\n    };\n    return MDXLayout ? (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MDXLayout, {\n        ...props,\n        children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_createMdxContent, {\n            ...props\n        }, undefined, false, {\n            fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\"\n        }, this)\n    }, undefined, false, {\n        fileName: \"/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx\"\n    }, this) : _createMdxContent(props);\n}\nfunction _missingMdxReference(id, component, place) {\n    throw new Error(\"Expected \" + (component ? \"component\" : \"object\") + \" `\" + id + \"` to be defined: you likely forgot to import, pass, or provide it.\" + (place ? \"\\nIt’s referenced in your code at `\" + place + \"` in `/Users/carmenvacchio/Developer/code/caruso/rev/src/app/(docs)/docs/authentication/page.mdx`\" : \"\"));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwLyhkb2NzKS9kb2NzL2F1dGhlbnRpY2F0aW9uL3BhZ2UubWR4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BQWFBLFdBQUFBO0lBQ1hDLE9BQU87SUFDUEMsYUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHRjs7Ozs7Ozs7MEJBRUY7Ozs7Ozs7Ozs7OzswQkFFRzs7Ozs7Ozs7MEJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT0E7Ozs7Ozs7OzswQkFFRzs7Ozs7Ozs7O29CQUVIO29CQUFBOztrQ0FBc0w7Ozs7OztvQkFBc0I7aUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTzVNOzs7Ozs7Ozs7MEJBRUc7Ozs7Ozs7OztvQkFFSDtvQkFBQTs7a0NBQXdIOzs7Ozs7b0JBQXNCO2lCQUFBOzs7Ozs7Ozs7Ozs7OztrQ0FJeEkiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJtZW52YWNjaGlvL0RldmVsb3Blci9jb2RlL2NhcnVzby9yZXYvc3JjL2FwcC8oZG9jcykvZG9jcy9hdXRoZW50aWNhdGlvbi9wYWdlLm1keCJdLCJuYW1lcyI6WyJtZXRhZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/(docs)/docs/authentication/page.mdx\n");

/***/ })

};
;
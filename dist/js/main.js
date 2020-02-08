var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Clash Dashboard\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack://App/./src/components/Header/index.jsx?");

/***/ }),

/***/ "./src/components/List/index.jsx":
/*!***************************************!*\
  !*** ./src/components/List/index.jsx ***!
  \***************************************/
/*! exports provided: List, Item, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Panel */ \"./src/components/Panel/index.jsx\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nvar List = function List(_ref) {\n  var title = _ref.title,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: title\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list\"\n  }, children));\n};\nvar Item = function Item(_ref2) {\n  var children = _ref2.children,\n      props = _objectWithoutProperties(_ref2, [\"children\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", _extends({\n    className: \"list-item\"\n  }, props), children);\n};\nList.Item = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack://App/./src/components/List/index.jsx?");

/***/ }),

/***/ "./src/components/Panel/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Panel/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Panel = function Panel(_ref) {\n  var title = _ref.title,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"panel\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"panel-title\"\n  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"panel-body\"\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Panel);\n\n//# sourceURL=webpack://App/./src/components/Panel/index.jsx?");

/***/ }),

/***/ "./src/components/ProxyGroup/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/ProxyGroup/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../List */ \"./src/components/List/index.jsx\");\n/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Panel */ \"./src/components/Panel/index.jsx\");\n\n\n\nvar ProxyGroup = function ProxyGroup(_ref) {\n  var group = _ref.group,\n      onSelect = _ref.onSelect;\n  var type = group.type,\n      name = group.name,\n      proxies = group.proxies,\n      now = group.now;\n\n  var handleClick = function handleClick(proxy) {\n    if (type !== 'Selector') return;\n    onSelect && onSelect(name, proxy);\n  };\n\n  return React.createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: name\n  }, React.createElement(_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, proxies.map(function (proxy, i) {\n    return React.createElement(_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Item, {\n      key: i,\n      className: proxy.name === now ? 'active' : '',\n      onClick: function onClick() {\n        return handleClick(proxy);\n      }\n    }, proxy.name);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProxyGroup);\n\n//# sourceURL=webpack://App/./src/components/ProxyGroup/index.jsx?");

/***/ }),

/***/ "./src/pages/main.css":
/*!****************************!*\
  !*** ./src/pages/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://App/./src/pages/main.css?");

/***/ }),

/***/ "./src/pages/main.jsx":
/*!****************************!*\
  !*** ./src/pages/main.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ \"./src/components/List/index.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var _components_ProxyGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProxyGroup */ \"./src/components/ProxyGroup/index.jsx\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.css */ \"./src/pages/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_clash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/clash */ \"./src/utils/clash.js\");\n/* harmony import */ var _utils_clash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_clash__WEBPACK_IMPORTED_MODULE_6__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar proxy = _utils_clash__WEBPACK_IMPORTED_MODULE_6___default()({\n  secret: 'song940@163.com',\n  api: 'http://lsong.me:9090'\n});\n\nvar App = function App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      config = _useState2[0],\n      setConfig = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      proxies = _useState4[0],\n      setProxies = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Promise.resolve().then(function () {\n      return proxy.config();\n    }).then(setConfig).then(function () {\n      return proxy.proxies();\n    }).then(setProxies).then(function () {\n      return proxy.rules();\n    }).then(console.log);\n  }, []);\n  var proxyGroups = Object.values(proxies).filter(function (proxy) {\n    return proxy.all;\n  }).map(function (group) {\n    group.proxies = group.all.map(function (name) {\n      return proxies[name];\n    });\n    return group;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n    className: \"routing\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Routing\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: config.mode === 'Global' ? 'active' : ''\n  }, \"Global\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: config.mode === 'Rule' ? 'active' : ''\n  }, \"Rule\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: config.mode === 'Direct' ? 'active' : ''\n  }, \"Direct\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, null, \"Connectivity Test\")), proxyGroups.map(function (group, i) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProxyGroup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: i,\n      group: group,\n      onSelect: function onSelect(name, p) {\n        return proxy[\"switch\"](name, p.name);\n      }\n    });\n  }));\n};\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack://App/./src/pages/main.jsx?");

/***/ }),

/***/ "./src/utils/clash.js":
/*!****************************!*\
  !*** ./src/utils/clash.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Clash API\n * @docs https://clash.gitbook.io/doc/\n * @param {*} param0 \n */\nvar Clash = function Clash(_ref) {\n  var api = _ref.api,\n      secret = _ref.secret;\n\n  var request = function request(method, path, body) {\n    var headers = {\n      'Content-Type': 'application/json'\n    };\n\n    if (secret) {\n      headers['Authorization'] = \"Bearer \".concat(secret);\n    }\n\n    return Promise.resolve().then(function () {\n      return fetch(api + path, {\n        method: method,\n        headers: headers,\n        body: body && JSON.stringify(body)\n      });\n    });\n  };\n\n  return {\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/common#获得当前的流量\n     * @param {*} cb \n     */\n    traffic: function traffic() {\n      return request('get', '/traffic');\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/common#获得实时日志\n     * @param {*} level \n     * @param {*} cb \n     */\n    logs: function logs(level) {\n      return request('get', \"/logs?level=\".concat(level));\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/proxies#获取所有代理\n     */\n    proxies: function proxies() {\n      return Promise.resolve().then(function () {\n        return request('get', \"/proxies\");\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return data.proxies;\n      });\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/proxies#获取单个代理信息\n     * @param {*} name \n     */\n    proxy: function proxy(name) {\n      return Promise.resolve().then(function () {\n        return request('get', \"/proxies/\".concat(name));\n      }).then(function (res) {\n        return res.json();\n      });\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/proxies#获取单个代理的延迟\n     * @param {*} name \n     * @param {*} url \n     * @param {*} timeout \n     */\n    delay: function delay(name) {\n      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'http://www.gstatic.com/generate_204';\n      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;\n      return Promise.resolve().then(function () {\n        return request('get', \"/proxies/\".concat(name, \"/delay?url=\").concat(url, \"&timeout=\").concat(timeout));\n      }).then(function (res) {\n        return res.json();\n      });\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/proxies#切换Selector中选中的代理\n     * @param {*} selector \n     * @param {*} name \n     */\n    \"switch\": function _switch(selector, name) {\n      return Promise.resolve().then(function () {\n        return request('put', \"/proxies/\".concat(selector), {\n          name: name\n        });\n      }).then(function (res) {\n        return res.statusCode === 204;\n      });\n    },\n\n    /**\n     * rules\n     * @docs https://clash.gitbook.io/doc/restful-api/config#获取所有已经解析的规则\n     */\n    rules: function rules() {\n      return Promise.resolve().then(function () {\n        return request('get', '/rules');\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return data.rules;\n      });\n    },\n\n    /**\n     * https://clash.gitbook.io/doc/restful-api/config#获得当前的基础设置\n     */\n    config: function config() {\n      return Promise.resolve().then(function () {\n        return request('get', '/configs');\n      }).then(function (res) {\n        return res.json();\n      });\n    }\n  };\n};\n\nmodule.exports = Clash;\n\n//# sourceURL=webpack://App/./src/utils/clash.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack://App/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack://App/external_%22ReactDOM%22?");

/***/ })

/******/ });
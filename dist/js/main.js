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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Panel */ \"./src/components/Panel/index.jsx\");\n\n\nvar List = function List(_ref) {\n  var title = _ref.title,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: title\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list\"\n  }, children));\n};\nvar Item = function Item(_ref2) {\n  var children = _ref2.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"list-item\"\n  }, children);\n};\nList.Item = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack://App/./src/components/List/index.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../List */ \"./src/components/List/index.jsx\");\n/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Panel */ \"./src/components/Panel/index.jsx\");\n\n\n\nvar ProxyGroup = function ProxyGroup(_ref) {\n  var group = _ref.group;\n  var name = group.name,\n      proxies = group.proxies;\n  return React.createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: name\n  }, React.createElement(_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, proxies.map(function (proxy) {\n    return React.createElement(_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Item, null, proxy.name);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProxyGroup);\n\n//# sourceURL=webpack://App/./src/components/ProxyGroup/index.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ \"./src/components/List/index.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var _components_ProxyGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProxyGroup */ \"./src/components/ProxyGroup/index.jsx\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.css */ \"./src/pages/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_clash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/clash */ \"./src/utils/clash.js\");\n/* harmony import */ var _utils_clash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_clash__WEBPACK_IMPORTED_MODULE_6__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar proxy = _utils_clash__WEBPACK_IMPORTED_MODULE_6___default()({\n  secret: 'song940@163.com',\n  api: 'http://lsong.me:9090'\n});\n\nvar App = function App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      proxies = _useState2[0],\n      setProxies = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Promise.resolve().then(function () {\n      return proxy.proxies();\n    }).then(setProxies);\n  }, []);\n  var proxyGroups = Object.values(proxies).filter(function (proxy) {\n    return proxy.all;\n  }).map(function (group) {\n    group.proxies = group.all.map(function (name) {\n      return proxies[name];\n    });\n    return group;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Routing\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Global\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Rule\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Direct\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, null, \"Connectivity Test\")), proxyGroups.map(function (group) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProxyGroup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      group: group\n    });\n  }));\n};\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack://App/./src/pages/main.jsx?");

/***/ }),

/***/ "./src/utils/clash.js":
/*!****************************!*\
  !*** ./src/utils/clash.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/**\n * Clash API\n * @docs https://clash.gitbook.io/doc/\n * @param {*} param0 \n */\nvar Clash = function Clash(_ref) {\n  var api = _ref.api,\n      secret = _ref.secret;\n\n  var request = function request(method, path, body) {\n    var headers = {\n      'Content-Type': 'application/json'\n    };\n\n    if (secret) {\n      headers['Authorization'] = \"Bearer \".concat(secret);\n    }\n\n    return Promise.resolve().then(function () {\n      return fetch(api + path, {\n        method: method,\n        headers: headers,\n        body: body\n      });\n    });\n  };\n\n  return {\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/common#获得当前的流量\n     * @param {*} cb \n     */\n    traffic: function traffic(cb) {// return request('get', '/traffic');\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/common#获得实时日志\n     * @param {*} level \n     * @param {*} cb \n     */\n    logs: function logs(level, cb) {\n      var _this = this;\n\n      return _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return request('get', \"/logs?level=\".concat(level));\n\n              case 2:\n                response = _context.sent;\n                response.on('data', function (chunk) {\n                  return cb(JSON.parse(chunk));\n                });\n                return _context.abrupt(\"return\", _this);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/proxies#获取所有代理\n     */\n    proxies: function proxies() {\n      return Promise.resolve().then(function () {\n        return request('get', \"/proxies\");\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return data.proxies;\n      });\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/proxies#获取单个代理信息\n     * @param {*} name \n     */\n    proxy: function proxy(name) {\n      return Promise.resolve().then(function () {\n        return request('get', \"/proxies/\".concat(name));\n      }).then(readStream).then(JSON.parse);\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/proxies#获取单个代理的延迟\n     * @param {*} name \n     * @param {*} url \n     * @param {*} timeout \n     */\n    delay: function delay(name) {\n      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'http://www.gstatic.com/generate_204';\n      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;\n      return Promise.resolve().then(function () {\n        return request('get', \"/proxies/\".concat(name, \"/delay?url=\").concat(url, \"&timeout=\").concat(timeout));\n      }).then(readStream).then(JSON.parse);\n    },\n\n    /**\n     * @docs https://clash.gitbook.io/doc/restful-api/proxies#切换Selector中选中的代理\n     * @param {*} selector \n     * @param {*} name \n     */\n    \"switch\": function _switch(selector, name) {\n      return Promise.resolve().then(function () {\n        return request('put', \"/proxies/\".concat(selector), {\n          name: name\n        });\n      }).then(\n      /*#__PURE__*/\n      function () {\n        var _ref2 = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee2(res) {\n          var response, _JSON$parse, error;\n\n          return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  if (!(res.statusCode === 204)) {\n                    _context2.next = 2;\n                    break;\n                  }\n\n                  return _context2.abrupt(\"return\", true);\n\n                case 2:\n                  _context2.next = 4;\n                  return readStream(res);\n\n                case 4:\n                  response = _context2.sent;\n                  _JSON$parse = JSON.parse(response), error = _JSON$parse.error;\n                  throw new Error(error);\n\n                case 7:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n\n        return function (_x) {\n          return _ref2.apply(this, arguments);\n        };\n      }());\n    },\n\n    /**\n     * rules\n     * @docs https://clash.gitbook.io/doc/restful-api/config#获取所有已经解析的规则\n     */\n    rules: function rules() {\n      return Promise.resolve().then(function () {\n        return request('get', '/rules');\n      }).then(readStream).then(JSON.parse).then(function (data) {\n        return data.rules;\n      });\n    },\n\n    /**\n     * https://clash.gitbook.io/doc/restful-api/config#获得当前的基础设置\n     */\n    config: function config() {\n      return Promise.resolve().then(function () {\n        return request('get', '/configs');\n      }).then(readStream).then(JSON.parse);\n    }\n  };\n};\n\nmodule.exports = Clash;\n\n//# sourceURL=webpack://App/./src/utils/clash.js?");

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
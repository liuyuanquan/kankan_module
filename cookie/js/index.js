/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _cookie_es = __webpack_require__(1);

	var _cookie_es2 = _interopRequireDefault(_cookie_es);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_cookie_es2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var cookie = window.document.cookie;
	var Cookie_es2015 = {
		setCookie: function setCookie(key, value, end, path, domain, secure) {
			if (!key || /^(expires|path|domain|size|secure|max-age)$/ig.test(key)) return false;
			var expires = "";
			if (end) {
				switch (end.constructor) {
					case Number:
						expires = end === Infinity ? ";expires=Fri, 31 Dec 9999 23:59:59 GMT" : ";max-age=" + end;
						break;
					case String:
						expires = ";expires" + end;
						break;
					case Date:
						expires = ";expires=" + end.toUTCString();
						break;
				}
			}
			cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + expires + (domain ? ";domain=" + domain : "") + (path ? "path=" + path : "") + (secure ? ";secure=" + secure : "");
			return true;
		},
		getCookie: function getCookie(key) {
			return decodeURIComponent(cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
		},
		hasCookie: function hasCookie(key) {
			return new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(cookie);
		},
		delCookie: function delCookie(key, path, domain) {
			if (key || !this.hasCookie(key)) return false;
			cookie = encodeURIComponent(key) + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? ";domain=" + domain : "") + (path ? "path=" + path : "");
			return true;
		},
		clearAll: function clearAll(path, domain) {
			cookie.keys().forEach(function (value) {
				cookie.delCookie(value, path, domain);
			});
		},
		keys: function keys() {
			var keys = cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
			keys.forEach(function (value, index, array) {
				keys[index] = decodeURIComponent(value);
			});
			return keys;
		}
	};
	exports.default = Cookie_es2015;

/***/ }
/******/ ]);
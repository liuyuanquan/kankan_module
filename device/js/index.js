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

	var _device_es = __webpack_require__(1);

	var _device_es2 = _interopRequireDefault(_device_es);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_device_es2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var ua = window.navigator.userAgent;

	var version2number = function version2number(version) {
		var arr = version.split('.').reverse();
		var len = arr.length;

		while (len < 3) {
			len = arr.unshift(0);
		}

		for (var i = 0, _counter = 0, power = 0; i < len && i < 3; i++, power += 3) {
			_counter += arr[i] * Math.pow(10, power);
		}

		return counter;
	};

	var device_es2015 = {
		//IE11没有“MSIE”，没有包括Edge
		isIE: function isIE() {
			return (/(MSIE\s|trident.*rv:)(\d+)/i.test(ua)
			);
		},
		isEdge: function isEdge() {
			return (/Edge/ig.test(ua)
			);
		},
		//IE5与IE7不能区分，不能区分Edge
		getIEVersion: function getIEVersion() {
			var m = ua.match(/(MSIE\s|trident.*rv:)(\d+)/i);
			return m && m.length > 2 ? +m[2] : -1;
		},
		isQQ: function isQQ() {
			return (/QQBrowser/ig.test(ua)
			);
		},
		isUC: function isUC() {
			return (/UCBrowser/ig.test(ua)
			);
		},
		isFF: function isFF() {
			return (/Firefox/ig.test(ua)
			);
		},
		isChrome: function isChrome() {
			return (/Chrome/ig.test(ua)
			);
		},
		isSafari: function isSafari() {
			return !undefined.isChrome() && /Safari/ig.test(ua);
		},
		isMobile: function isMobile() {
			return (/Mobile/ig.test(ua)
			);
		},
		isPC: function isPC() {
			return !undefined.isMobile() && !undefined.isIPad() && !undefined.isAndroidPad();
		},
		isIOS: function isIOS() {
			return (/iPhone|iPad|iPod/ig.test(ua)
			);
		},
		isIPhone: function isIPhone() {
			return (/iPhone/ig.test(ua)
			);
		},
		isIPad: function isIPad() {
			return (/iPad/ig.test(ua)
			);
		},
		isIPod: function isIPod() {
			return (/iPod/ig.test(ua)
			);
		},
		isAndroid: function isAndroid() {
			return (/Android/ig.test(ua)
			);
		},
		isAndroidPad: function isAndroidPad() {
			return undefined.isAndroid() && !undefined.isMobile();
		},
		isWeiXin: function isWeiXin() {
			return (/MicroMessenger/ig.test(ua)
			);
		},
		isVstarApp: function isVstarApp() {
			return (/vstar/ig.test(ua)
			);
		},
		isGteMinVersion: function isGteMinVersion(version) {
			if (!version) return -1;

			var m = ua.match(/vstar\/([0-9\.-_]+)/i);
			var appVersion = m && m.length > 1 ? m[1] : '';

			return version2number(appVersion) >= version2number(version);
		}
	};
	exports.default = device_es2015;

/***/ }
/******/ ]);
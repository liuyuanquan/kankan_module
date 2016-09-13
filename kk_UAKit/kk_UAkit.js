;(function(global, factory, exportsName){
	"use strict";
	if (typeof module === "object" && module.exports){
		module.exports = factory(global);
	} else if (typeof define === "function" && define.amd){
		define(factory(global));
	} else if (typeof define === "function" && define.cmd){
		define(factory(global));
	} else {
		global[exportsName] = factory(global);
	}
})(typeof window !== "undefined" ? window : this, function(window){
	return {
		isPC: function(ua){
			return !this.isMobile(ua);
		},
		isIE: function(ua){

		},
		isQQ: function(ua){
			return /QQBrowser/ig.test(ua);
		},
		isMobile: function(ua){
			return /Mobile/ig.test(ua);
		},
		isIOS: function(ua){
			return /OS/ig.test(ua);
		},
		isIPhone: function(ua){
			return /iPhone/ig.test(ua);
		},
		isIPad: function(ua){
			return /iPad/ig.test(ua);
		},
		isIPod: function(ua){
			return /iPod/ig.test(ua);
		},
		isAndroid: function(ua){
			return /Android/ig.test(ua);
		},
		isWeiXin: function(ua){

		}
	};
}, "kk_UAKit");
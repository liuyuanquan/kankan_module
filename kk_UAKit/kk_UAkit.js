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
	var ua = window.navigator.userAgent;
	return {
		isPC: function(){
			return !this.isMobile() && !this.isIPad() && !this.isAndroidPad();
		},
		//IE11没有“MSIE” 没有包括Edge
		isIE: function(){
			return /(MSIE\s|trident.*rv:)(\d+)/i.test(ua);
		},
		//IE5与IE7不能区分 不能区分Edge
		getIEVersion: function () {
		    var m = ua.match(/(MSIE\s|trident.*rv:)(\d+)/i);
		    return (m && m.length > 2) ? +m[2] : -1;
		},
		isEdge: function(){
			return /Edge/ig.test(ua);
		},
		isQQ: function(){
			return /QQBrowser/ig.test(ua);
		},
		isUC: function () {
		    return /UCBrowser/ig.test(ua);
		},
		isFF: function() {
			return /Firefox/ig.test(ua);
		},
		isChrome: function(){
			return /Chrome/ig.test(ua);
		},
		isSafari: function(){
			return !this.isChrome() && /Safari/ig.test(ua);
		},
		isMobile: function(){
			return /Mobile/ig.test(ua);
		},
		isIOS: function(){
			return /iPhone|iPad|iPod/ig.test(ua);
		},
		isIPhone: function(){
			return /iPhone/ig.test(ua);
		},
		isIPad: function(){
			return /iPad/ig.test(ua);
		},
		isIPod: function(){
			return /iPod/ig.test(ua);
		},
		isAndroid: function(){
			return /Android/ig.test(ua);
		},
		isAndroidPad: function () {
		    return this.isAndroid() && !this.isMobile();
		},
		isWeiXin: function(){
			return /MicroMessenger/ig.test(ua);
		},
		//明星空间专用
		isVstarApp: function () {
		    return /vstar/ig.test(ua);
		}
	};
}, "kk_UAKit");
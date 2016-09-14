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
	return function(url, obj){
		var url = url || "";
		var obj = obj || {};
		if (typeof obj !== "object")
			return url;
		var flag = /\?/ig.test(url);
		var params = [];
		for(var param in obj){
			if (obj.hasOwnProperty(param) && obj[param] !== undefined){
				params.push(param + "=" + encodeURIComponent(obj[param]));
			}
		}
		if (flag) {
			if (/(\?|&)$/ig.test(url))
				return url + params.join("&");
			else
				return url + "&" + params.join("&");
		} else {
			return url + "?" + params.join("&");
		}
	};
}, "concatUrlParam");
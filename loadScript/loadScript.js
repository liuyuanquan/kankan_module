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
	var document = window.document;
	return function(src, success, fail){
		var head = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
		var script = document.createElement("script");
		script.async = true;
		script.defer = true;
		script.src = src;
		success = success || function(){
			console.log(src + " load success!");
		};
		fail = fail || function(){
			console.log(src + " load fail!");
		};
		//IE11不支持onreadystatechange，IE10，IE9 同时支持两个，IE8以下只支持onreadystatechange， 其它浏览器只支持onload
		script.onload = script.onreadystatechange = function(){
			if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"){
				success();
				script.onload = script.onreadystatechange = null;
				if (head && script.parentNode){
					head.removeChild(script);
				}
			}
		};
		script.onerror = function(){
			fail();
			script.onerror = null;
			if (head && script.parentNode){
				head.removeChild(script);
			}
		};
		setTimeout(function(){
			head.appendChild(script);
		}, 0);
	}
}, "loadScript");
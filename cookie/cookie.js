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
	var cookie = window.document.cookie;
	return {
		setCookie: function(key, value, end, path, domain, secure){
			if (!key || /^(expires|path|domain|size|secure|max-age)$/ig.test(key))
				return false;
			var expires = "";
			if (end){
				switch (Object.prototype.toString.call(end).toLowerCase()){
					case "[object number]":
						expires = end === Infinity ? ";expires=Fri, 31 Dec 9999 23:59:59 GMT" : ";max-age=" + end;
						break;
					case "[object string]":
						expires = ";expires" + end;
						break;
					case "[object date]":
						expires = ";expires=" + end.toUTCString();
						break;	
				}
			}
			cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + expires + (domain ? ";domain=" + domain : "") + (path ? "path=" + path : "") + (secure ? ";secure=" + secure : "");
			return true;
		},
		getCookie: function(key){
			return decodeURIComponent(cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
		},
		hasCookie: function(key){
			return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(cookie);
		},
		delCookie: function(key, path, domain){
			if (key || !this.hasCookie(key))
				return false;
			cookie = encodeURIComponent(key) + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? ";domain=" + domain : "") + (path ? "path=" + path : "");
			return true;
		},
		keys: function(){
			var keys = cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
			for (var i = 0; i < keys.length; i++) { 
				keys[i] = decodeURIComponent(keys[i]); 
			}
			return keys;
		}
	}
}, "cookie");
let cookie = window.document.cookie;
const Cookie_es2015 = {
	setCookie(key, value, end, path, domain, secure) {
		if (!key || /^(expires|path|domain|size|secure|max-age)$/ig.test(key))
			return false;
		var expires = "";
		if (end){
			switch (end.constructor){
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
	getCookie(key) {
		return decodeURIComponent(cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	},
	hasCookie(key) {
		return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(cookie);
	},
	delCookie(key, path, domain) {
		if (key || !this.hasCookie(key))
			return false;
		cookie = encodeURIComponent(key) + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? ";domain=" + domain : "") + (path ? "path=" + path : "");
		return true;
	},
	clearAll(path, domain) {
		cookie.keys().forEach((value) => {
			cookie.delCookie(value, path, domain);
		});
	},
	keys() {
		let keys = cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
		keys.forEach((value, index, array) => {
			keys[index] = decodeURIComponent(value);
		});
		return keys;
	}
}
export default Cookie_es2015;
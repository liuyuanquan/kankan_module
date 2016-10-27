const ua = window.navigator.userAgent;

const version2number = version => {
	let arr = version.split('.').reverse();
	let len = arr.length;

	while(len < 3) {
		len = arr.unshift(0);
	}

	for (let i = 0, counter = 0 , power = 0; i < len && i < 3; i++, power += 3) {
		counter += arr[i] * Math.pow(10, power);
	}

	return counter;
}

const device_es2015 = {
	//IE11没有“MSIE”，没有包括Edge
	isIE: () => {
		return /(MSIE\s|trident.*rv:)(\d+)/i.test(ua);
	},
	isEdge: () => {
		return /Edge/ig.test(ua);
	},
	//IE5与IE7不能区分，不能区分Edge
	getIEVersion: () => {
	    let m = ua.match(/(MSIE\s|trident.*rv:)(\d+)/i);
	    return (m && m.length > 2) ? +m[2] : -1;
	},
	isQQ: () => {
		return /QQBrowser/ig.test(ua);
	},
	isUC: () => {
	    return /UCBrowser/ig.test(ua);
	},
	isFF: () => {
		return /Firefox/ig.test(ua);
	},
	isChrome: () => {
		return /Chrome/ig.test(ua);
	},
	isSafari: () => {
		return !this.isChrome() && /Safari/ig.test(ua);
	},
	isMobile: () => {
		return /Mobile/ig.test(ua);
	},
	isPC: () => {
		return !this.isMobile() && !this.isIPad() && !this.isAndroidPad();
	},
	isIOS: () => {
		return /iPhone|iPad|iPod/ig.test(ua);
	},
	isIPhone: () => {
		return /iPhone/ig.test(ua);
	},
	isIPad: () => {
		return /iPad/ig.test(ua);
	},
	isIPod: () => {
		return /iPod/ig.test(ua);
	},
	isAndroid: () => {
		return /Android/ig.test(ua);
	},
	isAndroidPad: () => {
	    return this.isAndroid() && !this.isMobile();
	},
	isWeiXin: () => {
		return /MicroMessenger/ig.test(ua);
	},
	isVstarApp: () => {
	    return /vstar/ig.test(ua);
	},
	isGteMinVersion: (version) => {
		if (!version) return -1;

		let m = ua.match(/vstar\/([0-9\.-_]+)/i);
		let appVersion = (m && m.length > 1) ? m[1] : '';

		return version2number(appVersion) >= version2number(version);
	}
}
export default device_es2015;
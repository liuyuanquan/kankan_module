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

const userAgentStrs = {
	Edge: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
	IE11: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; SLCC2; rv:11.0) like Gecko',
	IE10: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; SLCC2)',
	IE09: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; SLCC2)',
	IE08: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; SLCC2)',
	IE07: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; SLCC2)',
	IE05: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; SLCC2)'
}

const Device_es2015 = {
	isIE() {
		return /(MSIE\s|Trident.*rv:)(\d+)/i.test(ua);
	},
	isEdge() {
		return /Edge/ig.test(ua);
	},
	//IE5与IE7不能区分，不能区分Edge
	getIEVersion() {
	    let m = ua.match(/(MSIE\s|Trident.*rv:)(\d+)/i);
	    return (m && m.length > 2) ? +m[2] : -1;
	},
	isQQ() {
		return /QQBrowser/ig.test(ua);
	},
	isUC() {
	    return /UCBrowser/ig.test(ua);
	},
	isFF() {
		return /Firefox/ig.test(ua);
	},
	isChrome() {
		return /Chrome/ig.test(ua);
	},
	isSafari() {
		return !this.isChrome() && /Safari/ig.test(ua);
	},
	isMobile() {
		return /Mobile/ig.test(ua);
	},
	isPC() {
		return !this.isMobile() && !this.isIPad() && !this.isAndroidPad();
	},
	isIOS() {
		return /iPhone|iPad|iPod/ig.test(ua);
	},
	isIPhone() {
		return /iPhone/ig.test(ua);
	},
	isIPad() {
		return /iPad/ig.test(ua);
	},
	isIPod() {
		return /iPod/ig.test(ua);
	},
	isAndroid() {
		return /Android/ig.test(ua);
	},
	isAndroidPad() {
	    return this.isAndroid() && !this.isMobile();
	},
	isWeiXin() {
		return /MicroMessenger/ig.test(ua);
	},
	isVstarApp() {
	    return /vstar/ig.test(ua);
	},
	isGteMinVersion(version) {
		if (!version) return -1;

		let m = ua.match(/vstar\/([0-9\.-_]+)/i);
		let appVersion = (m && m.length > 1) ? m[1] : '';

		return version2number(appVersion) >= version2number(version);
	}
}
export default Device_es2015;
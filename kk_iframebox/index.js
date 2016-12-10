"use strict";
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
	var $mask, $iframebox;
	function pop(isHide) {
		if (isHide) {
			$mask.remove();
			$mask = null;//一定要重置为null
		} else {
			if (!$('#JS_kankan_mask').length) {
				$mask = $('<div id="JS_kankan_mask" style="position:fixed;top:0;bottom:0;left:0;right:0;zIndex:99999;background:url(./image/ie-bg.png)\\9;background:rgba(0,0,0,.7);"></div>');
				$mask.prependTo($('body'));
			}
		}
	}
	return {
		show: function(options) {
			var options = options || {};
			options.width = options.width || 100;
			options.height = options.height || 100;
			options.background = options.background || 'transparent';
			options.maskClick = options.maskClick || {
				close: false,
				callback: function() {

				}
			};
			pop();
			//mask点击事件
			$mask.off().on('click', function(e) {
				options.maskClick.callback(e);
				if (options.maskClick.close) {
					$iframebox.remove();
					$iframebox = null;
					pop(true);
				}
			});
			//插入iframebox
			if (!$('#JS_kankan_iframebox').length) {
				$iframebox = $('<div id="JS_kankan_iframebox" style="display:none;"></div>');
				$iframebox.insertAfter($mask);
			} else {
				$iframebox = $('#JS_kankan_iframebox');
			}
			//是否显示closeBtn
			if (options.closeBtn) {
				var $closeBtn = $('<button></button>');
				$closeBtn.
				css({
					position: 'absolute',
					top: '-30px',
					right: '-30px',
					width: '42px',
					height: '42px',
					border: 'none',
					background: 'url(./image/close.png)',
					cursor: 'pointer',
					outline:'none'
				}).
				off().
				on('click', function() {
					$iframebox.remove();
					$iframebox = null;
					pop(true);
				});
				$closeBtn.appendTo($iframebox);
			}
			//设置iframebox的尺寸
			$iframebox.css({
				width: options.width + 'px',
				height: options.height + 'px',
				background: options.background
			})
			//iframebox中嵌入iframe
			var $iframe = $('<iframe></iframe>');
			$iframe.attr({
				src: options.src,
				frameborder: 0,
				scrolling: 'no',
				width: options.width,
				height: options.height
			});
			$iframe.appendTo($iframebox);
			//设置iframebox居中
			$iframebox.css({
				position: 'fixed',
				zIndex: 100000,
				display: 'block',
				top: '50%',
				left: '50%',
				marginLeft: -$iframebox.width() / 2 + 'px',
				marginTop: -$iframebox.height() / 2 + 'px'
			});
		} 
	}
}, "iframebox");
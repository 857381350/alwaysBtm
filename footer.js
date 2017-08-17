
(function ($) {
	$.fn.onBtm = function(options) {
		var screenH = $(window).height();// 获取页面可视高度
		var footerH = $(this).height();//获取footer的高度
		var footerTop = $(this).offset().top;
		var isFixed = footerH + footerTop;

		// 判断是否固定底部
		if( isFixed < screenH){
			$(this).css({
				'position':'fixed',
				'bottom':'0',
				'width':'100%'
			})
		}else {
			$(this).css({
				'position':'static',
				'bottom':'initial',
				'width':'auto'
			})
		}
	}
})(jQuery);

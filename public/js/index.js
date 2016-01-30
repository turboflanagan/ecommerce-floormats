.$(document).ready(function() {
	window.scroll(function() {
		var distanceFromTop = $(document).scrollTop();
		if(distanceFromTop >= $('#banner-wrapper').height()) {
			$('#sticky-order-info-wrapper').addClass('fixed');
		}else{
			$('#sticky-order-info-wrapper').removeClass('fixed');
		}
	});
});
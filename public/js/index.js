$(document).ready(function(){


function moveScroller() {
    var move = function() {
        var scrollTop = $(window).scrollTop();
        var offsetTop = $("#sticky-order-info-wrapper").offset().top;
        var detailWrapper = $("#order-info-header");
        if(scrollTop > offsetTop) {
            detailWrapper.removeClass('unstuck').addClass('fixed');
        } else {
            if(scrollTop <= offsetTop && detailWrapper.class !== 'unstuck') {
                detailWrapper.removeClass('fixed').addClass('unstuck');
            };
        }
	};
	$(window).scroll(move);
	move();
}

moveScroller();

$("a").click(function(event){
    // console.log($(this));
    event.preventDefault();
});


});













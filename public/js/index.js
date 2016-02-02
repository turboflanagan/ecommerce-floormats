function moveScroller() {
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $("#order-info-header").offset().top;
        var s = $("#order-detail-wrapper");
        if(st > ot) {
            s.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            if(st <= ot) {
                s.css({
                    position: "relative",
                    top: ""
                });
            }
        }
    };
    $(window).scroll(move);
    move();
}

moveScroller();


// s.removeClass("unstuck").addClass("fixed");

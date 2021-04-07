const hjSlideWrap = $(".hj-slide-wrap");

hjSlideWrap.slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

var resizeSlide = function(){
    if($(window).width() < 768) {
        $(".hj-slide-image").css("height", $(window).height() - 60 + "px");
    } else {
        $(".hj-slide-image").css("height", 500 + "px");
    }
};

resizeSlide();

$(window).resize(function(){
    resizeSlide();
});
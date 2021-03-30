if(!AOS.init()) {
    AOS.init();
}

const headerWrap = $("#hjHeaderWrap");
const hjNavList = $(".hj-nav-list");
const hjNotNow = $(".hj-not-now");

headerWrap.on('mouseover', function(){
    headerWrap.addClass('hj-spread');
    if(typeof hjPageSlideButton !== "undefined") {
        if(hjPageSlideButton == true) {
            return false;
        } else {
            hjPageSlideButton.addClass('position-move');
        }
    }
});

headerWrap.on('mouseleave', function(){
    headerWrap.removeClass('hj-spread');
    if(typeof hjPageSlideButton !== "undefined") {
        if(hjPageSlideButton == true){
            return false;
        } else {
            hjPageSlideButton.removeClass('position-move');
        }
    }
});

hjNavList.on('mouseover', function(){
    hjNavList.removeClass('current');
    $(this).addClass('current');
});

hjNavList.on('mouseleave', function(){
    hjNavList.removeClass('current');
    $(this).addClass('current');
});

function scrollHeader(){
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 50) {
            if(typeof hjPageSlideButton !== "undefined") {
                if(hjPageSlideButton !== true) {
                    hjPageSlideButton.addClass("slick-dots-fixed");
                }
            } else {
                headerWrap.addClass("scroll-move");
            }
            
            if(typeof hjNonImageButton !== "undefined") {
                if(hjNonImageButton !== true) {
                    hjNonImageButton.addClass("slick-dots-fixed");
                }
            } else {
                headerWrap.addClass("scroll-move");
            }
        } else {
            headerWrap.removeClass("scroll-move");
            if(typeof hjPageSlideButton !== "undefined") {
                if(hjPageSlideButton !== true) {
                    hjPageSlideButton.removeClass("slick-dots-fixed");
                }
            }

            if(typeof hjNonImageButton !== "undefined") {
                if(hjNonImageButton !== true) {
                    hjNonImageButton.removeClass("slick-dots-fixed");
                }
            }
        }
    });
}

scrollHeader();

// hjNotNow.on('click', function () {
//     alert('아직 준비중인 페이지입니다.');
//     return false;
// });
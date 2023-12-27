const hjPageSlideButton = $("#hjPageSlideButton");
const hjPageInSlideWrap = $("#hjPageInSlideWrap");
const hjMoveTop = $(".hj-move-top");
const hjProductSpecTable = $(".hj-product-spec-table");

const hjNonImageButton = $("#hjNonImageButton");
const hjNonImageSlideWrap = $("#hjNonImageSlideWrap");

var hjPageSlideButton00 = hjPageSlideButton.children().eq(0);
var hjPageSlideButton01 = hjPageSlideButton.children().eq(1);
var hjPageSlideButton02 = hjPageSlideButton.children().eq(2);
var hjPageSlideButton03 = hjPageSlideButton.children().eq(3);
var hjPageSlideButton04 = hjPageSlideButton.children().eq(4);
var hjPageSlideButton05 = hjPageSlideButton.children().eq(5);

var hjPageInSlideWrap00 = hjPageInSlideWrap.children().eq(0);
var hjPageInSlideWrap01 = hjPageInSlideWrap.children().eq(1);
var hjPageInSlideWrap02 = hjPageInSlideWrap.children().eq(2);
var hjPageInSlideWrap03 = hjPageInSlideWrap.children().eq(3);
var hjPageInSlideWrap04 = hjPageInSlideWrap.children().eq(4);
var hjPageInSlideWrap05 = hjPageInSlideWrap.children().eq(5);

var hjNonImageButton00 = hjNonImageButton.children().eq(0);
var hjNonImageButton01 = hjNonImageButton.children().eq(1);
var hjNonImageButton02 = hjNonImageButton.children().eq(2);
var hjNonImageButton03 = hjNonImageButton.children().eq(3);
var hjNonImageButton04 = hjNonImageButton.children().eq(4);
var hjNonImageButton05 = hjNonImageButton.children().eq(5);

var hjNonImageSlideWrap00 = hjNonImageSlideWrap.children().eq(0);
var hjNonImageSlideWrap01 = hjNonImageSlideWrap.children().eq(1);
var hjNonImageSlideWrap02 = hjNonImageSlideWrap.children().eq(2);
var hjNonImageSlideWrap03 = hjNonImageSlideWrap.children().eq(3);
var hjNonImageSlideWrap04 = hjNonImageSlideWrap.children().eq(4);
var hjNonImageSlideWrap05 = hjNonImageSlideWrap.children().eq(5);

hjMoveTop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

if (resizer()) {
    // 상세페이지 스크립트

    // hjPageInSlideWrap.slick({
    //     infinite: true,
    //     dots: true,
    //     autoplay: false,
    //     draggable: false,
    //     arrows: false,
    //     fade: true,
    //     cssEase: 'linear',
    // });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 100) {
            hjMoveTop.css({
                "visibility": "visible",
                "opacity": "1"
            });
        } else {
            hjMoveTop.css({
                "visibility": "hidden",
                "opacity": "0"
            });
        }
        if ($(this).scrollTop() >= 110) {
            $("#hjPageSlideButton").addClass('slick-dots-fixed');
        } else {
            $("#hjPageSlideButton").removeClass('slick-dots-fixed');
        }
    });

    hjPageInSlideWrap.css('height', hjPageInSlideWrap00.height() + 'px');

    hjPageSlideButton00.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.addClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            hjPageInSlideWrap.css('height', hjPageInSlideWrap00.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    hjPageSlideButton01.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.addClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            var imgHeight = hjPageInSlideWrap01.children('img');
            hjPageInSlideWrap.css('height', imgHeight.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    hjPageSlideButton02.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.addClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            if (hjPageInSlideWrap.hasClass('dtc-133-wrap')) {
                var imgHeight = hjPageInSlideWrap02.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height() + 250) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
            if (hjPageInSlideWrap.hasClass('mobile-studio-wrap')) {
                var imgHeight = hjPageInSlideWrap02.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
            if (hjPageInSlideWrap.hasClass('cintiq-pro-wrap')) {
                var imgHeight = hjPageInSlideWrap02.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
            if (hjPageInSlideWrap.hasClass('cintiq-pro-family-wrap')) {
                var imgHeight = hjPageInSlideWrap02.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
            if (hjPageInSlideWrap.hasClass('cintiq-wrap')) {
                var imgHeight = hjPageInSlideWrap02.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }

            hjPageInSlideWrap.css('height', hjPageInSlideWrap02.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    hjPageSlideButton03.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.addClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            if (hjPageInSlideWrap.hasClass('mobile-studio-wrap')) {
                var imgHeight = hjPageInSlideWrap03.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            } else if (hjPageInSlideWrap.hasClass('cintiq-pro-wrap')) {
                var imgHeight = hjPageInSlideWrap03.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            } else if (hjPageInSlideWrap.hasClass('cintiq-pro-family-wrap')) {
                var imgHeight = hjPageInSlideWrap03.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            } else {
                var tableHeight = hjProductSpecTable.height();

                hjPageInSlideWrap.css('height', tableHeight + 102 + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
        }
    });

    hjPageSlideButton04.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.addClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            if (hjPageInSlideWrap.hasClass('mobile-studio-wrap')) {
                var tableHeight = hjProductSpecTable.height();
                hjPageInSlideWrap.css('height', tableHeight + 102 + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            } else if (hjPageInSlideWrap.hasClass('cintiq-pro-wrap')) {
                var tableHeight = hjProductSpecTable.height();
                hjPageInSlideWrap.css('height', tableHeight + 102 + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            } else if (hjPageInSlideWrap.hasClass('cintiq-pro-wrap')) {
                var imgHeight = hjPageInSlideWrap04.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }  else if (hjPageInSlideWrap.hasClass('cintiq-pro-family-wrap')) {
                var tableHeight = hjProductSpecTable.height();
                hjPageInSlideWrap.css('height', tableHeight + 102 + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            } else if (hjPageInSlideWrap.hasClass('cintiq-pro-family-wrap')) {
                var imgHeight = hjPageInSlideWrap04.children('img');
                hjPageInSlideWrap.css('height', (imgHeight.height()) + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            } else {
                hjPageInSlideWrap.css('height', hjPageInSlideWrap04.height() + 'px');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
        }
    });

    hjPageSlideButton05.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.addClass('hj-show');

            hjPageInSlideWrap.css('height', hjPageInSlideWrap05.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    // 사업분야 버튼 ( 이미지 Height 기준점이 아님 )

    hjNonImageSlideWrap.css('height', hjNonImageSlideWrap00.height() + 'px');

    hjNonImageButton00.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjNonImageButton01.removeClass('hj-active');
            hjNonImageButton02.removeClass('hj-active');
            hjNonImageButton03.removeClass('hj-active');
            hjNonImageButton04.removeClass('hj-active');
            hjNonImageButton05.removeClass('hj-active');

            hjNonImageSlideWrap00.addClass('hj-show');
            hjNonImageSlideWrap01.removeClass('hj-show');
            hjNonImageSlideWrap02.removeClass('hj-show');
            hjNonImageSlideWrap03.removeClass('hj-show');
            hjNonImageSlideWrap04.removeClass('hj-show');
            hjNonImageSlideWrap05.removeClass('hj-show');

            hjNonImageSlideWrap.css('height', hjNonImageSlideWrap00.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    hjNonImageButton01.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjNonImageButton00.removeClass('hj-active');
            hjNonImageButton02.removeClass('hj-active');
            hjNonImageButton03.removeClass('hj-active');
            hjNonImageButton04.removeClass('hj-active');
            hjNonImageButton05.removeClass('hj-active');

            hjNonImageSlideWrap00.removeClass('hj-show');
            hjNonImageSlideWrap01.addClass('hj-show');
            hjNonImageSlideWrap02.removeClass('hj-show');
            hjNonImageSlideWrap03.removeClass('hj-show');
            hjNonImageSlideWrap04.removeClass('hj-show');
            hjNonImageSlideWrap05.removeClass('hj-show');

            var imgHeight = hjPageInSlideWrap01.children('img');

            hjNonImageSlideWrap.css('height', hjNonImageSlideWrap01.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    hjNonImageButton02.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjNonImageButton00.removeClass('hj-active');
            hjNonImageButton01.removeClass('hj-active');
            hjNonImageButton03.removeClass('hj-active');
            hjNonImageButton04.removeClass('hj-active');
            hjNonImageButton05.removeClass('hj-active');

            hjNonImageSlideWrap00.removeClass('hj-show');
            hjNonImageSlideWrap01.removeClass('hj-show');
            hjNonImageSlideWrap02.addClass('hj-show');
            hjNonImageSlideWrap03.removeClass('hj-show');
            hjNonImageSlideWrap04.removeClass('hj-show');
            hjNonImageSlideWrap05.removeClass('hj-show');

            hjNonImageSlideWrap.css('height', hjNonImageSlideWrap02.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    hjNonImageButton03.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjNonImageButton00.removeClass('hj-active');
            hjNonImageButton01.removeClass('hj-active');
            hjNonImageButton02.removeClass('hj-active');
            hjNonImageButton04.removeClass('hj-active');
            hjNonImageButton05.removeClass('hj-active');

            hjNonImageSlideWrap00.removeClass('hj-show');
            hjNonImageSlideWrap01.removeClass('hj-show');
            hjNonImageSlideWrap02.removeClass('hj-show');
            hjNonImageSlideWrap03.addClass('hj-show');
            hjNonImageSlideWrap04.removeClass('hj-show');
            hjNonImageSlideWrap05.removeClass('hj-show');

            hjNonImageSlideWrap.css('height', hjNonImageSlideWrap03.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    hjNonImageButton04.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjNonImageButton00.removeClass('hj-active');
            hjNonImageButton01.removeClass('hj-active');
            hjNonImageButton02.removeClass('hj-active');
            hjNonImageButton03.removeClass('hj-active');
            hjNonImageButton05.removeClass('hj-active');

            hjNonImageSlideWrap00.removeClass('hj-show');
            hjNonImageSlideWrap01.removeClass('hj-show');
            hjNonImageSlideWrap02.removeClass('hj-show');
            hjNonImageSlideWrap03.removeClass('hj-show');
            hjNonImageSlideWrap04.addClass('hj-show');
            hjNonImageSlideWrap05.removeClass('hj-show');

            hjNonImageSlideWrap.css('height', hjNonImageSlideWrap04.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    hjNonImageButton05.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjNonImageButton00.removeClass('hj-active');
            hjNonImageButton01.removeClass('hj-active');
            hjNonImageButton02.removeClass('hj-active');
            hjNonImageButton03.removeClass('hj-active');
            hjNonImageButton04.removeClass('hj-active');

            hjNonImageSlideWrap00.removeClass('hj-show');
            hjNonImageSlideWrap01.removeClass('hj-show');
            hjNonImageSlideWrap02.removeClass('hj-show');
            hjNonImageSlideWrap03.removeClass('hj-show');
            hjNonImageSlideWrap04.removeClass('hj-show');
            hjNonImageSlideWrap05.addClass('hj-show');

            hjNonImageSlideWrap.css('height', hjNonImageSlideWrap05.height() + 'px');
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });
} else {
    var mobilePathnames = window.location.pathname.split('/');

    $(window).on('scroll', function () {
        if (mobilePathnames[2] == 'business' || mobilePathnames[2] == 'product') {
            $('#hjHeaderWrap').css('position', 'absolute');
        }
        if ($(this).scrollTop() >= 60) {
            hjMoveTop.css({
                "visibility": "visible",
                "opacity": "1"
            });
            $('#hjNonImageButton').css({ 'position': 'fixed', 'z-index': '10' });
            $('#hjPageSlideButton').css({ 'position': 'fixed', 'z-index': '10' });
        } else {
            hjMoveTop.css({
                "visibility": "hidden",
                "opacity": "0"
            });
            $('#hjNonImageButton').css({ 'position': 'absolute', 'z-index': '1' });
            $('#hjPageSlideButton').css({ 'position': 'absolute', 'z-index': '1' });
        }

        $('#hjNonImageSlideWrap > li').each(function () {
            if ($(window).scrollTop() > ($(this).offset().top - 61)) {
                var page = $(this).data('page');
                $('#hjNonImageButton li ').removeClass('hj-active');
                $('#hjNonImageButton li[data-snav="' + page + '"]').addClass('hj-active');
            }
        });

        $('#hjPageInSlideWrap > li').each(function () {
            if ($(window).scrollTop() > ($(this).offset().top - 61)) {
                var page = $(this).data('page');
                $('#hjPageSlideButton li ').removeClass('hj-active');
                $('#hjPageSlideButton li[data-snav="' + page + '"]').addClass('hj-active');
            }
        });
    });

    hjPageSlideButton00.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.addClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');
            $('html, body').animate({ scrollTop: (hjPageInSlideWrap00.offset().top - 60) }, 'slow');
        }
    });

    hjPageSlideButton01.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.addClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            $('html, body').animate({ scrollTop: (hjPageInSlideWrap01.offset().top - 60) }, 'slow');
        }
    });

    hjPageSlideButton02.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.addClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            $('html, body').animate({ scrollTop: (hjPageInSlideWrap02.offset().top - 60) }, 'slow');
        }
    });

    hjPageSlideButton03.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.addClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            $('html, body').animate({ scrollTop: (hjPageInSlideWrap03.offset().top - 60) }, 'slow');
        }
    });

    hjPageSlideButton04.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton05.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.addClass('hj-show');
            hjPageInSlideWrap05.removeClass('hj-show');

            $('html, body').animate({ scrollTop: (hjPageInSlideWrap04.offset().top - 60) }, 'slow');
        }
    });

    hjPageSlideButton05.on('click', function () {
        if (!$(this).hasClass('hj-active')) {
            $(this).addClass('hj-active');
            hjPageSlideButton00.removeClass('hj-active');
            hjPageSlideButton01.removeClass('hj-active');
            hjPageSlideButton02.removeClass('hj-active');
            hjPageSlideButton03.removeClass('hj-active');
            hjPageSlideButton04.removeClass('hj-active');

            hjPageInSlideWrap00.removeClass('hj-show');
            hjPageInSlideWrap01.removeClass('hj-show');
            hjPageInSlideWrap02.removeClass('hj-show');
            hjPageInSlideWrap03.removeClass('hj-show');
            hjPageInSlideWrap04.removeClass('hj-show');
            hjPageInSlideWrap05.addClass('hj-show');

            $('html, body').animate({ scrollTop: (hjPageSlideButton05.offset().top - 60) }, 'slow');
        }
    });

    hjNonImageButton00.on('click', function () {
        $(this).addClass('hj-active');
        hjNonImageButton01.removeClass('hj-active');
        hjNonImageButton02.removeClass('hj-active');
        hjNonImageButton03.removeClass('hj-active');
        hjNonImageButton04.removeClass('hj-active');
        hjNonImageButton05.removeClass('hj-active');

        hjNonImageSlideWrap00.addClass('hj-show');
        hjNonImageSlideWrap01.removeClass('hj-show');
        hjNonImageSlideWrap02.removeClass('hj-show');
        hjNonImageSlideWrap03.removeClass('hj-show');
        hjNonImageSlideWrap04.removeClass('hj-show');
        hjNonImageSlideWrap05.removeClass('hj-show');

        $('html, body').animate({ scrollTop: (hjNonImageSlideWrap00.offset().top - 60) }, 'slow');
    });

    hjNonImageButton01.on('click', function () {
        $(this).addClass('hj-active');
        hjNonImageButton00.removeClass('hj-active');
        hjNonImageButton02.removeClass('hj-active');
        hjNonImageButton03.removeClass('hj-active');
        hjNonImageButton04.removeClass('hj-active');
        hjNonImageButton05.removeClass('hj-active');

        hjNonImageSlideWrap00.removeClass('hj-show');
        hjNonImageSlideWrap01.addClass('hj-show');
        hjNonImageSlideWrap02.removeClass('hj-show');
        hjNonImageSlideWrap03.removeClass('hj-show');
        hjNonImageSlideWrap04.removeClass('hj-show');
        hjNonImageSlideWrap05.removeClass('hj-show');

        $('html, body').animate({ scrollTop: (hjNonImageSlideWrap01.offset().top - 60) }, 'slow');
    });

    hjNonImageButton02.on('click', function () {
        $(this).addClass('hj-active');
        hjNonImageButton00.removeClass('hj-active');
        hjNonImageButton01.removeClass('hj-active');
        hjNonImageButton03.removeClass('hj-active');
        hjNonImageButton04.removeClass('hj-active');
        hjNonImageButton05.removeClass('hj-active');

        hjNonImageSlideWrap00.removeClass('hj-show');
        hjNonImageSlideWrap01.removeClass('hj-show');
        hjNonImageSlideWrap02.addClass('hj-show');
        hjNonImageSlideWrap03.removeClass('hj-show');
        hjNonImageSlideWrap04.removeClass('hj-show');
        hjNonImageSlideWrap05.removeClass('hj-show');

        $('html, body').animate({ scrollTop: (hjNonImageSlideWrap02.offset().top - 60) }, 'slow');
    });

    hjNonImageButton03.on('click', function () {
        $(this).addClass('hj-active');
        hjNonImageButton00.removeClass('hj-active');
        hjNonImageButton01.removeClass('hj-active');
        hjNonImageButton02.removeClass('hj-active');
        hjNonImageButton04.removeClass('hj-active');
        hjNonImageButton05.removeClass('hj-active');

        hjNonImageSlideWrap00.removeClass('hj-show');
        hjNonImageSlideWrap01.removeClass('hj-show');
        hjNonImageSlideWrap02.removeClass('hj-show');
        hjNonImageSlideWrap03.addClass('hj-show');
        hjNonImageSlideWrap04.removeClass('hj-show');
        hjNonImageSlideWrap05.removeClass('hj-show');

        $('html, body').animate({ scrollTop: (hjNonImageSlideWrap03.offset().top - 60) }, 'slow');
    });

    hjNonImageButton04.on('click', function () {
        $(this).addClass('hj-active');
        hjNonImageButton00.removeClass('hj-active');
        hjNonImageButton01.removeClass('hj-active');
        hjNonImageButton02.removeClass('hj-active');
        hjNonImageButton03.removeClass('hj-active');
        hjNonImageButton05.removeClass('hj-active');

        hjNonImageSlideWrap00.removeClass('hj-show');
        hjNonImageSlideWrap01.removeClass('hj-show');
        hjNonImageSlideWrap02.removeClass('hj-show');
        hjNonImageSlideWrap03.removeClass('hj-show');
        hjNonImageSlideWrap04.addClass('hj-show');
        hjNonImageSlideWrap05.removeClass('hj-show');

        $('html, body').animate({ scrollTop: (hjNonImageSlideWrap04.offset().top - 60) }, 'slow');
    });

    hjNonImageButton05.on('click', function () {
        $(this).addClass('hj-active');
        hjNonImageButton00.removeClass('hj-active');
        hjNonImageButton01.removeClass('hj-active');
        hjNonImageButton02.removeClass('hj-active');
        hjNonImageButton03.removeClass('hj-active');
        hjNonImageButton04.removeClass('hj-active');

        hjNonImageSlideWrap00.removeClass('hj-show');
        hjNonImageSlideWrap01.removeClass('hj-show');
        hjNonImageSlideWrap02.removeClass('hj-show');
        hjNonImageSlideWrap03.removeClass('hj-show');
        hjNonImageSlideWrap04.removeClass('hj-show');
        hjNonImageSlideWrap05.addClass('hj-show');

        $('html, body').animate({ scrollTop: (hjNonImageSlideWrap05.offset().top - 60) }, 'slow');
    });


}
if (!AOS.init()) {
    AOS.init();
}

/**
   * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
   *
   * @private
   * @author Todd Motto
   * @link https://github.com/toddmotto/foreach
   * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
   * @callback requestCallback      callback   - Callback function for each iteration.
   * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
   * @returns {}
   */
var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

const headerWrap = $("#hjHeaderWrap");
const hjNavList = $(".hj-nav-list");
const hjNotNow = $(".hj-not-now");
const hjHamburger = $(".hamburger");
const hjFoldWrap = $(".hj-fold-wrap");
var resizer = function () {
    if ($(window).width() > 768) {
        return true;
    } else {
        return false;
    }
}

if (resizer()) {
    headerWrap.on('mouseover', function () {
        headerWrap.addClass('hj-spread');
    });

    headerWrap.on('mouseleave', function () {
        headerWrap.removeClass('hj-spread');
    });
}

hjHamburger.on('click', function () {
    if (!hjHamburger.hasClass('is-active')) {
        headerWrap.removeClass('hj-spread');
        $('body').css('overflow', 'auto');
    } else {
        headerWrap.addClass('hj-spread');
        $('body').css('overflow', 'hidden');
    }
});

hjNavList.on('mouseover', function () {
    hjNavList.removeClass('current');
    $(this).addClass('current');
});

hjNavList.on('mouseleave', function () {
    hjNavList.removeClass('current');
    $(this).addClass('current');
});

hjFoldWrap.on('click', function () {
    var _this = $(this);
    if (_this.parent(".hj-nav-list").hasClass("is-show")) {
        $(".hj-fold-icon").removeClass("is-active");
        $(".hj-nav-list").removeClass("is-show");

        _this.children(".hj-fold-icon").removeClass("is-active");
        _this.parent(".hj-nav-list").removeClass("is-show");
    } else {
        $(".hj-fold-icon").removeClass("is-active");
        $(".hj-nav-list").removeClass("is-show");

        _this.children(".hj-fold-icon").addClass("is-active");
        _this.parent(".hj-nav-list").addClass("is-show")
    }
});
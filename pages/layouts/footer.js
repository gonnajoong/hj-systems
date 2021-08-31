const hjLogin = $("#hjLogin");
var hjFooterButton = $(".hj-footer-button");
var hjNoticeCreateButton = $(".hj-notice-create-button");
const hjBoardListWrap = $(".hj-board-list-wrap");

hjLogin.on('click', function(e){
    e.preventDefault();

    var u_id = $("#u_id").val();
    var u_pw = $("#u_pw").val();

    if(!u_id) {
        alert('아이디를 입력해주세요');
        return false;
    } else if (!u_pw){
        alert('비밀번호를 입력해주세요');
        return false;
    }

    var form_data = {
        u_id: u_id,
        u_pw: u_pw,
        is_ajax: 1
    };

    $.ajax({
        url: '/server/api/session/login.php',
        type: 'POST',
        data: form_data,
        dataType: 'json',
        success: function(data) {
            if(data.data.status_code === 200) {
                // var decodeData = JSON.stringify(data);
                location.href = "/";
            } else {
                alert('아이디, 비밀번호를 확인해주세요');
            }
        },
        error: function(err) {
            var decodeErr = JSON.stringify(err);
            console.log('error: '+ decodeErr);
            alert('관리자에게 문의 부탁드립니다.');
        }
    });
    return false;
});

function setCookie(name, value, expiredays) {
    var cookie = name + "=" + escape(value) + "; path=/;"
    if (typeof expiredays != 'undefined') {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        cookie += "expires=" + todayDate.toGMTString() + ";"
    }
    document.cookie = cookie;
}

// todo 세션 쿠키 여부 확인 후 로그인 -> 로그아웃 으로 바꿀것
function getCookie(cookieName){
    var cookieValue=null;
    if(document.cookie){
        var array=document.cookie.split((escape(cookieName)+'='));
        if(array.length >= 2){
            var arraySub=array[1].split(';');
            cookieValue=unescape(arraySub[0]);
        }
    }
    return cookieValue;
}

function deleteCookie(name) {
    setCookie(name, "", -1);
}

function searchToObject() {
    var pairs = window.location.search.substring(1).split("&"),
      obj = {},
      pair,
      i;
  
    for ( i in pairs ) {
      if ( pairs[i] === "" ) continue;
  
      pair = pairs[i].split("=");
      obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
    }
    return obj;
  }

  var queryObj = searchToObject();

if(getCookie('HJ_SESSION') !== null) {
    hjFooterButton.text("로그아웃");
    hjFooterButton.attr("href", "#");
    hjFooterButton.addClass("is-login");
    hjBoardListWrap.append("<button class='hj-notice-create-button'>작성</button>");
    hjNoticeCreateButton.css("display", "inline-block");
} else {
    hjFooterButton.text("관리자 로그인");
    hjFooterButton.attr("href", "/login.php");
    hjFooterButton.removeClass("is-login");
    // hjNoticeCreateButton.css("display", "none");
}

if(getCookie('HJ_SESSION') == null && typeof queryObj.admin === 'undefined') {
    hjFooterButton.remove();
}


hjFooterButton.on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('is-login')){
        console.log('del cookie');
        deleteCookie("HJ_SESSION");
        location.reload();
    } else {
        location.href = "/login.php";
    }
});

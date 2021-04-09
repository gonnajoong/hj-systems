var hjNotiCreate = ".hj-notice-create-button";
$(document).on("click", hjNotiCreate, function () {
    if (getCookie('HJ_SESSION')) {
        // 공지사항 등록 페이지로 이동
        location.href = "/pages/notice-edit.php";
    } else {
        alert("이용 권한이 없습니다.");
    }
});

var state = {
    noticeTitle: "",
    noticeType: "",
    noticeContent: "",
    noticeImage: "",
};

const changeConst = "propertychange change keyup paste input";
const hjImagePreview = $("#hjImagePreview");
const hjImageRemove = $("#hjImageRemove");
const hjUploadWrap = $("#hjUploadWrap");
const hjNoticeList = $("#hjNoticeList");
const ntAdminWrap = $("#ntAdminWrap");

var ntTitle = $("#noticeTitle");
var ntType = $("#ntType");
var ntContent = $("#ntContent");
var ntImage = $("#ntImage");
var data = {};
var image = {};
var query = {
    page: 1,
    count: 1,
};
var noticePath = '/pages/notice.php';
var noticeDetailPath = '/pages/notice-detail.php';

var onChangeText = function (e, name) {
    var val = e.val();
    state[name] = val;
};

var uploadImage = function (e) {
    if (!e[0].files.length) {
        return alert('업로드를 다시 해주세요');
    }
    var file = e[0].files[0];
    var form = new FormData();

    form.append('file', file);
    form.append('fileName', file.name);
    $.ajax({
        url: '/server/api/image/post.php',
        type: 'post',
        data: form,
        contentType: false,
        processData: false,
        success: function (response) {
            data = JSON.parse(response);
            if (data.response != 0) {
                $("#img").attr("src", data.location);
                $(".preview img").show(); // Display image element
                hjImagePreview.css("display", "block");
                hjUploadWrap.css("display", "none");
                image = data.image;
            } else {
                alert('file not uploaded');
            }
        },
    });
    return false;
};

ntTitle.on(changeConst, function () {
    onChangeText($(this), "noticeTitle");
});

ntType.on(changeConst, function () {
    onChangeText($(this), "noticeType");
});

ntContent.on(changeConst, function () {
    onChangeText($(this), "noticeContent");
});

ntImage.on("change", function () {
    uploadImage($(this));
});

hjImageRemove.on("click", function () {
    var _this = $(this);
    // 이미지 제거
    hjImagePreview.css("display", "none");
    _this.prev().attr("src", "");
    document.getElementById("ntImage").value = "";
    hjUploadWrap.css("display", "flex");
});

$("#hjSubmitButton").on("click", function () {
    const {noticeTitle, noticeType, noticeContent} = state;

    var createNotice = {};
    createNotice.title = noticeTitle;
    createNotice.type = noticeType;
    createNotice.content = noticeContent ? noticeContent : null;
    createNotice.image_id = image ? parseInt(image.image_id) : null;

    console.log(createNotice);
    $.ajax({
        url: '/server/api/notice/post.php',
        type: 'post',
        data: createNotice,
        dataType: 'json',
        success: function(response){
            if(response){
                alert('글 작성을 성공했습니다.');
            } else {
                alert('글 작성에 실패했습니다.');
            }
        }
    });
});

console.log(query);
function gets(){
    $.ajax({
        url: '/server/api/notice/gets.php',
        type: 'GET',
        async: false,
        data: query,
        dataType: 'json',
        success: function(data){
            console.log('배열 ',data);
            if(data.count) {
                hjNoticeList.html("");
                for(var i=0; i<data.count; i++) {
                    console.log(data[i]);
                    hjNoticeList.prepend("<tr><td>"+parseInt(i+1)+"</td><td><a href='/pages/notice-detail.php?id="+data[i].id+"&pages="+query.pages+"'>"+data[i].title+"</a></td><td>"+data[i].updated_at+"</td></tr>");
                }
            } else {
                hjNoticeList.prepend("<tr><td colspan='3'>등록된 글이 없습니다.</td></tr>");
            }
            
            // <tr>
            //             <td>{index+1}</td>
            //             <td>{item.title}</td>
            //             <td>{item.updated_at}</td>
            //         </tr>
        }
    });
};

function getQueryStringObject() {
    var a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

function get(){
    var getData = getQueryStringObject();
    var ntdType = $("#ntdType");
    var ntdTitle = $("#ntdTitle");
    var ntdDate = $("#ntdDate");
    var ntdImage = $("#ntdImage");
    var ntdContent = $("#ntdContent");

    var types = {"event":"이벤트", "notice": "공지사항"};

    $.ajax({
        url: '/server/api/notice/get.php',
        type: 'GET',
        data: getData,
        dataType: 'json',
        success: function(data){
            var rows = data;

            ntdType.html(types[rows.type]);
            ntdTitle.html(rows.title);
            ntdDate.html(rows.updated_at);
            ntdContent.html(rows.content);
            if(rows.image_name_hash){
                ntdImage.css('display','inline-block');
                ntdImage.attr('src', '/upload/'+rows.image_name_hash);
            } else {
                ntdImage.css('display','none');
            }
        }
    });
}

if(getCookie('HJ_SESSION') !== null) {
    ntAdminWrap.html("<a href=''><button class='hj-black'>수정</button></a><a href=''><button class='hj-black'>삭제</button></a>");
} else {
    ntAdminWrap.html("");
}


if(window.location.pathname == noticePath) {
    gets();
}

if(window.location.pathname == noticeDetailPath){
    get();
}
// 조건문
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

var ntTitle = $("#noticeTitle");
var ntType = $("#ntType");
var ntContent = $("#ntContent");
var ntImage = $("#ntImage");
var data = {};
var image = {};
var query = {
    pages: 1,
    count: 1,
};

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

function gets(){
    $.ajax({
        url: '/server/api/notice/gets.php',
        type: 'GET',
        async: false,
        data: query,
        dataType: 'json',
        success: function(data){
            if(data.count) {
                hjNoticeList.html("");
                for(var i=0; i<data.count; i++) {
                    hjNoticeList.prepend("<tr><td>"+parseInt(i+1)+"</td><td><a href='/pages/notice-detail.php?id="+data[i].id+"'>"+data[i].title+"</a></td><td>"+data[i].updated_at+"</td></tr>");
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

gets();
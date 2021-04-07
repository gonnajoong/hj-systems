var hjNotiCreate = ".hj-notice-create-button";
$(document).on("click", hjNotiCreate, function(){
    if(getCookie('HJ_SESSION')){
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

var ntTitle = $("#noticeTitle");
var ntType = $("#ntType");
var ntContent = $("#ntContent");
var ntImage = $("#ntImage");

var onChangeText = function(e, name){
    var val = e.val();
    state[name] = val;
};

var uploadImage = function(e, name) {
    if(!e[0].files.length) return;
    var file = e[0].files[0];
    var form = new FormData();

    form.append('file', file);
    form.append('fileName', file.name);
    $.ajax({
        url: '/server/api/image/post.php',
        type: 'POST',
        data: form,
        dataType: 'json',
        success: function(data){
            if(data.data.status_code === 200) {
                // var decodeData = JSON.stringify(data);
                location.href = "/";
            } else {
                alert('success, 그러나 파일 업로드 실패');
            }
        },
        error: function(err) {
            var decodeErr = JSON.stringify(err);
            console.log('error: '+ decodeErr);
            alert('그냥 실패.');
        }
    });
    return false
    console.log(file, form);
};

ntTitle.on(changeConst, function(){
    onChangeText($(this), "noticeTitle");
});

ntType.on(changeConst, function(){
    onChangeText($(this), "noticeType");
});

ntContent.on(changeConst, function(){
    onChangeText($(this), "noticeContent");
});

ntImage.on(changeConst, function(){
    uploadImage($(this), "noticeImage");
});

$("#hjSubmitButton").on("click", function(){
    
    var hjImageArr = [];

    var allArr = {
        "ntTitle": ntTitle,
        "ntType": ntType,
        "ntContent": ntContent,
        "ntImage": ntImage
    }
    console.log(state);
})
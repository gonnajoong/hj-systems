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
}

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
    // onChangeText($(this), "noticeImage");
});

$("#hjSubmitButton").on("click", function(){
    
    var hjImageArr = [];

    // var uploadImage = function(e) {
    //     if(!e.target.files.length) {

    //     }
    // }
    // uploadImage(ntImage);
    var allArr = {
        "ntTitle": ntTitle,
        "ntType": ntType,
        "ntContent": ntContent,
        "ntImage": ntImage
    }
    console.log(state);
})
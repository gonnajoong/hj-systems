var hjNotiCreate = ".hj-notice-create-button";
var ntDel = "#ntDel";

$(document).on("click", hjNotiCreate, function () {
    if (getCookie('HJ_SESSION')) {
        // 공지사항 등록 페이지로 이동
        location.href = "/pages/notice-edit.php";
    } else {
        alert("이용 권한이 없습니다.");
    }
});

var state = {
    noticeTitle: $("#noticeTitle").val(),
    noticeType: $("#ntType").val(),
    noticeContent: $("#ntContent").val(),
    noticeImage: '',
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
var ntEdit = {};
var noticePath = '/pages/notice.php';
var noticeDetailPath = '/pages/notice-detail.php';
var noticeEditPath = '/pages/notice-edit.php';
var ntPageNum = $('#ntPageNum');
var ntBefore = $("#ntBefore");
var ntAfter = $("#ntAfter");
var ntList = $("#ntList");

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
var hjSubmitButton = "#hjSubmitButton";
$(document).on("click", hjSubmitButton, function () {
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
                hjNoticeList.empty();
                for(var i=0; i<data.count; i++) {
                    hjNoticeList.prepend("<tr><td>"+parseInt(i+1)+"</td><td><a href='/pages/notice-detail.php?id="+data['rows'][i].id+"&page="+query.page+"'>"+data['rows'][i].title+"</a></td><td>"+data['rows'][i].updated_at+"</td></tr>");
                }
                // 이전 페이지, 다음 페이지
                if(data.notice_start_num > 1){
                    ntBefore.attr('href','?page='+data.notice_start_num - 1+'');
                } else {
                    ntBefore.css('display','none');
                }
                if(data.notice_end_page_num < data.notice_end_conut_num) {
                    ntAfter.attr('href','?page='+data.notice_end_num + 1+'');
                } else {
                    ntAfter.css('display','none');
                }
                // 영역 종료

                for(var i = 0; i <= data.notice_end_num - data.notice_start_num; i++) {
                    ntPageNum.prepend("<a class='"+(data.notice_start_num + i == data.notice_page ? ' active' : '')+"' href='?page="+parseInt(data.notice_start_num + i)+"'>"+parseInt(data.notice_start_num + i)+"</a>");
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
            if(window.location.pathname == noticeDetailPath){
                ntdType.html(types[rows.type]);
                ntdTitle.html(rows.title);
                ntdDate.html(rows.updated_at);
                ntdContent.html(rows.content);
                ntList.attr('href','/pages/notice.php?page='+getData.page+'');
                if(rows.image_name_hash){
                    ntdImage.css('display','inline-block');
                    ntdImage.attr('src', '/upload/'+rows.image_name_hash);
                } else {
                    ntdImage.css('display','none');
                }
            }

            if(getCookie('HJ_SESSION') !== null && window.location.pathname == noticeEditPath){
                $("#noticeTitle").val(data.title);
                $("#ntType").val(data.type);
                $("#ntContent").val(data.content);
                if(typeof data.image_id !== undefined){
                    $("#img").attr("src", "/upload/"+data.image_name_hash);
                    $(".preview img").show(); // Display image element
                    hjImagePreview.css("display", "block");
                    hjUploadWrap.css("display", "none");
                    return image = data.image_id;
                }
            }
        }
    });
}

function put (){
    data = getQueryStringObject();
    var putData = {
        "id": data.id,
        "title": data.id,
        "type": data.id,
        "content": data.id,
        "id": data.id,
    }
    console.log(state);
    // $.ajax({
    //     url: '/server/api/notice/put.php',
    //     type: 'POST',
    //     data: putData,
    //     dataType: 'json',
    //     success: function(data){
    //         console.log('put_data', data);
            
    //     }
    // })
}

function remove(){
    var data = getQueryStringObject();

 $.ajax({
     url: '/server/api/notice/delete.php',
     type: 'POST',
     data: data,
     dataType: 'json',
     success: function() {
        alert('삭제가 완료되었습니다.');
     }
 })
};

if(getCookie('HJ_SESSION') !== null) {
    //삭제
    data = getQueryStringObject();
    ntAdminWrap.html("<a href='/pages/notice-edit.php?id="+data.id+"&state=edit'><button class='hj-black'>수정</button></a><button id='ntDel' class='hj-black'>삭제</button>");
    if(typeof ntDel !== 'undefined') {
        $(document).on('click', ntDel, function(){
            var checkConfirm = confirm('해당 게시글을\n삭제하시겠습니까?');
            if(checkConfirm){
                remove();
                $(window),location.href = '/pages/notice.php?page='+data.page+'';
            }
        });
    }
} else {
    ntAdminWrap.html("");
}

if(window.location.pathname == noticePath) {
    gets();
}

if(window.location.pathname == noticeDetailPath){
    get();
    
}

var queryString = getQueryStringObject();
if(getCookie('HJ_SESSION') !== null && window.location.pathname == noticeEditPath && queryString.state === 'edit') {
    // 수정
    $(".hj-notice-form").append('<button id="hjEditButton" type="button" class="hj-submit-button"><span>수정</span></button>');
    get();
    var hjEditButton = '#hjEditButton';
    $(document).on('click', hjEditButton, function(){
        var is_confirm = confirm('수정 하시겠습니까?');
        if(is_confirm) {
            put();
            console.log('image_',image);
        }
    });
} else {
    $(".hj-notice-form").append('<button id="hjSubmitButton" type="button" class="hj-submit-button"><span>작성</span></button>');
}
// 조건문

// 페이징 로직 작동 이상없는지 테스트 예정,
// 게시글 수정 api 작성 예정,
// 게시글 삭제 api 작성 예정
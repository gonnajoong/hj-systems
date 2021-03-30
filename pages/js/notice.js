hjNoticeCreateButton.on("click", function(){
    if(getCookie('HJ_SESSION')){
        // 공지사항 등록 페이지로 이동
        location.href = "/admin/pages/notice-edit.php";
    } else {
        alert("이용 권한이 없습니다.");
    }
});
const emailForm = $("#emailForm");


function onSubmit(e) {
    e.preventDefault();
    console.log(e);
}

emailForm.addEventListener("submit", onSubmit);

$("#FormSubmitButton").click(function(){
    // sendit();
    console.log(123);
    alert("hello");
    return;
});

function sendit() {
    var mailForm = document.emailForm;

    if(!mailForm.Name.value) {
     alert("이름을 입력해주세요");
     mailForm.Name.focus();
    }
    else if(!mailForm.CompanyName.value) {
     alert("기업명을 입력해주세요");
     mailForm.CompanyName.focus();
    }
    else if(!mailForm.Position.value) {
     alert("직책을 입력해주세요");
     mailForm.Position.focus();
    }
    else if(!mailForm.EmailAddress.value) {
     alert("이메일을 입력해주세요");
     mailForm.EmailAddress.focus();
    }
    else if(!mailForm.Address.value) {
        alert("주소를 입력해주세요");
        mailForm.Address.focus();
    }
    else if(!mailForm.liquid_tablet.checked == "" && !mailForm.pen_tablet.checked == "") {
     alert("관심제품 선택을 부탁드립니다.");
    }
    else if(!mailForm.InquiryTitle.value) {
        alert("문의 제목을 입력해주세요");
        mailForm.InquiryTitle.focus();
    }else if(!mailForm.InquiryContents.value) {
        alert("문의 내용을 입력해주세요");
        mailForm.InquiryContents.focus();
    }else if(
        mailForm.Name.value && 
        mailForm.CompanyName.value && 
        mailForm.Position.value && 
        mailForm.EmailAddress.value && 
        mailForm.Address.value &&
        (mailForm.liquid_tablet.checked || mailForm.pen_tablet.checked) &&
        mailForm.InquiryTitle.value &&
        mailForm.InquiryContents.value
        ){
     alert("모든검증과정거침");
     var name = $("[name=name]").val();
     var phone = $("[name=phone]").val();
     var email = $("[name=email]").val();
     var subject = $("[name=subject]").val();
     var content = $("[name=content]").val();
     var url = 'test.php';
     
     $.ajax({    
     method: "POST", // post방식
     url: url,
     dataType: 'json', // 데이터를 json방식으로 가져온다.
     data: { "name": name, "phone": phone, "email": email, "subject": subject, "content": content},
     success: function(data){
      
       if(data != "false"){
       alert("메일이 성공적으로 전송되었습니다.");
       location.href="index.html";
       //form.action = "index.php";
       //form.submit();     
       //location.href="index.php"; 
       }else{
        alert("시스템 오류 입니다."); 
       }
      
      
      }
     
    })
   }else{ alert("빈칸이 있거나 시스템 장애가 있습니다.");}
     
     //$mailto="받는주소";
      //$mailto="psj452771@naver.com";
      //$subject="mail test";
     // $content="sususususususususususussu";
     // $result=mail($mailto, $subject, $content);
  } 
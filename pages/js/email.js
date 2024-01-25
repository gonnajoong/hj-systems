$(document).ready(function(){
    $("#FormSubmitButton").click(function(){
        sendit();
        return;
    });

    function sendit() {
        var mailForm = $("#emailForm").val();
        var ConsumerName = $("#ConsumerName").val();
        var CompanyName = $("#CompanyName").val();
        var Position = $("#Position").val();
        var Contact = $("#Contact").val();
        var EmailAddress = $("#EmailAddress").val();
        var Address = $("#Address").val();
        var LiquidTablet = $("#liquid_tablet").is(":checked");
        var PenTablet = $("#pen_tablet").is(":checked");
        var InquiryTitle = $("#InquiryTitle").val()
        var InquiryContents = $("#InquiryContents").val();
        var TermsEssential = $("#terms_essential").is(":checked");
        var ServiceTermsEssential = $("#service_terms_essential").is(":checked");

        if(!ConsumerName) {
            alert("이름을 입력해주세요");
        }
        else if(!CompanyName) {
            alert("기업명을 입력해주세요");
        }
        else if(!Position) {
         alert("직책을 입력해주세요");
        }
        else if(!Contact) {
         alert("연락처를 입력해주세요");
        }
        else if(!EmailAddress) {
        alert("이메일을 입력해주세요");
        }
        else if(!Address) {
         alert("주소를 입력해주세요");
        }
        else if(!LiquidTablet && !PenTablet) {
         alert("관심제품 선택을 부탁드립니다.");
        }
        else if(!InquiryTitle) {
         alert("문의 제목을 입력해주세요");
        }else if(!InquiryContents) {
            alert("문의 내용을 입력해주세요");
        }else if(!TermsEssential) {
            alert("개인정보 수집 선택을 부탁드립니다.");
        }else if(
            ConsumerName && 
            CompanyName &&
            Position &&
            Contact &&
            EmailAddress &&
            Address &&
            (LiquidTablet || PenTablet) &&
            InquiryTitle &&
            InquiryContents &&
            (TermsEssential || ServiceTermsEssential)
            ){
        alert("모든검증과정거침");
        
        var consumerName = ConsumerName;
        var companyName = CompanyName;
        var position = Position;
        var contact = Contact;
        var emailAddress = EmailAddress;
        var address = Address;
        var liquidTablet = LiquidTablet;
        var penTablet = PenTablet;
        var inquiryTitle = InquiryTitle;
        var inquiryContents = InquiryContents;
        var termsEssential = TermsEssential;
        var serviceTermsEssential = ServiceTermsEssential;
        var url = './php/email.php';
        $.ajax({    
        method: "POST", // post방식
        url: url,
        dataType: 'json', // 데이터를 json방식으로 가져온다.
        data: { "ConsumerName": consumerName,
        "CompanyName": companyName,
        "Position": position,
        "Contact": contact,
        "EmailAddress": emailAddress,
        "Address": address,
        "LiquidTablet": liquidTablet,
        "PenTablet": penTablet,
        "InquiryTitle": inquiryTitle,
        "InquiryContents": inquiryContents,
        "TermsEssential": termsEssential,
        "ServiceTermsEssential": serviceTermsEssential},
        success: function(data){
        alert(1);
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
});
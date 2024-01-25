$(document).ready(function(){

    $("#Address").click(function(event){
        event.preventDefault();
        console.log(123);
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                console.log(data);
                $("#Address").val(data.address);
            }
        }).open();
    });

    $("#FormSubmitButton").click(function(event){
        event.preventDefault();
        sendit();
    });

    function sendit() {
        var ConsumerName = $("#ConsumerName").val();
        var CompanyName = $("#CompanyName").val();
        var Position = $("#Position").val();
        var Contact = $("#Contact").val();
        var EmailAddress = $("#EmailAddress").val();
        var Address = $("#Address").val();
        var DetailAddress = $("#DetailAddress").val();
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
        if(LiquidTablet) {
            LiquidTablet = "액정 타블렛";
        } else {
            LiquidTablet = "";
        }

        if(PenTablet) {
            PenTablet = "펜 타블렛";
        } else {
            PenTablet = "";
        }

        var consumerName = ConsumerName;
        var companyName = CompanyName;
        var position = Position;
        var contact = Contact;
        var emailAddress = EmailAddress;
        var address = Address;
        var detailAddress = DetailAddress;
        var liquidTablet = LiquidTablet;
        var penTablet = PenTablet;
        var inquiryTitle = InquiryTitle;
        var inquiryContents = InquiryContents;
        var termsEssential = TermsEssential;
        var serviceTermsEssential = ServiceTermsEssential;
       
        var data = {
            service_id: 'service_m1kchix',
            template_id: 'template_kh4bp52',
            user_id: 'KegavohxMfuy0cc5a',
            template_params: {
                "ConsumerName": consumerName,
                "CompanyName": companyName,
                "Position": position,
                "Contact": contact,
                "EmailAddress": emailAddress,
                "Address": address+" "+detailAddress,
                "LiquidTablet": liquidTablet,
                "PenTablet": penTablet,
                "InquiryTitle": inquiryTitle,
                "InquiryContents": inquiryContents,
                "TermsEssential": termsEssential,
                "ServiceTermsEssential": serviceTermsEssential
                // 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
            }
        };
         
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('문의내용을 전송 했습니다.');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
        return;

    }else{ alert("빈칸이 있거나 시스템 장애가 있습니다.");}
        
        //$mailto="받는주소";
        //$mailto="psj452771@naver.com";
        //$subject="mail test";
        // $content="sususususususususususussu";
        // $result=mail($mailto, $subject, $content);
    } 

});
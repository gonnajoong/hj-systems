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
        var CompanyName = $("#CompanyName").val();
        var PersonName = $("#PersonName").val();
        var PhoneNum = $("#PhoneNum").val();
        var EmailAddress = $("#EmailAddress").val();
        var CintiqPro_17 = $("#CintiqPro_17").is(":checked");
        var CintiqPro_22 = $("#CintiqPro_22").is(":checked");
        var CintiqPro_27 = $("#CintiqPro_27").is(":checked");
        var Purpose = $("#Purpose").val();
        var DayOfHope = $("#DayOfHope").val();
        var Address = $("#Address").val()
        var DetailAddress = $("#DetailAddress").val();
        var ReturnDay = $("#ReturnDay").val();

        if(!CompanyName) {
            alert("업체명을 입력해주세요");
        }
        else if(!PersonName) {
            alert("담당자명을 입력해주세요");
        }
        else if(!PhoneNum) {
         alert("연락처를 입력해주세요");
        }
        else if(!EmailAddress) {
         alert("이메일을 입력해주세요");
        //  연락처 양식에 맞는지 가려야 함
        }
        else if(!CintiqPro_17 && !CintiqPro_22 && !CintiqPro_27) {
         alert("데모신청장비 선택을 부탁드립니다.");
        }
        else if(!Purpose) {
         alert("데모 신청 목적을 입력해주세요");
        }else if(!DayOfHope) {
            alert("수령 희망일을 입력해주세요");
        }else if(!Address) {
            alert("수령지주소를 입력해주세요.");
        }else if(!DetailAddress) {
            alert("상세주소를 입력해주세요.");
        }else if(!ReturnDay) {
            alert("반납예정일을 입력해주세요.");
        }else if(
            CompanyName && 
            PersonName &&
            PhoneNum &&
            EmailAddress &&
            (CintiqPro_17 || CintiqPro_22 || CintiqPro_27) &&
            Purpose &&
            DayOfHope &&
            Address &&
            DetailAddress &&
            ReturnDay
            ){
        if(CintiqPro_17) {
            CintiqPro_17 = "신티크 프로 17' SET";
        } else {
            CintiqPro_17 = "";
        }

        if(CintiqPro_22) {
            CintiqPro_22 = "신티크 프로 22' SET";
        } else {
            CintiqPro_22 = "";
        }
        
        if(CintiqPro_27) {
            CintiqPro_27 = "신티크 프로 27' SET";
        } else {
            CintiqPro_27 = "";
        }
        
        var companyName = CompanyName;
        var personName = PersonName;
        var phoneNum = PhoneNum;
        var emailAddress = EmailAddress;
        var cintiqPro_17 = CintiqPro_17;
        var cintiqPro_22 = CintiqPro_22;
        var cintiqPro_27 = CintiqPro_27;
        var purpose = Purpose;
        var dayOfHope = DayOfHope;
        var address = Address;
        var detailAddress = DetailAddress;
        var returnDay = ReturnDay;
       
        var data = {
            service_id: 'service_4onr86q',
            template_id: 'template_cxogv8e',
            user_id: 'PV8iAUCnbSG7OsVSU',
            template_params: {
                "CompanyName": companyName,
                "PersonName": personName,
                "PhoneNum": phoneNum,
                "EmailAddress": emailAddress,
                "CintiqPro_17": cintiqPro_17,
                "CintiqPro_22": cintiqPro_22,
                "CintiqPro_27": cintiqPro_27,
                "Purpose": purpose,
                "DayOfHope": dayOfHope,
                "Address": address+" "+detailAddress,
                "ReturnDay": returnDay,
                // 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
            }
        };
         
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            // alert('문의내용을 전송 했습니다.');
            // // 데이터베이스에 추가 할 영역
            $.ajax('../server/api/email/put.php', {
                type: 'POST',
                // data: JSON.stringify(data),
                data:{
                    "CompanyName": companyName,
                    "PersonName": personName,
                    "PhoneNum": phoneNum,
                    "EmailAddress": emailAddress,
                    "CintiqPro_17": cintiqPro_17,
                    "CintiqPro_22": cintiqPro_22,
                    "CintiqPro_27": cintiqPro_27,
                    "Purpose": purpose,
                    "DayOfHope": dayOfHope,
                    "Address": address+" "+detailAddress,
                    "ReturnDay": returnDay,
                },
                contentType: 'application/json'
            }).done(function(){
                alert('데이터 베이스 적용 성공');
            }).fail(function(error){
                alert('데이터 베이스 적용 실패 :'+error);
            });
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
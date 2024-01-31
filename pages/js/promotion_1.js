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

    var today = new Date();   

    var year = today.getFullYear(); // 년도
    var month = today.getMonth() + 1;  // 월
    var date = today.getDate();  // 날짜
    var day = today.getDay();  // 요일

    $('#DateInsert').daterangepicker({
        "singleDatePicker": false,
        "minDate" : month+"/"+date+"/"+year,
        "startDate": month+"/"+date+"/"+year,
        "endDate": "01/31/2024",
        "locale": {
            "format": "MM/DD/YYYY",
            "separator": " - ",
            "applyLabel": "적용",
            "cancelLabel": "취소",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "토",
                "일",
                "월",
                "화",
                "수",
                "목",
                "금"
            ],
            "monthNames": [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",,
                "10월",
                "11월",
                "12월",
            ],
            "firstDay": 1
        },
    }, function(start, end, label) {
      $("#DayOfHope").val(start.format('YYYY-MM-DD'));
      $("#ReturnDay").val(end.format('YYYY-MM-DD'));
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
        var regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

        if(!CompanyName) {
            alert("업체명을 입력해주세요");
        }
        else if(!PersonName) {
            alert("담당자명을 입력해주세요");
        }
        else if(!PhoneNum) {
         alert("연락처를 입력해주세요");
        }
        else if(!/^010-[0-9]{4}-[0-9]{4}$/.test(PhoneNum)) {
        alert("연락처 양식을 제대로 입력해주세요");
        }
        else if(!EmailAddress) {
         alert("이메일을 입력해주세요");
        }
        else if(!regex.test(EmailAddress)){
        alert("이메일양식을 확인해주세요");
        }
        else if(!CintiqPro_17 && !CintiqPro_22 && !CintiqPro_27) {
         alert("데모신청장비 선택을 부탁드립니다.");
        }
        else if(!Purpose) {
         alert("데모 신청 목적을 입력해주세요");
        }else if(!DayOfHope) {
            alert("수령 희망일을 입력해주세요");
            // 수령 희망일 달력 스크립트 이용
        }else if(!Address) {
            alert("수령지주소를 입력해주세요.");
        }else if(!DetailAddress) {
            alert("상세주소를 입력해주세요.");
        }else if(!ReturnDay) {
            alert("반납예정일을 입력해주세요.");
            // 반납 예정일 달력 스크립트 이용
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
            alert("데모장비지원 요청을 성공했습니다.");
        // $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        //     type: 'POST',
        //     data: JSON.stringify(data),
        //     contentType: 'application/json'
        // }).done(function() {
        //     // alert('문의내용을 전송 했습니다.');
        //     // // 데이터베이스에 추가 할 영역
        //     $.ajax('../server/api/email/put.php', {
        //         type: 'POST',
        //         // data: JSON.stringify(data),
        //         data:{
        //             "CompanyName": companyName,
        //             "PersonName": personName,
        //             "PhoneNum": phoneNum,
        //             "EmailAddress": emailAddress,
        //             "CintiqPro_17": cintiqPro_17,
        //             "CintiqPro_22": cintiqPro_22,
        //             "CintiqPro_27": cintiqPro_27,
        //             "Purpose": purpose,
        //             "DayOfHope": dayOfHope,
        //             "Address": address+" "+detailAddress,
        //             "ReturnDay": returnDay,
        //         },
        //         contentType: 'application/json'
        //     }).done(function(){
        //         alert('데이터 베이스 적용 성공');
        //     }).fail(function(error){
        //         alert('데이터 베이스 적용 실패 :'+error);
        //     });
        // }).fail(function(error) {
        //     alert('Oops... ' + JSON.stringify(error));
        // });
        // return;

    }else{ alert("빈칸이 있거나 시스템 장애가 있습니다.");}
        
        //$mailto="받는주소";
        //$mailto="psj452771@naver.com";
        //$subject="mail test";
        // $content="sususususususususususussu";
        // $result=mail($mailto, $subject, $content);
    } 
// 최종적으로 이메일을 보낼 것인지 확인
});
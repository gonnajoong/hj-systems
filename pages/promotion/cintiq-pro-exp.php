<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="shortcut icon" href="../../images/favicon/favicon-16.ico" sizes="16x16">
      <link rel ="shortcut icon" href="../../images/favicon/favicon-32.ico" sizes="32x32">
      <link rel="shortcut icon" href="../../images/favicon/favicon-32.png">
      <link rel="shortcut icon" href="../../images/favicon/favicon-96.png">
      <link rel="shortcut icon" href="../../images/favicon/favicon-152.png">

      <meta property="og:type" content="website"/>
<meta property="og:url" content="http://hjsystems.co.kr"/>
<meta property="og:image" content="/images/thumbnail.jpg"/>
<meta property="og:title" content="에이치제이시스템즈 | HJ SYSTEMS"/>
<meta property="og:description" content="안녕하세요 와콤 타블렛 총판 에이치제이시스템즈 입니다."/>

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="../../js/libs/jquery-3.5.1.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="../../js/libs/slick.min.js"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      <script src="../js/promotion_1.js"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../../assets/index.css" />

    <title>HJ SYSTEMS | 데모장비지원</title>
</head>
<body>
    <?php @include("../../layouts/header.php");?>
    <script type="text/javascript" src="../../pages/layouts/header.js"></script>
    <section class="hj-form-list-wrap">
        <div class="hj-form-main-wrap">
            <article class="hj-checklist-wrap">
                <h2>데모장비 지원 요청서</h2>
                <div class="hj-form-text">
                    <img class="hj-promotion-title-image-1" src="../../images/banners/promotion_banner.png" alt="promotion_img">
                </div>
                <h2>고객정보</h2>
                <div class="hj-form-normal-wrap">
                    <form method="POST" id="emailForm" class="hj-form-wrap">
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label for="CompanyName" class="hj-form-label-title">신청 업체명</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="CompanyName" required>
                        </span>
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label for="PersonName" class="hj-form-label-title">담당자</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="PersonName" required>
                        </span>
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label for="PhoneNum" class="hj-form-label-title">연락처</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="PhoneNum" placeholder="010-0000-0000" required>
                        </span>
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label for="EmailAddress" class="hj-form-label-title">이메일</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="EmailAddress" placeholder="email@test.com" requiredc>
                        </span>
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label class="hj-form-label-title">데모 신청 장비</label>
                            <span>
                                <label for="CintiqPro_17">신티크 프로 17' SET</label><input class="hj-check-box hj-normal-checklist" type="checkbox" id="CintiqPro_17">
                                <label for="CintiqPro_22">신티크 프로 22' SET</label><input class="hj-check-box hj-normal-checklist" type="checkbox" id="CintiqPro_22">
                                <label for="CintiqPro_27">신티크 프로 27' SET</label><input class="hj-check-box hj-normal-checklist" type="checkbox" id="CintiqPro_27">
                            </span>
                        </span>
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label for="Purpose" class="hj-form-label-title">데모 신청 목적</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="Purpose" required>
                        </span>
                        <h2>장비 수령지 및 기타</h2>
                        <span class="hj-form-label-style hj-form-normal-label hj-date-wrap">
                            <label for="DayOfHope" class="hj-form-label-title">수령 희망일</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="DayOfHope" readonly required>
                            <button id="DateInsert" class="hj-date-button" type="button">입력</button>
                        </span>
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label for="Address" class="hj-form-label-title">수령지 주소</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="Address" required readonly>
                        </span>
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label for="DetailAddress" class="hj-form-label-title">상세 주소</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="DetailAddress" required>
                        </span>
                        <span class="hj-form-label-style hj-form-normal-label">
                            <label for="ReturnDay" class="hj-form-label-title">반납 예정일</label>
                            <input type="text" class="hj-email-input hj-normal-form-input" id="ReturnDay" readonly required>
                        </span>
                        <div class="hj-promotion-warn">
                            <h2>[ 참고 사항 ] 데모 장비 사용 및 반납관련</h2>
                            <ul>
                                <li>
                                    <p>- <strong>반납 기한을 엄수</strong> 바랍니다. 반납기간 초과時 추후 지원에 제한이 있을 수 있습니다.</p>
                                </li>
                                 <li>
                                    <p>- <strong>반납전</strong> 펜 및 Cable 등 각종 악세사리류 등의 누락이 없도록 확인 바랍니다.</p>
                                 </li>
                                 <li>
                                    <p>- <strong>데모장비 Box에 매직펜 표기나 과도한 테이핑을 하지 않도록</strong> 부탁드립니다.</p>
                                 </li>
                                 <li>
                                    <p>- 반납時 운송 중 장비 파손위험이 있으니, 수도권의 경우 가능한 방문 또는 "퀵"으로 반납 부탁드립니다.</p>
                                 </li>
                                 <li>
                                    <p>- 데모장비 지원은 무상이나 <strong>반납時 운송비용은 고객/파트너사 부담</strong>이니 양해 바랍니다.</p>
                                 </li>
                            </ul>
                        </div>
                        
                        <span class="hj-form-label-style button-box">
                            <button class="hj-form-submit-button" id="FormSubmitButton" type="submit">신청하기</button>
                        </span>
                    </form>
                <div class="hj-systems-form-image-1"></div>
                </div>

            </article>
        </div>
    </section>
    <?php @include("../../layouts/footer.php");?>
    <script type="text/javascript" src="/pages/main/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/index.js"></script>
</body>
</html>
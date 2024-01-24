<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="shortcut icon" href="../images/favicon/favicon-16.ico" sizes="16x16">
      <link rel ="shortcut icon" href="../images/favicon/favicon-32.ico" sizes="32x32">
      <link rel="shortcut icon" href="../images/favicon/favicon-32.png">
      <link rel="shortcut icon" href="../images/favicon/favicon-96.png">
      <link rel="shortcut icon" href="../images/favicon/favicon-152.png">

      <meta property="og:type" content="website"/>
<meta property="og:url" content="http://hjsystems.co.kr"/>
<meta property="og:image" content="/images/thumbnail.jpg"/>
<meta property="og:title" content="에이치제이시스템즈 | HJ SYSTEMS"/>
<meta property="og:description" content="안녕하세요 와콤 타블렛 총판 에이치제이시스템즈 입니다."/>

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="../js/libs/jquery-3.5.1.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="../js/libs/slick.min.js"></script>
      <script src="./js/email.js"></script>

      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../assets/index.css" />

    <title>HJ SYSTEMS | 기업구매상담</title>
</head>
<body>
    <?php @include("../layouts/header.php");?>
    <script type="text/javascript" src="../../pages/layouts/header.js"></script>
    <section class="hj-form-list-wrap">
        <div class="hj-form-main-wrap">
            <article class="hj-checklist-wrap">
                <h2>기업 구매 상담</h2>
                <div class="hj-form-text">
                    <p>와콤의 비즈니스 솔루션에 대한 자세한 상담을 원하시면 아래 양식을 기입해주세요.
                        <br>와콤 전문가가 곧 연락 드리겠습니다.
                    </p>
                </div>
                <h2>고객정보</h2>
                <div class="hj-form-flex-wrap">
                    <form method="POST" id="emailForm" class="hj-form-wrap">
                        <span class="hj-form-label-style">
                            <label for="ConsumerName" class="hj-form-label-title">이름</label>
                            <input type="text" class="hj-email-input" id="ConsumerName" required>
                        </span>
                        <span class="hj-form-label-style">
                            <label for="CompanyName" class="hj-form-label-title">기업명</label>
                            <input type="text" class="hj-email-input" id="CompanyName" required>
                        </span>
                        <span class="hj-form-label-style">
                            <label for="Position" class="hj-form-label-title">직책</label>
                            <input type="text" class="hj-email-input" id="Position" required>
                        </span>
                        <span class="hj-form-label-style">
                            <label for="Contact" class="hj-form-label-title">연락처</label>
                            <input type="text" class="hj-email-input" id="Contact" requiredc>
                        </span>
                        <span class="hj-form-label-style">
                            <label for="EmailAddress" class="hj-form-label-title">이메일 주소</label>
                            <input type="email" class="hj-email-input" id="EmailAddress" required>
                        </span>
                        <span class="hj-form-label-style">
                            <label for="Address" class="hj-form-label-title">주소</label>
                            <input type="text" class="hj-email-input" id="Address" required>
                        </span>
                        <span class="hj-form-label-style">
                            <label class="hj-form-label-title">관심제품</label>
                            <span>
                                <input class="hj-check-box" type="checkbox" id="liquid_tablet"><label for="liquid_tablet">액정 타블렛</label>
                                <input class="hj-check-box" type="checkbox" id="pen_tablet"><label for="pen_tablet">펜 타블렛</label>
                            </span>
                        </span>
                        <h2>문의 내용</h2>
                        <span class="hj-form-label-style">
                            <label for="InquiryTitle" class="hj-form-label-title">제목</label>
                            <input type="text" class="hj-email-input" id="InquiryTitle" required>
                        </span>
                        <span class="hj-form-label-style">
                            <label for="InquiryContents" class="hj-form-label-title">내용</label>
                            <textarea name="" id="InquiryContents" cols="30" rows="10" required></textarea>
                        </span>
                        <span class="hj-form-label-style">
                            <span>
                                <input class="hj-check-box" type="checkbox" id="terms_essential">
                                <label for="terms_essential">위와 같이 본인의 개인정보를 수집 이용하는 것에 <a href="" class="hj-terms-link">동의</a>  합니다.(필수)</label>
                            </span>
                            <br>
                            <span>
                                <input class="hj-check-box" type="checkbox" id="service_terms_essential">
                                <label for="service_terms_essential">광고성 정보 수신 <a href="" class="hj-terms-link">동의</a>(이벤트, 프로모션 등 광고성 정보 안내)(선택)</label>
                            </span>
                        </span>
                        <span class="hj-form-label-style button-box">
                            <button class="hj-form-submit-button" id="FormSubmitButton" type="submit">신청하기</button>
                        </span>
                    </form>
                <div class="hj-systems-form-image-1"></div>
                </div>

            </article>
        </div>
    </section>
    <?php @include("../layouts/footer.php");?>
    <script type="text/javascript" src="/pages/main/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/notice.js"></script>
</body>
</html>
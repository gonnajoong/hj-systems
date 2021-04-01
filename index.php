<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="shortcut icon" href="images/favicon/favicon-16.ico" sizes="16x16">
      <link rel ="shortcut icon" href="images/favicon/favicon-32.ico" sizes="32x32">
      <link rel="shortcut icon" href="images/favicon/favicon-32.png">
      <link rel="shortcut icon" href="images/favicon/favicon-96.png">
      <link rel="shortcut icon" href="images/favicon/favicon-152.png">

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="./js/libs/jquery-3.5.1.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="./js/libs/slick.min.js"></script>

      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="/assets/index.css" />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <title>HJ SYSTEMS</title>
</head>
<body>
    <?php @include("./layouts/header.php");?>
    <script type="text/javascript" src="/pages/layouts/header.js"></script>
    <section id="hjMainWrap" class="hj-main-wrap">
        <article class="hj-slide-wrap">
            <div class="hj-slide-image" style="background-image: url('/images/banners/hj_illust_banner_03.jpg');"></div>
            <div class="hj-slide-image" style="background-image: url('/images/banners/wacom-one_banner.jpg');"></div>
            <div class="hj-slide-image" style="background-image: url('https://wcm-cdn.wacom.com/-/media/images/products/pen computers/mobilestudio pro 1-5/gallery/wacom mobilestudio pro gallery 2.jpg?h=640&la=ko&w=960&hash=A3E41D07EE8D12A9B24512B4D41F417D')"></div>
        </article>
        <article class="hj-company-abbr-wrap">
            <ul class="hj-company-abbr-list">
                <li data-aos="fade-up" data-aos-duration="400">
                    <a href="http://www.hjsystems.co.kr/pages/business/business-part-01.php">
                        <span class="hj-company-abbr">
                            <div class="hj-abbr-img main-01"></div>
                            <p class="hj-abbr-title">학교 화상교육 바로가기</p>
                        </span>
                    </a>
                </li>
                <li data-aos="fade-up" data-aos-duration="700">
                    <a href="http://www.hjsystems.co.kr/pages/product/dtc-133.php">
                        <span class="hj-company-abbr">
                            <div class="hj-abbr-img main-02"></div>
                            <p class="hj-abbr-title">Wacom One 바로가기</p>
                        </span>
                    </a>
                </li>
                <li data-aos="fade-up" data-aos-duration="900">
                    <a href="http://www.hjsystems.co.kr/pages/notice.php">
                        <span class="hj-company-abbr">
                            <div class="hj-abbr-img main-03"></div>
                            <p class="hj-abbr-title">이벤트 및 공지사항 바로가기</p>
                        </span>
                    </a>
                </li>
                <li data-aos="fade-up" data-aos-duration="1300">
                    <a href="http://www.hjsystems.co.kr/pages/corporate-counseling.php">
                        <span class="hj-company-abbr">
                            <div class="hj-abbr-img main-04"></div>
                            <p class="hj-abbr-title">상담 문의 바로가기</p>
                        </span>
                    </a>
                </li>
                <!-- <li data-aos="fade-up" data-aos-duration="1100">
                    <span class="hj-company-abbr">
                        <div class="hj-abbr-img stylus"></div>
                        <p class="hj-abbr-title">스타일러스</p>
                        <span class="hj-abbr-contents">스타일러스(Stylus)는 펜의 자연스러운 느낌을 손으로 느끼며 편안하고 정확하게 디지털로 그림을 그리고, 필기하고, 아이디어를 표현 할 수 있는 펜입니다.</span>
                    </span>
                </li> -->
            </ul>
        </article>
    </section>
    <?php @include("./layouts/footer.php");?>
    <script type="text/javascript" src="/pages/main/js/index.js"></script>
</body>
</html>
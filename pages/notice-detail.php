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

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="../js/libs/jquery-3.5.1.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="../js/libs/slick.min.js"></script>

      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../assets/index.css" />

    <title>HJ SYSTEMS | 공지사항</title>
</head>
<body>
    <?php @include("../layouts/header.php");?>
    <script type="text/javascript" src="../../pages/layouts/header.js"></script>
    <section class="hj-notice-detail-wrap">
        <article class="hj-notice-detail">
            <ul>
                <li class="hj-notice-top">
                    <span>공지</span>
                    <span>제목 테스트</span>
                    <span>2021-03-31 18:24:47</span>
                </li>
                <li class="hj-contents-wrap">
                    <!-- 이미지, 내용 출력 -->
                    이미지 혹은 내용
                </li>
            </ul>
            <div class="hj-button-wrap">
                <a href="">
                    <button class="hj-white">목록</button>
                </a>
                <!-- 로그인 유무에 따라 수정 및 삭제 버튼 등장 -->
                <a href="">
                    <button class="hj-black">수정</button>
                </a>
                <a href="">
                    <button class="hj-black">삭제</button>
                </a>
            </div>
        </article>
    </section>
    <?php @include("../layouts/footer.php");?>
    <script type="text/javascript" src="/admin/pages/main/js/index.js"></script>
    <script type="text/javascript" src="/admin/pages/js/index.js"></script>
    <script type="text/javascript" src="/admin/pages/js/notice.js"></script>
</body>
</html>
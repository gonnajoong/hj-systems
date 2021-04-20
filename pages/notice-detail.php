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

      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../assets/index.css" />

    <title>HJ SYSTEMS | 공지사항</title>
</head>
<body>
    <?php @include("../layouts/header.php");?>
    <script type="text/javascript" src="../../pages/layouts/header.js"></script>
    <section class="hj-notice-detail-wrap">
        <article class="hj-board-title">
            <h2>이벤트 및 공지사항</h2>
        </article>
        <article class="hj-notice-detail">
            <ul>
                <li class="hj-notice-top">
                    <span id="ntdType" >공지</span>
                    <span id="ntdTitle">제목 테스트</span>
                    <span id="ntdDate">2021-03-31 18:24:47</span>
                </li>
                <li class="hj-contents-wrap">
                    <!-- 이미지, 내용 출력 -->
                    <img id="ntdImage" src="" alt="">
                    <p id="ntdContent"></p>
                </li>
            </ul>
            <div class="hj-button-wrap">
                <a href="" id="ntList">
                    <button class="hj-white" type="button">목록</button>
                </a>
               <span id="ntAdminWrap">
                 <!-- 로그인 유무에 따라 수정 및 삭제 버튼 등장 -->
                    <a href="" >
                        <button id="ntEdit" class="hj-black">수정</button>
                    </a>
                    <button class="hj-black">삭제</button>
               </span>
            </div>
        </article>
    </section>
    <?php @include("../layouts/footer.php");?>
    <script type="text/javascript" src="/pages/main/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/notice.js"></script>
</body>
</html>
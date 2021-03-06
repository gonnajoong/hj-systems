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
      <script src="http://www.hjsystems.co.kr/smarteditor/js/service/HuskyEZCreator.js" type="text/javascript"></script>

      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../assets/index.css" />

    <title>HJ SYSTEMS | 공지사항</title>
</head>
<body>
<?php @include("../layouts/header.php");?>
<!-- 로그인 유무 확인 후 로그인 유저가 아닐 시 뒤로가기 -->
    <script type="text/javascript" src="../../pages/layouts/header.js"></script>
    <section class="hj-notice-edit-wrap">
        <article>
            <h2 id="hjNoticeTitle">글 작성</h2>
        <!-- 수정, 삭제 query 로 변경 -->
            <form method="post" action="" class="hj-notice-form" enctype="multipart/form-data">
                <label for="noticeTitle">
                    <span>제목</span>
                    <input id="noticeTitle" class="hj-input-role" type="text" value="" placeholder="제목을 입력해주세요" require>
                </label>
                <label for="ntType">
                    <span>분류</span>
                    <select class="hj-input-role" name="ntType" id="ntType">
                        <option value="">선택해주세요.</option>
                        <option value="event">이벤트</option>
                        <option value="notice">공지사항</option>
                    </select>
                </label>
                <label for="ntContent">
                    <textarea class="hj-input-role"
                            style="min-width: 260px;"
                            name="ntContent"
                            id="ntContent"
                            placeholder="내용을 입력해주세요"></textarea>
                            <!-- 텍스트에디터 추가 예정 -->
                </label>
                <label for="ntImage" id="hjUploadWrap">
                    <span>이미지</span>
                    <input type="file"
                            class="hj-input-file"
                            name="ntImage"
                            id="ntImage"
                            accept="image/x-png,image/gif,image/jpeg" >
                </label>
                <div id="hjImagePreview" class="hj-image-preview">
                    <span>
                        <img src="" id="img" alt="업로드 이미지">
                        <button id="hjImageRemove" class="hj-image-remove-button" type="button"></button>
                    </span>
                </div>
                
            </form>
        </article>
    </section>
    <?php @include("../layouts/footer.php");?>
    <script type="text/javascript" src="/pages/main/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/notice.js"></script>
</body>
</html>
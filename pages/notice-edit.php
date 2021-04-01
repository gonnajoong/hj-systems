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
<!-- 로그인 유무 확인 후 로그인 유저가 아닐 시 뒤로가기 -->
    <script type="text/javascript" src="../../pages/layouts/header.js"></script>
    <section class="hj-notice-edit-wrap">
        <article>
            <h2 id="hjNoticeTitle">글 작성</h2>
        <!-- 수정, 삭제 query 로 변경 -->
            <form method="get" action="" class="hj-notice-form">
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
                    <span>내용</span>
                    <textarea class="hj-input-role"
                            name="ntContent"
                            id="ntContent"
                            placeholder="내용을 입력해주세요"></textarea>
                </label>
                <label for="ntImage">
                    <span>이미지</span>
                    <input type="file"
                            class="hj-input-file"
                            name="ntImage"
                            id="ntImage"
                            accept="image/x-png,image/gif,image/jpeg" >
                </label>
                <button id="hjSubmitButton" type="button" class="hj-submit-button">
                    <span>작성</span>
                </button>
            </form>
        </article>
    </section>
    <?php @include("../layouts/footer.php");?>
    <script type="text/javascript" src="/pages/main/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/notice.js"></script>
</body>
</html>
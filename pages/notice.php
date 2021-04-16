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
    <section class="hj-notice-board-wrap">
        <div class="hj-board-wrap">
            <article class="hj-board-title">
                <h2>이벤트 및 공지사항</h2>
            </article>
            <article class="hj-board-list-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>분류</th>
                            <th>제목</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody id="hjNoticeList">
                        
                    </tbody>
                </table>
                <!-- TODO 공지사항 목록 가져오는 스크립트 추가 및 공지사항 없을때 외형 추가할 것 -->
            
            </article>
            <article class="hj-pagination-wrap">
                <ul>
                
                    <li>
                        <a id="ntBefore" href="">이전</a>
                    </li>

                    <li id="ntPageNum">
                        <!-- page -->
                    </li>

                    <li>
                        <a id="ntAfter" href="">다음</a>
                    </li>
                </ul>
            </article>
        </div>
    </section>
    <?php @include("../layouts/footer.php");?>
    <script type="text/javascript" src="/pages/main/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/index.js"></script>
    <script type="text/javascript" src="/pages/js/notice.js"></script>
</body>
</html>
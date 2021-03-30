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
      <script src="./js/libs/slick.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./assets/index.css" />

    <title>HJ SYSTEMS | 로그인</title>
</head>
<body>
    <?php @include("./layouts/header.php");?>
    <script type="text/javascript" src="/admin/pages/layouts/header.js"></script>
    <section class="hj-login-wrap">
        <h2>로그인</h2>
        <article class="hj-login">
            <form method="POST" action="./sessions/login.php">
                <label for="u_id">
                    <span>ID</span>
                    <input type="text" id="u_id" name="u_id" placeholder="아이디"/>
                </label>
                <label for="u_pw">
                    <span>PW</span>
                    <input type="password" id="u_pw" name="u_pw" placeholder="패스워드">
                </label>
                <button id="hjLogin" type="submit">
                    <span>로그인</span>
                </button>
            </form>
        </article>
    </section>
    <?php @include("./layouts/footer.php");?>
    <script type="text/javascript" src="/admin/pages/main/js/index.js"></script>
    <script type="text/javascript">
        if(getCookie("HJ_SESSION")) {
            history.back();
        }
    </script>
</body>
</html>
<?php
    $db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
    if (!$db_conn) {
        $error = mysqli_connect_error();
        $errno = mysqli_connect_errno();
        print "$errno: $error\n";
        exit();
    }

    $pages = $_GET['pages'];
    $count = $_GET['count'];

    $gets = "SELECT * FROM";
    $result = mysqli_query($db_conn, $gets);
    // 추후 검색기능 추가 예정

    while($row = $find_result->fetch_assoc()) {
        
    }
?>
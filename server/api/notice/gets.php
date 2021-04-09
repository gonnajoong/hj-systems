<?php
    $db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
    if (!$db_conn) {
        $error = mysqli_connect_error();
        $errno = mysqli_connect_errno();
        print "$errno: $error\n";
        exit();
    }

    $pages = $_GET['page'];
    $count = $_GET['count'];
    


    $gets = "SELECT * FROM notice ORDER BY updated_at ASC";
    // 내림차순 최대 12개씩 가져올 것
    $result = mysqli_query($db_conn, $gets);
    // 추후 검색기능 추가 예정
    $rows = array();

    $num = mysqli_num_rows($result);

    $page = ($_GET['page'])?$_GET['page']:1;
    $list = 12;
    $block = 5;

    $pageNum = ceil($num/$list); // 총 페이지
    $blockNum = ceil($pageNum/$block); // 총 블록
    $nowBlock = ceil($page/$block);

    $s_page = ($nowBlock * $block) - ($block - 1);

    if ($s_page <= 1) {
        $s_page = 1;
    }
    $e_page = $nowBlock*$block;
    if ($pageNum <= $e_page) {
        $e_page = $pageNum;
    }


    $index = 0;
    while($row = $result->fetch_assoc()) {
        array_push($rows,
        array(
            "id" => $row["id"],
            "title" => $row['title'],
            "content" => $row['content'],
            "type" => $row['type'],
            "image_id" => $row['image_id'],
            "updated_at" => $row['updated_at'])
    );
        $index++;
        $rows["count"] = $index;
    }

    // 페이징 연동 할 것

    echo json_encode($rows, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
?>
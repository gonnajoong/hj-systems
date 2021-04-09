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

    $gets = "SELECT * FROM notice";
    // 내림차순 최대 12개씩 가져올 것
    $result = mysqli_query($db_conn, $gets);
    // 추후 검색기능 추가 예정
    $rows = array();

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

    echo json_encode($rows, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
?>
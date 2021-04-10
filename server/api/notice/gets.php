<?php
    $db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
    if (!$db_conn) {
        $error = mysqli_connect_error();
        $errno = mysqli_connect_errno();
        print "$errno: $error\n";
        exit();
    }

    $count = $_GET['count'];

    $num_length = 5;
    $notice_size = 12;
    $notice_page = intval($_GET['page']);
    if(!$notice_page) $notice_page = 1;

    $notice_offset = ($notice_page - 1) * $notice_size;
    $notice_count = mysqli_num_rows(mysqli_query($db_conn, "SELECT * FROM notice;"));
    
    
    
    $gets = "SELECT * FROM notice ORDER BY updated_at ASC LIMIT $notice_size OFFSET $notice_offset";

    $notice_start_num = floor(($notice_page - 1) / $num_length) * $num_length + 1;
    $notice_end_page_num = $notice_start_num + $num_length - 1;
    $notice_end_count_num = (floor($notice_count / $notice_size) + ($notice_count % $notice_size ? 1 : 0));
    if(!$notice_end_count_num) $notice_end_count_num = 1;
    $notice_end_num = $notice_end_page_num < $notice_end_count_num ? $notice_end_page_num : $notice_end_count_num;

    // 내림차순 최대 12개씩 가져올 것, 조건문 추가
    $result = mysqli_query($db_conn, $gets);
    // 추후 검색기능 추가 예정
    
    $rows['rows'] = array();

    $index = 0;
    while($row = $result->fetch_assoc()) {
        array_push($rows["rows"],
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

        $rows["notice_page"] = $notice_page;
        $rows["notice_offset"] = $notice_offset;
        $rows["notice_size"] = $notice_size;
        $rows["notice_start_num"] = $notice_start_num;
        $rows["notice_end_page_num"] = $notice_end_page_num;
        $rows["notice_end_count_num"] = $notice_end_count_num;
        $rows["notice_end_num"] = $notice_end_num;
    }

    // 페이징 연동 할 것

    echo json_encode($rows, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
?>
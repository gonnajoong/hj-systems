<?php
    $db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
    if (!$db_conn) {
        $error = mysqli_connect_error();
        $errno = mysqli_connect_errno();
        print "$errno: $error\n";
        exit();
    }

    $id = $_GET['id'];

    $get = "SELECT * FROM notice AS nt LEFT JOIN images as img ON img.image_id = nt.image_id WHERE nt.id = $id";
    
    $result = mysqli_query($db_conn, $get);
    
    $rows = array();

    while($row = $result->fetch_assoc()) {
        $rows =array(
            "id" => $row["id"],
            "title" => $row['title'],
            "content" => $row['content'],
            "type" => $row['type'],
            "image_id" => $row['image_id'],
            "image_name_hash" => $row['image_name_hash'],
            "updated_at" => $row['updated_at']);
    }

    echo json_encode($rows, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
?>
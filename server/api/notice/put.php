<?php
     $db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
     if (!$db_conn) {
         $error = mysqli_connect_error();
         $errno = mysqli_connect_errno();
         print "$errno: $error\n";
         exit();
     }

    $id = $_POST['id'];
    $title = mysqli_real_escape_string($db_conn, $_POST["title"]);
    $type = mysqli_real_escape_string($db_conn, $_POST["type"]);
    $content = $_POST["content"] ? mysqli_real_escape_string($db_conn, $_POST["content"]) : null;
    $image_id = $_POST["image_id"] ? mysqli_real_escape_string($db_conn, $_POST["image_id"]) : null;

    $put = "UPDATE notice SET title='$title', content='$content', image_id='$image_id', type='$type', updated_at=NOW() WHERE id='$id'";
    
    $result = mysqli_query($db_conn, $put);
    
    if($result) {
        echo json_encode('201', JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode('400', JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
    }

?>
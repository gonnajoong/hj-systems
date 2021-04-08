<?php
$success_count = 0;

if(isset($_POST['title'])){
    $db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
    if (!$db_conn) {
        $error = mysqli_connect_error();
        $errno = mysqli_connect_errno();
        print "$errno: $error\n";
        exit();
    }

    $title = mysqli_real_escape_string($db_conn, $_POST["title"]);
    $type = mysqli_real_escape_string($db_conn, $_POST["type"]);
    $content = $_POST["content"] ? mysqli_real_escape_string($db_conn, $_POST["content"]) : null;
    $image_id = $_POST["image_id"] ? mysqli_real_escape_string($db_conn, $_POST["image_id"]) : null;
    
    $sql = "INSERT INTO notice VALUES 
    ('', 
    '$title', 
    '$content', 
    '$image_id', 
    '$type',
    NOW(),
    NOW(),
    '')";

    $result = mysqli_query($db_conn, $sql);
    mysqli_close($db_conn);
    $success_count = 1;
}
echo $success_count;
exit;
?>
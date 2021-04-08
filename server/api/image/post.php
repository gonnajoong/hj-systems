<?php
$db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
if (!$db_conn) {
    $error = mysqli_connect_error();
    $errno = mysqli_connect_errno();
    print "$errno: $error\n";
    exit();
}

if(isset($_FILES['file']['name'])){
  // hash file
  $date = date("YmdHis", time());
  $dir = "../../../upload/";
  $file_name = $_FILES['file']['name'];
  $file_hash = $date.$file_name;

  /* Getting file name */
  $ext = substr(strrchr($file_name, '.'), 1); 
  $file_hash = md5($file_hash).".".$ext;

  /* Location */
  $location = $dir.$file_hash;
  $imageFileType = pathinfo($dir.$file_name,PATHINFO_EXTENSION);
  $imageFileType = strtolower($imageFileType);
  
  /* Valid extensions */
  $valid_extensions = array("jpg","jpeg","png");

  $response = 0;
  /* Check file extension */

  if(in_array(strtolower($imageFileType), $valid_extensions)) {
     /* Upload file */
     if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
        $nt_file_name = $file_name;
        $nt_file_name_hash = $file_hash;

        $sql = "INSERT INTO images VALUES ('',
        '$nt_file_name',
        '$nt_file_name_hash',
        NOW(),
        '');";

        $result = mysqli_query($db_conn, $sql);
        $response = $location;
        mysqli_close($db_conn);
     }
  }

  echo $response;
  exit;
}


?>
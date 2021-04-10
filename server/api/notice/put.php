<?php
     $db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
     if (!$db_conn) {
         $error = mysqli_connect_error();
         $errno = mysqli_connect_errno();
         print "$errno: $error\n";
         exit();
     }

     
?>
<?php
    $query = "SELECT * FROM `company`;";
    $db_conn = @mysqli_connect("211.47.74.38", "hjsystems", "hj191001#!", "dbhjsystems");
    // $db_conn = @mysqli_connect("localhost", "root", "root", "dbhjsystems");
    if (!$db_conn) {
        $error = mysqli_connect_error();
        $errno = mysqli_connect_errno();
        print "$errno: $error\n";
        exit();
    }

    $u_id = $_POST["u_id"];
    $u_pw = $_POST["u_pw"];

    $sql = "SELECT * FROM  user WHERE u_id = '{$u_id}'";
    $result = mysqli_query($db_conn, $sql);
    $row = mysqli_fetch_array($result);

    $message = null;
    $response = array();

    if(isset($row)){
        $hashedPassword = companyCryptCode($u_pw, $action = 'e');
        $passwordResult = $hashedPassword === $row['u_pw'] ? true : false;
        if($passwordResult === true){
            //todo 쿠키 생성 코드 삽입할것
            $_SESSION['u_id'] = $row['u_id'];
            setcookie("HJ_SESSION", $_SESSION['u_id'], time() + 604800, "/");
            $message = '로그인 성공';
            $response['data'] = array('message' => $message, 'status_code' => 200);
            echo json_encode($response);
            return false;
        } else {
            //"비밀번호가 다름";
            $message = '아이디 혹은 비밀번호를 확인해주세요.';
            $response['data'] = array('message' => $message, 'status_code' => 404);
            echo json_encode($response);
            return false;
        }
    } else {
        // "거짓, 아이디 불일치";
        $message = '아이디 혹은 비밀번호를 확인해주세요.';
        $response['data'] = array('message' => $message, 'status_code' => 404);
        echo json_encode($response);
        return false;
    }
    $hashedPassword = $row['u_pw'];
    
    mysqli_close($db_conn);

    //DB연결 종료

    header("Content-Type: application/json");

    
    
    // companyCryptCode('비밀번호 입력', 'e');

    function companyCryptCode($string, $action = 'e') {
        $secret_key = 'hjsystems_secret_key';
        $secret_iv = '1019';

        $output = false;
        $encrypt_method = "AES-256-CBC";
        $key = hash('sha256', $secret_key);
        $iv = substr(hash('sha256', $secret_iv), 0, 16);

        if($action == 'e'){
            $output = base64_encode(openssl_encrypt($string, $encrypt_method, $key, 0, $iv));
            // $hashedPassword = password_hash($output, PASSWORD_BCRYPT);
            // echo $hashedPassword;
        } else if ( $action == 'd'){
            $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
        }
        return $output;
    }

    
?>
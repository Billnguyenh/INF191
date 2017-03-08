<?php
include_once '../inc/db_connect.php';
include_once '../inc/login_functions.php';
 
sec_session_start(); // Our custom secure way of starting a PHP session.

echo "STUFFF"; 

if (isset($_POST['email'], $_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password']; // The hashed password.
    
    echo "~".$email."~";
    echo "~".$password."~";

    if (login($email, $password, $mysqli) == true) {
        echo "successs thingy";
        // Login success 
        header('Location: protected_page.php');
    } else {
        echo "initial login";
        // Login failed 
        header('Location: index.php?error=1');
    }
} else {
    // The correct POST variables were not sent to this page. 
    echo 'Invalid Request';
}

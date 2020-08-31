<?php

    session_start();

    $user = $_SESSION['user'];

    if($user == 'admin') {
        echo '{
            "message": "This is secret message for admin",
            "success": true
        }';
    }
    else {
        echo '{
            "message": "Who are you?",
            "success": false
        }';
    }

?>
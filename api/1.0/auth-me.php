<?php
//Получаем json из данных о юзере
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
// $user = new \userSpace\userClass();
$error = [
    'data'=> [],
    'messages'=> ['You are not autorized'],
    'resultCode'=> 1
];

$success = [
    'data'=> [
        'userId'=> 10,
        'login'=> 'vasia',
        'email'=> 'vasia@gmail.com'
    ],
    'messages'=> [],
    'resultCode'=> 0
];

echo json_encode($success);
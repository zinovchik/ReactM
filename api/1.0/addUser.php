<?php
//Получаем json из данных о юзере
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
$user = new \userSpace\userClass();

$userName = strtolower(trim($_POST['userName']));
$userPass = trim($_POST['userPass']);
$userRole = trim($_POST['userRole']);

echo json_encode($user->addUser($userName, $userPass, $userRole));

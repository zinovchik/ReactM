<?php
//
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
$user = new \userSpace\userClass();

$userId = trim($_POST['userId']);
$userName = strtolower(trim($_POST['userName']));
$userPass = trim($_POST['userPass']);
$userRole = trim($_POST['userRole']);

echo json_encode($user->editUser($userId, $userName, $userPass, $userRole));

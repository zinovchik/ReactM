<?php
//
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
$user = new \userSpace\userClass();

$userId = trim($_POST['userId']);
$userName = strtolower(trim($_POST['userName']));

echo json_encode($user->removeUser($userId, $userName));

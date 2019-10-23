<?php
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
$user = new \userSpace\userClass();

$enterLogin = strtolower(trim($_POST['enterLogin']));
$enterPass = trim($_POST['enterPass']);

echo json_encode($user->loginUser($enterLogin, $enterPass));

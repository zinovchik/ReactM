<?php
//
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
$user = new \userSpace\userClass();

$userName = strtolower(trim($_GET['userName']));

echo json_encode($user->isSetUser($userName));

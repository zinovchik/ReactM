<?php
//Получаем json из данных о юзере
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
$user = new \userSpace\userClass();

echo json_encode($user->getListUsers());

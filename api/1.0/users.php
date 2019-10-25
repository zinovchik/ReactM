<?php
//Получаем json из данных о юзере
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
$user = new \userSpace\userClass();

switch($_GET['type']){
    case 'get-all-users': 
        echo json_encode($user->getListUsers($_GET['userid'], $_GET['page'], $_GET['limit']));
    break;
    case 'get-user-info': 
        echo json_encode($user->getUserInfo($_GET['userid']));
    break;

    default: 
}





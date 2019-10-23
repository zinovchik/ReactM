<?php
//Получаем json из данных о юзере
require_once('ajaxHeader.php');
require_once('class/userSpace.php');
$user = new \userSpace\userClass();

// switch($_POST['action']){
//     case 'getUsers': 

//     break;

//     default: 
// }

echo json_encode($user->getListUsers($_GET['userid'], $_GET['page'], $_GET['limit']));



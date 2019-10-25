<?php
namespace userSpace {
  use configSpace;
  class userClass extends configSpace\configClass {

    //функция для добавления юзера в базу
    function addUser($userName, $userPass, $userRole){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $answer = array('userName' => $userName, 'userRole' => 'Сеошник', 'status' => 'success');

      $userPass = md5($userPass);

      $res = mysqli_query($this->dbConect, "INSERT INTO `users` (`login`, `password`, `role`) VALUES ('{$userName}', '{$userPass}', '{$userRole}')");
      if($res === FALSE) {
        $answer['status'] = 'error';
      }
      if($userRole == '1') {
        $answer['userRole'] = 'Админ';
      }
      mysqli_close($this->dbConect);
      return $answer;
    }

    //функция для редактирования юзера
    function editUser($userId, $userName, $userPass, $userRole){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $answer = array('userName' => $userName, 'userRole' => 'Сеошник', 'status' => 'success');

      $userPass = md5($userPass);

      $res = mysqli_query($this->dbConect, "UPDATE `users` SET `login` = '{$userName}', `password` = '{$userPass}', `role` = '{$userRole}' WHERE `id` = '{$userId}'");
      if($res === FALSE) {
        $answer['status'] = 'error';
      }
      if($userRole == '1') {
        $answer['userRole'] = 'Админ';
      }
      mysqli_close($this->dbConect);
      return $answer;
    }

    //функция для удаления юзера
    function removeUser($userId, $userName){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $answer = array('userName' => $userName, 'status' => 'success');

      $res = mysqli_query($this->dbConect, "DELETE FROM `users` WHERE `id` = '{$userId}'");
      if($res === FALSE) {
        $answer['status'] = 'error';
      }
      mysqli_close($this->dbConect);
      return $answer;
    }

    //проверка на существование юзера
    function isSetUser($userName){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $answer = array('isSetUser' => 0, 'status' => 'success');
      $res = mysqli_query($this->dbConect, "SELECT count(`login`) AS countLogin FROM `users` WHERE `login` = '".$userName."'");
      if($res === FALSE) {
        $answer['status'] = 'error';
      } else {
        $row = mysqli_fetch_array($res, MYSQLI_ASSOC);
        if($row['countLogin'] == 0) {
          $answer['isSetUser'] = 0;
        } else {
          $answer['isSetUser'] = 1;
        }
      }
      mysqli_close($this->dbConect);
      return $answer;
    }

    //Получаем список юзеров
    function getListUsers($userId, $page = 0, $limit = 3) {
      //DEFAULT
      $answer = array(
        'items' => array(),
        'errors'=> false,
        'count' => 0,
        'page' => $page,
        'limit' => $limit,
      );
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      //CURRENT USER INFO
      $curentUser = mysqli_query($this->dbConect, "SELECT * FROM `users` WHERE `id` = '" . $userId . "'");
      if($curentUser === FALSE) { $answer['errors'] = true; } else { 
        $curentUser = mysqli_fetch_array($curentUser, MYSQLI_ASSOC);
        $curentUserFollow = explode(',',  $curentUser['follow']);
      }
      //COUNT ALL
      $countUsers = mysqli_query($this->dbConect, "SELECT COUNT(*) as count FROM `users`");
      if($curentUser === FALSE) { $answer['errors'] = true; } else { 
        $countUsers = mysqli_fetch_array($countUsers, MYSQLI_ASSOC);
        $answer['count'] = $countUsers['count'];
      }
      //ALL USER INFO  
      $offset = $page * $limit; 
    $dataListUsers = mysqli_query($this->dbConect, "SELECT * FROM `users` LIMIT {$offset},{$limit}");
      $listUsers = array();
      while ($row = mysqli_fetch_array($dataListUsers, MYSQLI_ASSOC)) {
        $listUsers[] = array('id' => $row['id'],
                             'name' => $row['name'],
                             'profesion' => $row['profesion'],
                             'location' => [
                              'city' => $row['city'],
                              'country' => $row['country'],
                             ],
                             'photo' => $row['photo'],
                             'follow' => in_array($row['id'], $curentUserFollow) ? true : false,
        );
      };
      $answer['items'] = $listUsers;


      mysqli_close($this->dbConect);
      return $answer;
    }


    
    //Получаем info юзерa
    function getUserInfo($userId) {
      //DEFAULT
      $answer = array(
        'userInfo' => array(),
        'errors'=> false,
      );
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      //CURRENT USER INFO
      $curentUser = mysqli_query($this->dbConect, "SELECT * FROM `users` WHERE `id` = '" . $userId . "'");
      if($curentUser === FALSE) { 
        $answer['errors'] = true; 
      } else { 
        $row = mysqli_fetch_array($curentUser, MYSQLI_ASSOC);
        $answer['userInfo'] = array('id' => $row['id'],
                             'name' => $row['name'],
                             'profesion' => $row['profesion'],
                             'location' => [
                              'city' => $row['city'],
                              'country' => $row['country'],
                             ],
                             'photo' => $row['photo'],
                             'followed_users' => $row['follow'],
        );
      }
      
     


      mysqli_close($this->dbConect);
      return $answer;
    }

    //функция для входа в апку
    function loginUser ($enterLogin, $enterPass){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $answer = array(
        'status' => '',
        'userData' => array(
          'userId' => '',
          'userName' => '',
          'userRole' => '',
        )
      );
      $dataUser = mysqli_query($this->dbConect, "SELECT * FROM `users` WHERE `login` = '" . $enterLogin . "'");
      if($dataUser === FALSE) {
        $answer['status'] = 'error';
      } else {
        $row = mysqli_fetch_array($dataUser, MYSQLI_ASSOC);
        if($row){
          if (md5($enterPass) === $row['password']) {
            $answer['status'] = 'login';
            $answer['userData']['userId'] = $row['id'];
            $answer['userData']['userName'] = $row['login'];
            $answer['userData']['userRole'] = $row['role'];
          } else {
            $answer['status'] = 'notLogin';
          }

        } else {
          $answer['status'] = 'notLogin';
        }


      }

      return $answer;
    }

  }
}

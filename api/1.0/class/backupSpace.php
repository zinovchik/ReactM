<?php
namespace backupSpace {
  use configSpace;
  class backupClass extends configSpace\configClass {

    //
    function restoreBackup($currentBackup){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $answer = array('status' => 'success', 'restoredFiles' => '');

      $date = date('Y/m/d H:i', $currentBackup);

      $date = str_replace(' ', '.', $date);
      $date = str_replace('/', '-', $date);
      $date = str_replace(':', '_', $date);

      $file1 = '../backups/DB_links_' . $date . '.txt';
      $file2 = '../backups/DB_sites_' . $date . '.txt';
      $file3 = '../backups/DB_users_' . $date . '.txt';

      $answer['restoredFiles'] = $file1.$file2.$file3;

      $fileLinks = file_get_contents ($file1);
      if($fileLinks === FALSE){
        $answer['status'] = 'error';
        return $answer;
      }
      $fileLinks = json_decode($fileLinks);
      $res = mysqli_query($this->dbConect, "DELETE FROM `links`");
      foreach ($fileLinks as $row) {
        $res = mysqli_query($this->dbConect, "INSERT INTO `links` (`id`, `site_id`, `link`, `domain`, `date_created`) VALUES (".$row[0].", '".$row[1]."', '".$row[2]."', '".$row[3]."', '".$row[4]."')");
      }


      $fileSites = file_get_contents ($file2);
      if($fileSites === FALSE){
        $answer['status'] = 'error';
        return $answer;
      }
      $fileSites = json_decode($fileSites);
      $res = mysqli_query($this->dbConect, "DELETE FROM `sites`");
      foreach ($fileSites as $row) {
        $res = mysqli_query($this->dbConect, "INSERT INTO `sites` (`id`, `site`, `date_create`, `owner`) VALUES (".$row[0].", '".$row[1]."', '".$row[2]."', '".$row[3]."')");
      }

      $fileUsers = file_get_contents ($file3);
      if($fileUsers === FALSE){
        $answer['status'] = 'error';
        return $answer;
      }
      $fileUsers = json_decode($fileUsers);
      $res = mysqli_query($this->dbConect, "DELETE FROM `users`");
      foreach ($fileUsers as $row) {
        $res = mysqli_query($this->dbConect, "INSERT INTO `users` (`id`, `login`, `password`, `role`) VALUES (".$row[0].", '".$row[1]."', '".$row[2]."', '".$row[3]."')");
      }

      mysqli_close($this->dbConect);
      return $answer;
    }



    //
    function removeBackup($currentBackup){
      $answer = array('status' => 'success', 'removedFiles' => '');

      $date = date('Y/m/d H:i', $currentBackup);

      $date = str_replace(' ', '.', $date);
      $date = str_replace('/', '-', $date);
      $date = str_replace(':', '_', $date);

      $file1 = '../backups/DB_links_' . $date . '.txt';
      $file2 = '../backups/DB_sites_' . $date . '.txt';
      $file3 = '../backups/DB_users_' . $date . '.txt';

      $answer['removedFiles'] = $file1.$file2.$file3;

      if(unlink($file1) === FALSE) {
        $answer['status'] = 'error';
      }

      if(unlink($file2) === FALSE) {
        $answer['status'] = 'error';
      }

      if(unlink($file3) === FALSE) {
        $answer['status'] = 'error';
      }

      return $answer;
    }

    //
    function getLastDateBackup(){
      $answer = array('status' => 'success', 'lastDateBackup' => '');

      $tmpArray = array();
      $files = scandir('../backups');

      foreach ($files as $file) {
        if(strpos($file, 'DB_links_') !== FALSE) {
          $file = str_replace('DB_links_', '', $file);
          $file = str_replace('.txt', '', $file);
          $file = str_replace('.', ' ', $file);
          $file = str_replace('-', '/', $file);
          $file = str_replace('_', ':', $file);
          $tmpArray[] = strtotime($file);
        }
      }
      if(count($tmpArray) > 0) {
        $answer['lastDateBackup'] = date('d.m.Y в H:i', max($tmpArray));
      } else {
        $answer['lastDateBackup'] = 'Бекапы отсутствуют';
      }
      return $answer;
    }

    //
    function getListBackup (){
      $answer = array('status' => 'success', 'listBackup' => '');

      $tmpArray = array();
      $files = scandir('../backups');

      foreach ($files as $file) {
        if(strpos($file, 'DB_links_') !== FALSE) {
          $file = str_replace('DB_links_', '', $file);
          $file = str_replace('.txt', '', $file);
          $file = str_replace('.', ' ', $file);
          $file = str_replace('-', '/', $file);
          $file = str_replace('_', ':', $file);
          $tmpArray[] = strtotime($file);
        }
      }
      if(count($tmpArray) > 0) {
        rsort($tmpArray);
        $answer['listBackup'] = $tmpArray;
      }
      return $answer;
    }

    //
    function addBackup(){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $answer = array('status' => 'success');

      $date = date('Y-m-d.H_i');

      $res = mysqli_query($this->dbConect, "SELECT * FROM `sites`");
      if($res === FALSE) {
        $answer['status'] = 'error';
      } else {
        $list = array();
        while ($row = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
          $list[] = array($row['id'], $row['site'], $row['date_create'], $row['owner']);
        };
      }
      $filename = '../backups/DB_sites_'.$date.'.txt';
      $data = json_encode($list);
      if (file_put_contents ($filename, $data) === FALSE) {
        $answer['status'] = 'error';
      }


      $res = mysqli_query($this->dbConect, "SELECT * FROM `links`");
      if($res === FALSE) {
        $answer['status'] = 'error';
      } else {
        $list = array();
        while ($row = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
          $list[] = array($row['id'], $row['site_id'], $row['link'], $row['domain'], $row['date_created']);
        };
      }
      $filename = '../backups/DB_links_'.$date.'.txt';
      $data = json_encode($list);
      if (file_put_contents ($filename, $data) === FALSE) {
        $answer['status'] = 'error';
      }


      $res = mysqli_query($this->dbConect, "SELECT * FROM `users`");
      if($res === FALSE) {
        $answer['status'] = 'error';
      } else {
        $list = array();
        while ($row = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
          $list[] = array($row['id'], $row['login'], $row['password'], $row['role']);
        };
      }
      $filename = '../backups/DB_users_'.$date.'.txt';
      $data = json_encode($list);
      if (file_put_contents ($filename, $data) === FALSE) {
        $answer['status'] = 'error';
      }

      mysqli_close($this->dbConect);
      return $answer;
    }
  }
}

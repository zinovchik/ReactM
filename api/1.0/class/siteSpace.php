<?php
namespace siteSpace {
  use configSpace;
  class siteClass extends configSpace\configClass {
    function mySort($incomeArray, $isReverse = false){
      $newArray = array();
      foreach(array_keys($incomeArray) as $key){
        $newArray[] = $incomeArray[$key];
      }
      if($isReverse){
        return array_reverse($newArray);
      } else {
        return $newArray;
      }
    }

    function detectDomain($url){
      // парсим урл, если функция
      $url = parse_url($url);
      if ($url['host']) {
        $url = $url['host'];
      } else {
        $pos = strlen($url['path']);

        $tmpPos = strpos($url['path'], '/');
        if($tmpPos !== FALSE && $tmpPos < $pos) $pos = $tmpPos;

        $tmpPos = strpos($url['path'], '?');
        if($tmpPos !== FALSE && $tmpPos < $pos) $pos = $tmpPos;

        $tmpPos = strpos($url['path'], '#');
        if($tmpPos !== FALSE && $tmpPos < $pos) $pos = $tmpPos;

        $url = substr($url['path'], 0, $pos);
      }

      //удаляем если есть www.
      if(strpos($url, 'www.') === 0){
        $url = substr($url, 4);
      }
      return $url;
    }

    function compareLinks($siteId, $textAreaValue){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $contLinks = array('unique' => 0, 'notUnique' => 0, 'status' => 'success', 'links' => '');
      $uniqueLinks = array();

      $links = explode ("\n", $textAreaValue);
      foreach(array_keys($links) as $key) {
        $links[$key] = trim($links[$key]);
        //удаляем пустые елементы масива
        if($links[$key] == ''){
          unset($links[$key]);
        }
        //удаляем ссылки в которых нет протокола http или https
        if(strpos($links[$key], 'http') !== 0){
          unset($links[$key]);
        }
      }
      //сортируем для того что бы в индексах не было пробелов
      // sort($links);
      $links = $this->mySort($links);

      foreach(array_keys($links) as $key) {

        $domain = $this->detectDomain($links[$key]);
        $link = $links[$key];
        $res = mysqli_query($this->dbConect, "SELECT count(`domain`) AS countLink FROM `links` WHERE `site_id` = ".$siteId." AND `domain` = '".$domain."'");

        if($res === FALSE) {
          $contLinks['error']++;
        } else {
          $row = mysqli_fetch_array($res, MYSQLI_ASSOC);
          if($row['countLink'] == 0) {

            if ($uniqueLinks[$domain] !=''){
              $contLinks['notUnique']++;
            } else {
              $contLinks['unique']++;
              $uniqueLinks[$domain] = $link;
            }
          } else {
            $contLinks['notUnique']++;
          }
        }
      }
      mysqli_close($this->dbConect);
      if (count($uniqueLinks)) {
          $contLinks['links'] = implode ("\n", $uniqueLinks);
      }
      return $contLinks;
    }


    function compareTwoListLinks($textAreaValue1, $textAreaValue2, $mode){

      $contLinks = array('unique' => 0, 'notUnique' => 0, 'status' => 'success', 'links' => '');
      $uniqueLinks = array();

      //сравниваем как ссылки
      if ($mode == 'link'){
        //из первого списка ссылок - делаем список доменов
        $links1 = explode ("\n", $textAreaValue1);
        foreach(array_keys($links1) as $key) {
          $links1[$key] = $this->detectDomain(trim($links1[$key]));
          //удаляем пустые елементы масива
          if($links1[$key] == ''){
            unset($links1[$key]);
          }
          //удаляем ссылки в которых нет протокола http или https
          if(strpos($links[$key], 'http') !== 0){
            unset($links[$key]);
          }
        }
        // sort($links1);
        $links1 = $this->mySort($links1);

        //из второго просто список ссылок
        $links2 = explode ("\n", $textAreaValue2);
        foreach(array_keys($links2) as $key) {
          $links2[$key] = trim($links2[$key]);
          //удаляем пустые елементы масива
          if($links2[$key] == ''){
            unset($links2[$key]);
          }
          //удаляем ссылки в которых нет протокола http или https
          if(strpos($links[$key], 'http') !== 0){
            unset($links[$key]);
          }
        }
        // sort($links2);
        $links2 = $this->mySort($links2);

        foreach($links2 as $link) {
          $domain = $this->detectDomain($link);
          if(in_array($domain, $links1)){
            $contLinks['notUnique']++;
          } else {
            $contLinks['unique']++;
            $uniqueLinks[$domain] = $link;
          }
        }
      } else { //сравниваем как строки или кейворды
        //делаем первый список и приводим в нижний регистр
        $links1 = explode ("\n", $textAreaValue1);
        foreach(array_keys($links1) as $key) {
          $links1[$key] = strtolower(trim($links1[$key]));
          if($links1[$key] == ''){
            unset($links1[$key]);
          }
          //удаляем ссылки в которых нет протокола http или https
          if(strpos($links[$key], 'http') !== 0){
            unset($links[$key]);
          }
        }
        // sort($links1);
        $links1 = $this->mySort($links1);

        //делаем второй список
        $links2 = explode ("\n", $textAreaValue2);
        foreach(array_keys($links2) as $key) {
          $links2[$key] = trim($links2[$key]);
          //удаляем пустые елементы масива
          if($links2[$key] == ''){
            unset($links2[$key]);
          }
          //удаляем ссылки в которых нет протокола http или https
          if(strpos($links[$key], 'http') !== 0){
            unset($links[$key]);
          }
        }
        // sort($links2);
        $links2 = $this->mySort($links2);

        foreach($links2 as $link) {
          $linkLowerCase = strtolower($link);
          if(in_array($linkLowerCase, $links1)){
            $contLinks['notUnique']++;
          } else {
            $contLinks['unique']++;
            $uniqueLinks[] = $link;
          }
        }
      }

      if (count($uniqueLinks)) {
        $contLinks['links'] = implode ("\n", $uniqueLinks);
      }
      return $contLinks;
    }


    function addLinks($siteId, $textAreaValue){
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $contLinks = array('success' => 0, 'error' => 0, 'status' => 'success');

      $links = explode ("\n", $textAreaValue);
      foreach(array_keys($links) as $key) {
        $links[$key] = trim($links[$key]);
        //удаляем пустые елементы масива
        if($links[$key] == ''){
          unset($links[$key]);
        }
        //удаляем ссылки в которых нет протокола http или https
        if(strpos($links[$key], 'http') !== 0){
          unset($links[$key]);
        }

        //Проверяем нет ли такой ссылки в базе у данного сайта
        $res0 = mysqli_query($this->dbConect, "SELECT count(*) AS countLink FROM `links` WHERE `link` = '".$links[$key]."' AND `site_id` = '".$siteId."'");
        if($res0 === FALSE) {
          unset($links[$key]);
        } else {
          $row = mysqli_fetch_array($res0, MYSQLI_ASSOC);
          if($row['countLink'] != 0) {
            unset($links[$key]);
          }
        }
      }
      //сортируем для того что бы в индексах не было пробелов
      // sort($links);
      $links = $this->mySort($links, true);


      foreach(array_keys($links) as $key) {

        $domain = $this->detectDomain($links[$key]);
        $link = $links[$key];
        $res = mysqli_query($this->dbConect, "INSERT INTO `links` (`site_id`, `link`, `domain`) VALUES ('".$siteId."', '".$link."', '".$domain."')");

        if($res === FALSE) {
          $contLinks['error']++;
        } else {
          $contLinks['success']++;
        }
      }
      mysqli_close($this->dbConect);
      return $contLinks;
    }

    //Удаляем ссылку из базы
    function removeLink($id) {
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $res = mysqli_query($this->dbConect, "DELETE FROM `links` WHERE `id` IN (".$id.")");
      mysqli_close($this->dbConect);

      if($res === FALSE) {
        return array('status'=>'error', 'id'=> $id);
      } else {
        return array('status'=>'success', 'id'=> $id);
      }
    }

    //Получаем список ссылок сайта по id сайта
    function getListLinks($id, $offset, $countPerPage, $orderBy) {
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $dataListSites = mysqli_query($this->dbConect, "SELECT * FROM `links` WHERE `site_id` = " . $id . $orderBy . " LIMIT ".$offset.", " . $countPerPage . "");
      $listLinks = array();
      while ($row = mysqli_fetch_array($dataListSites, MYSQLI_ASSOC)) {
        $listLinks[] = array('id' => $row['id'],
                             'link' => $row['link'],
                             'domain' => $row['domain'],
                             'date' => date("d.m.y", strtotime($row['date_created'])),
        );
      };
      mysqli_close($this->dbConect);
      return $listLinks;
    }

    //Добавляем сайт в базу
    function addSite($url, $userId) {
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $res = mysqli_query($this->dbConect, "INSERT INTO `sites` (`site`, `owner`) VALUES ('".$url."', '".$userId."')");
      mysqli_close($this->dbConect);

      if($res === FALSE) {
        return array('status'=>'error', 'site'=> $url);
      } else {
        return array('status'=>'success', 'site'=> $url);
      }
    }

    //Редактируем сайт в базе
    function editSite($id, $url) {
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $res = mysqli_query($this->dbConect, "UPDATE `sites` SET `site` = '".$url."' WHERE `id` = ".$id);
      mysqli_close($this->dbConect);

      if($res === FALSE) {
        return array('status'=>'error', 'site'=> $url);
      } else {
        return array('status'=>'success', 'site'=> $url);
      }
    }

    //Удаляем сайт из базы
    function removeSite($id, $url) {
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      $res = mysqli_query($this->dbConect, "DELETE FROM `links` WHERE `site_id` = ".$id);
      $resLinks = mysqli_affected_rows($this->dbConect);
      $res = mysqli_query($this->dbConect, "DELETE FROM `sites` WHERE `id` = ".$id);
      mysqli_close($this->dbConect);

      if($res === FALSE) {
        return array('status'=>'error', 'site'=> $url);
      } else {
        return array('status'=>'success', 'site'=> $url, 'droppedLinks' => (int)$resLinks);
      }
    }

    //Получаем список сайтов с подсчетом количества ссылок (уникальных и не уникальных)
    function getListSites($addStatisticInfo = true, $userId, $userRole) {
      $this->dbConect = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPswd, $this->dbDatabase) or die("Не могу соединиться с MySQL.");
      if ((int)$userRole == 1) {
        $dataListSites = mysqli_query($this->dbConect, "SELECT `id`, `site`, `owner` FROM `sites`");
      } else {
        $dataListSites = mysqli_query($this->dbConect, "SELECT `id`, `site`, `owner` FROM `sites` WHERE `owner` = '".$userId."'");
      }

      $listSites = array();
      while ($row = mysqli_fetch_array($dataListSites, MYSQLI_ASSOC)) {
        if ($addStatisticInfo){
          $dataCountAllLinks = mysqli_query($this->dbConect, "SELECT `id`,`site_id` FROM `links` WHERE `site_id` = " . $row['id']);
          $dataCountUniqueLinks = mysqli_query($this->dbConect, "SELECT `id`,`site_id`,`domain` FROM `links` WHERE `site_id` = " . $row['id'] . " GROUP BY `domain`");
          $listSites[] = array('id' => $row['id'],
                               'site' => $row['site'],
                               'countAllLinks' => mysqli_num_rows($dataCountAllLinks),
                               'countUniqueLinks' => mysqli_num_rows($dataCountUniqueLinks),
          );
        } else {
          $listSites[] = array('id' => $row['id'],
                               'site' => $row['site'],
          );
        }
      };
      mysqli_close($this->dbConect);
      return $listSites;
    }
    //end
  }
}

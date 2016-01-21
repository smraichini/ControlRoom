<?php
  $i=0;
  $file = fopen("records.txt", "r");
  $array = fgetcsv($file, filesize("records.txt"), ";" , ";");
  fclose($file);
  $r = array();
  while ($i < (count($array)-3)) {
  $tmp = array(
    "server"=>$array[$i],
    "place"=> $array[$i+1],
    "alert"=>$array[$i+2]
  );
  array_push($r, $tmp);
   $i = $i+3;
}
 echo json_encode($r);

 ?>

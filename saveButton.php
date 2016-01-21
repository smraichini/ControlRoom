<?php

 $campi = json_decode(file_get_contents('php://input'));
 $stringCsv=csv($campi->server,$campi->place,$campi->alert);
 $file = fopen("records.txt", "a");
 fputs($file, $stringCsv );

function csv($server,$place,$alert){
  return $server.";".$place.";".$alert.";";
}

echo json_encode($campi);

 ?>

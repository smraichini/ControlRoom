

function generateTabel(){
  $.post("stat.php", function(data){
    var obj = (data);
    console.log(obj);
  });
}


/*Variabili globali*/
var nomiServer=["Server A1","Server B2","Server C4","Server Z0", "Server R7"];
var nomiLuogo=["Sydney","London","New York","Tokyo", "Perugia"];
var nomiAlert=["Hard Disk danneggiato.","Server non raggiungibile.","Host spento.","Host inesistente.", "Errore di connessione."];

//funzione che pulisce tutti i campi
function deleteData(){
  document.getElementById("Nome").value="";
  document.getElementById("Luogo").value="";
  document.getElementById("Alert").value="";
}
//funzione che genera i campi randomicamente
function generate(){
  document.getElementById("Nome").value=nomiServer[Math.floor(Math.random()*nomiServer.length)];
  document.getElementById("Luogo").value=nomiLuogo[Math.floor(Math.random()*nomiLuogo.length)];
  document.getElementById("Alert").value=nomiAlert[Math.floor(Math.random()*nomiAlert.length)];
}
//controlla che tutti i campi siano compilati
function checkFields(){
  if(document.getElementById("Nome").value=="" && document.getElementById("Luogo").value=="" && document.getElementById("Alert").value=="")
    {
      window.alert("Inserire i dati nei campi SERVER, LUOGO e ALERT");
      setFocus("Nome");
    }
    else
       {
           if (document.getElementById("Nome").value=="" && document.getElementById("Luogo").value=="")
           {
             window.alert("Inserire i dati nei campi SERVER e LUOGO");
             setFocus("Nome");
           }
           else
           {
             if(document.getElementById("Luogo").value=="" && document.getElementById("Alert").value=="")
             {
              window.alert("Inserire i dati nei campi LUOGO e ALERT");
              setFocus("Luogo");
             }
             else
             {
               if(document.getElementById("Nome").value=="" && document.getElementById("Alert").value=="")
               {
                window.alert("Inserire i dati nei campi SERVER e ALERT");
                setFocus("Nome");
               }
               else
               {
                 if (document.getElementById("Nome").value=="")
                 {
                   window.alert("Inserire i dati nel campo SERVER");
                   setFocus("Nome");
                 }
                 else
                 {
                   if (document.getElementById("Luogo").value=="")
                   {
                     window.alert("Inserire i dati nel campo LUOGO");
                     setFocus("Luogo");
                   }
                   else
                   {
                     if (document.getElementById("Alert").value=="")
                     {
                       window.alert("Inserire i dati nel campo ALERT");
                       setFocus("Alert");
                     }
                     else {
                       sendToServer();
                     }
                   }
                 }
               }
             }
           }
        }

      }
//setta il focus nel elemento con l'id passato come parametro
function setFocus(text){
  document.getElementById(text).focus();
}

function sendToServer(){
  var obj = {
    "server": document.getElementById('Nome').value,
    "alert" : document.getElementById('Alert').value,
    "place" : document.getElementById('Luogo').value
}

  $.post("saveButton.php", JSON.stringify(obj), function(data){
    alert("Il record e' stato inserito correttamente.");
  });
}





function enviarDatosUsuario(){

 var precio=document.getElementById("precio");
 var nombre=document.getElementById("nombre");
  var img=document.getElementById("img");
   var btn_finalizar_compra=document.getElementById("btn_finalizar_compra");

    // btn_finalizar_compra.href = "https://mpago.li/2pVFLGS";
     alert(precio.text);
     alert(nombre.text);
     alert(img.text);

      var win = window.open(url, '_blank');
             // Cambiar el foco al nuevo tab (punto opcional)
             win.focus();



   }
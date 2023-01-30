
  var precio;
  var nombre;
  var img;
  var btn_finalizar_compra;



function enviarDatosUsuario(){

 precio=document.getElementById("precio");
 nombre=document.getElementById("nombre");
 img=document.getElementById("img");

 var win = window.open('seleccionpago.html', 'PAGO');
 win.focus();
   }


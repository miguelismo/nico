$(document).ready(function () {
  
  // Borra los elementos al ppio
  $(".cont_bio").fadeOut();

  // Inicio 
  
  function alCambiar() {
    var altoContenido = ($(".elem_1").outerHeight() + $(".elem_2").outerHeight()-40);
    $(".contenido_clon").css("height", (altoContenido + "px"));
    $(".despliegue_int").css("height", (altoContenido + "px"));
    //$(".contenido_clon").css("width", (altoContenido + "px"));
    
  }

  alCambiar()

  $(window).resize(function () {
    alCambiar()
  });
  
  // Botones hover 

  $(".btn_bio").mouseover(function () {
    $(".menu").css("background", "#2feaa2");
  });
  $(".btn_bio").mouseout(function () {
    $(".menu").css("background", "#000");
  });
  
  $(".btn_works").mouseover(function () {
    $(".menu").css("background", "#d03999");
  });
  $(".btn_works").mouseout(function () {
    $(".menu").css("background", "#000");
  });
  
  $(".btn_contact").mouseover(function () {
    $(".menu").css("background", "#f07e3c");
  });
  $(".btn_contact").mouseout(function () {
    $(".menu").css("background", "#000");
  });
  
  // Boton cerrar
  $(".cerrar").click(function () {
    $(".cont_bio").fadeOut();
  });
  
  // Botones click
  $(".btn_bio").click(function () {
    $(".cont_bio").fadeIn();
  });

});

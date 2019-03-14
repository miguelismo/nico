$(document).ready(function () {
  
  // Borra los elementos al ppio
  //$(".cont_bio").fadeOut();

  // Inicio 
  
  function alCambiar() {
    var altoContenido = ($(".elem_1").outerHeight() + $(".elem_2").outerHeight()-40);
    $(".contenido_clon").css("height", (altoContenido + "px"));
    $(".despliegue_int").css("height", (altoContenido + "px"));
  }
  
  // Responsivo
  
  function responsivo() {
    var anchoVentana = $( window ).width();
    var anchoVentanaTercio = $( window ).width() / 3;
    var anchoVentanaDosTercios = anchoVentanaTercio * 2;
    if (anchoVentana > 700) {
      $(".alpha").css("width", "300px");
      $(".beta").css("width", "100px");
    } else if (anchoVentana < 700) {
      $(".alpha").css("width", (anchoVentanaDosTercios + "px"));
      $(".beta").css("width", (anchoVentanaTercio + "px"));
    }
  }
  
  responsivo();
  alCambiar();
  
  $( window ).resize(function () {
    responsivo();
    alCambiar();
  });
  
  // Botones hover 
  $(".btn_bio").mouseover(function () {
    $(".menu").css("background", "#2feaa2");
  });
  $(".btn_bio").mouseout(function () {
    $(".menu").css("background", "#000");
  });
  
  $(".btn_works").mouseover(function () {
    $(".menu").css("background", "#ff47bc");
  });
  $(".btn_works").mouseout(function () {
    $(".menu").css("background", "#000");
  });
  
  $(".btn_contact").mouseover(function () {
    $(".menu").css("background", "#ff904f");
  });
  $(".btn_contact").mouseout(function () {
    $(".menu").css("background", "#000");
  });
  
  // Boton cerrar
  $(".cerrar").click(function () {
    funcBorron();
  });
  
  // Botones click
  function funcBorron() {
    var r = $.Deferred();
    $(".cont_bio").css("display", "flex").hide().fadeOut();
    $(".cont_works").css("display", "flex").hide().fadeOut();
    $(".cont_contact").css("display", "flex").hide().fadeOut();
    return r;
  };
  
  function muestraUno() {
    $(".cont_bio").css("display", "flex").hide().fadeIn();
  };
  function muestraDos() {
    $(".cont_works").css("display", "flex").hide().fadeIn();
  };
  function muestraTres() {
    $(".cont_contact").css("display", "flex").hide().fadeIn();
  };
  
  $(".btn_bio").click(function () {
    funcBorron().done( muestraUno() );
  });
  $(".btn_works").click(function () {
    funcBorron().done( muestraDos() );
  });
  $(".btn_contact").click(function () {
    funcBorron().done( muestraTres() );
  });
  
  // Galeria
  
  $(".gallery a img").mouseover(function () {
    $(this).css("-webkit-filter", "grayscale(0%)");
    $(this).css("filter", "grayscale(0%)");
  });
  $(".gallery a img").mouseout(function () {
    $(this).css("-webkit-filter", "grayscale(100%)");
    $(this).css("filter", "grayscale(100%)");
  });
  
  

});

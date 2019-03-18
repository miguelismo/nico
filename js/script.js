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
  $(".btn_bio").click(function () {
    $(".menu").css("background", "#2feaa2");
  });
  
  $(".btn_works").mouseover(function () {
    $(".menu").css("background", "#ff47bc");
  });
    $(".btn_works").click(function () {
    $(".menu").css("background", "#ff47bc");
  });
  
  $(".btn_contact").mouseover(function () {
    $(".menu").css("background", "#ff904f");
  });
    $(".btn_contact").click(function () {
    $(".menu").css("background", "#ff904f");
  });
  
  // Botones click
  function funcBorron() {
    var r = $.Deferred();
    $(".cont_bio").css("display", "flex").hide().fadeOut();
    $(".cont_works").css("display", "flex").hide().fadeOut();
    $(".cont_contact").css("display", "flex").hide().fadeOut();
    return r;
  };
    
  // Boton cerrar
  $(".cerrar").click(function () {
    funcBorron();
    $(".menu").css("background", "#000");
  });
  
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
  
  // Galeria (Fotos)
  
  $(".gallery a img").mouseover(function () {
    $(this).css("-webkit-filter", "grayscale(0%)");
    $(this).css("filter", "grayscale(0%)");
    $(this).css("opacity", "1");
  });
  $(".gallery a img").mouseout(function () {
    $(this).css("-webkit-filter", "grayscale(100%)");
    $(this).css("filter", "grayscale(100%)");
    $(this).css("opacity", ".5");
  });
  
  // Galeria (Videos)
  
  $(".mini_video").mouseover(function () {
    $(this).css("-webkit-filter", "grayscale(0%)");
    $(this).css("filter", "grayscale(0%)");
    $(this).css("opacity", "1");
  });
  $(".mini_video").mouseout(function () {
    $(this).css("-webkit-filter", "grayscale(100%)");
    $(this).css("filter", "grayscale(100%)");
    $(this).css("opacity", ".5");
  });
  
  
  // Ajuste alto en iphone
  
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

});

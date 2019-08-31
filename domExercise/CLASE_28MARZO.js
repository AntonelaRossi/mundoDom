
///////////////////////////
///////  EVENTOS  /////////



var pasarConElMouse = function () {
    console.log("me pasaste con el mouse")
}

var boton = document.querySelector('button');
boton.onclick = function () {
    // código para manejar que se hace al hacer click en el botón
    window.alert("EEEEEOOOOO");
}


// boton.onmouseover = pasarConElMouse
//en DOMMMMMM cuando llamas a una funcion no hay que ponerle parentesis 



//otra manera es declararla en el lugar
boton.onmouseover = function () {

    console.log("JELOU")
}


//LA OTRA MANERA QUE MAS SE USA
//addEventListener
//tipoEvento en forma de string

var botoncin = document.querySelector("button");
botoncin.addEventListener("click", function () {
    boton.classList.add("rojo")

    console.log(this)

});


// function clickHandler() {
// 	console.log(this)		// this en este caso apunta al elemento que ejecutó el evento
// }
// botoncin.addEventListener('click', clickHandler);
// botoncin.removeEventListener('click', clickHandler); PARA REMOVER EL EVENT


var hipervinculo = document.querySelector('a');
hipervinculo.addEventListener('click', function (e) { //al parametro evento le ponemos e

    console.log(evento)
    e.preventDefault();  // de esta forma prevenimos que el hipervinculo ejecute su función por defecto

}); // por ej cuando queres que el hipervinculo te lleve mas abajo en tu pagina y no a pagina nueva que seria el comportamiento default


//Podemos capturar algunos eventos del mouse, entre los más conocidos se encuentran: click, dblclick, mouseover, mouseout y mousemove

var body = document.querySelector('body');
body.addEventListener('click', function(e) {
  console.log(e.clientX, e.clientY)
}); //COORDENADAS DEL CLICK
//MAPAS DE CALOR


// También podemos controlar los eventos que se disparan cuando se presionan las teclas por medio de los eventos keypress, keydown y keyup
// El objeto del evento tiene propiedades como charCode que nos retorna el número de tecla que fué presionado
// Con el método String.fromCharCode podemos saber que letra es
// Ejemplo:

var body = document.querySelector('body');
body.addEventListener('keypress', function(e) {
  console.log(e.charCode);
  if (e.charCode === 13){
      console.log("apretaste ENTER")
  }
  console.log(String.fromCharCode(e.charCode)); //esto te dice que numero es la letra que tocaste
});
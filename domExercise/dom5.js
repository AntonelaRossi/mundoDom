

//Seleccionar el primer hipervinculo
//Si el elemento tiene el atributo class entonces
//Agregar al elemento la clase azul
//Si no
//Agregar al elemento la clase rojo

var primerH = document.querySelector("a");

if (primerH.attributes) {
    primerH.classList.add("azul")
  } else {
    primerH.classList.add("rojo")
  }
// Agregar la etiqueta script
// Seleccionar el elemento ul
// Mostrar en la consola los elemento hijos del elemento ul
// Seleccionar el 2 elemento hijo y guardarlo en una variable
// agregar la clase verde
// Seleccionar el 4 elemento hijo y guardarlo en una variable
// agregar la clase rojo
// Utilizar el hijo 2 o 4 para mostrar en consola quien es su elemento padre
// Utilizando uno de los hijos obtener una referencia al elemento padre
//  y agregarle la clase naranja

var elDivPadre = document.querySelector("ul");
var losLi = elDivPadre.children

console.log(losLi)

var nuevaVar = losLi[1];
var nuevoVar = losLi[3];

// nuevaVar.classList.add("verde")
// nuevoVar.classList.add("rojo")

// console.log(nuevaVar.parentElement)

var elemento = document.querySelector("li");

elemento.style.color = "red";
elemento.style.fontWeight = "bold";
elemento.style.border = "3px solid green"

nuevaVar.parentElement.classList.add("naranja")




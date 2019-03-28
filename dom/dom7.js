//Agregar la etiqueta script
//Seleccionar el elemento ul
//Mostrar en la consola los elemento hijos del elemento ul
//Seleccionar el 2 elemento hijo y guardarlo en una variable
//agregar la clase verde
//Seleccionar el 4 elemento hijo y guardarlo en una variable
//agregar la clase rojo
//Utilizar el hijo 2 o 4 para mostrar en consola quien es su elemento padre
//Utilizando uno de los hijos obtener una referencia al elemento padre y agregarle la clase naranja


var laUl = document.querySelector("ul");
var losHijosDe = laUl.children

console.log(losHijosDe);

var segundo = losHijosDe[1];

segundo.classList.add("verde");

var cuarto = losHijosDe[3];

cuarto.classList.add("rojo")

segundo.parentElement.classList.add("naranja")




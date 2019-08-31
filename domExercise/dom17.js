// Agregar la etiqueta script
// Seleccionar el elemento ul
// Seleccionar cada uno de los elementos y guardarlos en una variable
// Eliminar cada uno de los elementos utilizando el método removeChild

var laUl = document.querySelector("ul")

var losLi = document.querySelectorAll("li");

var primero = losLi.item(0);
var segundo = losLi.item(1);
var tercer = losLi.item(2);
var cuarta = losLi.item(3);
var quinta = losLi.item(4);
var sexta = losLi.item(5);
var septima = losLi.item(6)
    
console.log(cuarta)

laUl.removeChild(septima);
console.log(laUl)

laUl.removeChild(sexta);
laUl.removeChild(quinta);
laUl.removeChild(cuarta);
laUl.removeChild(tercer);
laUl.removeChild(segundo);
laUl.removeChild(primero);




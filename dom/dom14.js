//Agregar la etiqueta script
//Seleccionar el elemento body
//Crear un array con 10 nombres
//Crear un elemento ul
//Recorrer el array nombres y por cada uno crear un elemento li y asignar el texto correspondiente
//Ir insertando cada elemento li dentro de la lista ul
//Insertar el elemento ul dentro del body


var elBody = document.querySelector("body");
var numeros = [];
var crecer = 0;

for (let i = 0; i < 100; i++) {
    crecer ++
    numeros.push(crecer)
}

console.log(numeros);

var laUl = document.createElement("ul");

for (let i = 0; i < numeros.length; i++) {
    var cadaLi = document.createElement("li");
    cadaLi.textContent = "Item " + numeros[ i];
    console.log(cadaLi);
    laUl.appendChild(cadaLi);
    
}

elBody.appendChild(laUl)

if (cadaLi%2 ===0) {
    cadaLi.style.color = "verde";
} else {
    cadaLi.style.color = "naranja"
}

//Agregar la etiqueta script
//Seleccionar el elemento body
//Crear un array con números del 1 al 100
//Crear un elemento ul
//Recorrer el array de números y por cada uno crear un elemento li y asignar el texto 'Item ' + numero
//Si el número es par entonces
//Agregar al elemento li el estilo color: #ddd
//Sino
//Agregar al elemento li el estilo color: #eee
//Ir insertando cada elemento li dentro de la lista ul
//Insertar el elemento ul dentro del body

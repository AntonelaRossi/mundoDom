// Agregar la etiqueta script
// Seleccionar el elemento body
// Crear un array con 10 nombres
// Crear un elemento ul
// Recorrer el array nombres y por cada uno crear 
// un elemento li y asignar el texto correspondiente
// Ir insertando cada elemento li dentro de la lista ul
// Insertar el elemento ul dentro del body


var elBody = document.querySelector("body")
var array = ["yam","maqui","sofi","toti","rossi","grace","ada","sheryl","hedy"];
var laUl = document.createElement("ul") 

for (let i = 0; i < array.length; i++) {
    var nuevoElemento = document.createElement("li")
    nuevoElemento.textContent = array[i]
    laUl.appendChild(nuevoElemento)
    
}

console.log(laUl)
elBody.appendChild(laUl)
// var nuevoElemento = document.createElement("p"); //creo el elemento
// nuevoElemento.textContent = "Hola soy un parrafo"; // le pongo contenido
// var div = document.querySelector("div") //hay que decirle DONDE lo voy a meter
// div.appendChild(nuevoElemento) // lo agrego
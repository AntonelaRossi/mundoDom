//Agregar la etiqueta script
//Seleccionar el elemento body
//Crear un array con 10 nombres
//Crear un elemento ul
//Recorrer el array nombres y por cada uno crear un elemento li y asignar el texto correspondiente
//Ir insertando cada elemento li dentro de la lista ul
//Insertar el elemento ul dentro del body


var elBody = document.querySelector("body");

var array =  ["yam", "sofi", "toti", "maqui", "lou", "grace", "mica", "hedy", "sheryl", "ada"];

var laUl = document.createElement("ul");



for (let i = 0; i < array.length; i++) {
    var cadaLi = document.createElement("li");
    //console.log(cadaLi)
    cadaLi.textContent = array[i];
    laUl.appendChild(cadaLi)

}
console.log(laUl)
elBody.appendChild(laUl)



//Agregar la etiqueta script
//Seleccionar el elemento h1
//Seleccionar el elemento div
//Si alguno de los dos elementos tiene atributos entonces
//Agregar la clase tachado
//Sino
//Agregar la clase negrita


var elHache1 = document.getElementById("principal");
var elDiv = document.querySelector("div")

if (elHache1.attributes || elDiv.attributes) {
    elHache1.classList.add("tachado")
    elDiv.classList.add("tachado")
} else {
    elHache1.classList.add("negrita")
    elDiv.classList.add("negrita")
}


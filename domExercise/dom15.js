// Agregar la etiqueta script
// Seleccionar el elemento body
// Crear un elemento ul
// Repetir mientras el usuario no ingrese la palabra 'exit':
// Mostrar al usuario un prompt con el siguiente mensaje: 'Ingrese un nombre'
// Si el usuario no ingreso 'exit' entonces:
// Creamos un elemento de lista li y le asignamos el valor que ingresa el usuario
// Si el número de item es par entonces le asignamos un color #ddd
// Si el número de item es inpar entonces le asignamos un color #eee
// Insertamos el elemento li dentro de la lista ul
// Al finalizar insertamos la lista ul en el elemento body

var elBody = document.querySelector("body");

var laUl = document.createElement("ul");
elBody.appendChild(laUl);


while (elPrompt !== "exit") {
    var elPrompt = prompt("Ingrese un nombre");

    var elLi = document.createElement("li");
    elLi.textContent = elPrompt;
    laUl.appendChild(elLi);
    
}

// console.log(laUl.children)





    



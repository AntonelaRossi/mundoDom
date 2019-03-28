//Agregar la etiqueta script
//Seleccionar el elemento body
//Crear un elemento título h1
//Agregarle al h1 el texto 'Vestibulum suscipit nulla quis orci'
//Crear un elemento párrafo
//Agregarle al p el texto 'Donec venenatis vulputate lorem. Maecenas vestibulum mollis diam.'
//Insertar el elemento título dentro del elemento body
//Insertar el elemento párrado dentro del elemento body

var elBody = document.querySelector("body");

var unHache = document.createElement("h1");
unHache.textContent = "Vestibulum suscipit nulla quis orci";

var parrafo = document.createElement("p");
parrafo.textContent = "Donec venenatis vulputate lorem. Maecenas vestibulum mollis diam.";


elBody.appendChild(unHache);
elBody.appendChild(parrafo);



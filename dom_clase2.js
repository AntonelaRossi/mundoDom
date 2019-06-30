// var elDivPadre = document.querySelector("div");
// var elDivPadre = document.querySelectorAll("p")
// var parrafos = elDivPadre.children;
// parrafos[1].previousElementSibling
// parrafos[1].nextElementSibling

// console.log(parrafos);
// console.log(parrafos[0]);
// console.log(parrafos[0].parentElement)
// console.log(parrafos[1].previousElementSibling)
// console.log(parrafos[1].nextElementSibling)



// var parrafo = document.querySelector("p")
// parrafo.innerText

// console.log(parrafo.innerText)

// parrafo.innerText = "Asi cambiamos el texto"

// console.log(parrafo.innerText)
// parrafo.innerHTML = "<ul>asi tambien guacho</ul>"
// console.log(parrafo.innerHTML)

// parrafo.textContent = "cambio una vezz mas"
// console.log(parrafo.textContent)

var parrafos = document.querySelectorAll("p")


for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "mother fucker";
}

// console.log(parrafos)

var elemento = document.querySelector("p");

elemento.style.color = "red";
elemento.style.fontWeight = "bold";



// CRUD
// Create
// REad
// Update
// Delete

var nuevoElemento = document.createElement("p"); //creo el elemento
nuevoElemento.textContent = "Hola soy un parrafo"; // le pongo contenido
var div = document.querySelector("div") //hay que decirle DONDE lo voy a meter
div.appendChild(nuevoElemento) // lo agrego


var parrafoX = document.createElement("p");
var prompt = prompt("Deja tu comentarios");
parrafoX.textContent = prompt;
var div = document.querySelector("div");
div.appendChild(parrafoX);
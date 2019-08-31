var productos = [
    { nombre: "T-rex", color: "verde", tipo: "carnivoro", img: "./trex.jpg" },
    { nombre: "Stegosaurus", color: "negro", tipo: "herbivoro", img: "./stegosaurus.jpg" },
    { nombre: "Velociraptor", color: "azul", tipo: "carnivoro", img: "./velocirraptor.jpg" },
    { nombre: "Triceraptor", color: "azul", tipo: "herbivoro", img: "./triceraptor.jpg" }

]


// var divInput = document.querySelector("div");
// divInput.classList.add("divInput");



var lista = document.getElementById("lista-de-productos");

for (let i = 0; i < productos.length; i++) {
    var elDiv = document.createElement("div");
    elDiv.classList.add("producto");

    var nombreDino = document.createElement("p");
    nombreDino.classList.add("nombre");
    nombreDino.textContent = productos[i].nombre;

    var colorDino = document.createElement("p");
    colorDino.classList.add("color");
    colorDino.textContent = productos[i].color;

    var tipoDino = document.createElement("p");
    tipoDino.classList.add("tipo");
    tipoDino.textContent = productos[i].tipo;

    var imagenDino = document.createElement("img");
    imagenDino.classList.add("imagenes")
    imagenDino.setAttribute("src", productos[i].img);

    elDiv.appendChild(nombreDino);
    elDiv.appendChild(colorDino);
    elDiv.appendChild(tipoDino);
    elDiv.appendChild(imagenDino);

    lista.appendChild(elDiv)

}

console.log(lista)


var botonFiltro = document.querySelector("button")

botonFiltro.onclick = function (e) {
    e.preventDefault();

    

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    var elInput = document.querySelector("input");
    // console.log(elInput.value)

    for (let i = 0; i < productos.length; i++) {

        console.log(productos[i].nombre)

        if (elInput.value === productos[i].nombre) {
            
            var nombreDino = document.createElement("p");
            nombreDino.classList.add("nombre");
            nombreDino.textContent = productos[i].nombre;

            var objetoDino = document.createElement("img")
            objetoDino.setAttribute("src", productos[i].img);
            objetoDino.classList.add("imagenes")
            lista.appendChild(nombreDino)
            lista.appendChild(objetoDino)
        }

        if (elInput.value === productos[i].color) {
            
            var nombreDino = document.createElement("p");
            nombreDino.classList.add("nombre");
            nombreDino.textContent = productos[i].nombre;

            var objetoDino = document.createElement("img")
            objetoDino.setAttribute("src", productos[i].img);
            objetoDino.classList.add("imagenes")
            lista.appendChild(nombreDino)
            lista.appendChild(objetoDino)
        }

        if (elInput.value === productos[i].tipo) {
            
            var nombreDino = document.createElement("p");
            nombreDino.classList.add("nombre");
            nombreDino.textContent = productos[i].nombre;

            var objetoDino = document.createElement("img")
            objetoDino.setAttribute("src", productos[i].img);
            objetoDino.classList.add("imagenes")
            lista.appendChild(nombreDino)
            lista.appendChild(objetoDino)
        }


    }


}


// TOCA EL PADRE
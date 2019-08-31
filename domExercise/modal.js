var botonAbrir = document.getElementById("botonModal");
var agarrarModal = document.getElementById("granDiv");
var botonCerrar = document.getElementById("cerrarModal");
var laCruz = document.getElementById("cruz");

botonAbrir.onclick = function () {
    agarrarModal.classList.remove("displayNone")
    botonAbrir.classList.add("displayNone")
}

function cerrar () {
    agarrarModal.classList.add("displayNone")
    botonAbrir.classList.remove("displayNone")
}

botonCerrar.onclick = cerrar
laCruz.onclick = cerrar






var comentario = document.querySelector("div")
console.log(comentario)

comentario.classList.add("rojo")


var click = 0
var likes = 0
function rellenarCorazon() {
    var iconos = document.querySelector("i")
    iconos.classList.toggle("fas")
    click++;
    if (click %2 === 0){
    likes++;
    console.log(likes)
    var numeroDeLikes = document.getElementById("likes")
    console.log(numeroDeLikes.innerHTML = likes)
    }
}


// iconos.classList.toggle("far")

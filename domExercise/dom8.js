//Seleccionar el primer elemento li
//Agregar al elemento li seleccionado la clase naranja
//Seleccionar el próximo elemento sibling y agregar la clase naranja
//Repetir la acción anterior hasta que todos los elementos li sean naranja
//Tener en cuenta que cuando no quedan más elementos nextElementSibling retorna null

var elementosLi = document.querySelectorAll("li");

for (let i = 0; i < elementosLi.length - 1; i++) {
    elementosLi[0].classList.add("naranja");
    elementosLi[i].nextElementSibling.classList.add("naranja")

}



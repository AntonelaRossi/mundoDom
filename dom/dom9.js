

//Seleccionar el elemento h1
//Obtener el contenido del elemento h1 utilizando innerText y guardarlo en una variable
//Seleccionar el elemento p
//Obtener el contenido del elemento p utilizando textContent y guardarlo en una variable
//Establecer el contenido del elemento h1 con el texto que tenía el elemento p
//Establecer el contenido del elemento p con el texto que tenía el elemento h1
//Al ejecutar este código deberían quedar intercambiado los contenidos de los elementos


var elHache1 = document.querySelector("h1");

console.log(elHache1.innerText);

var elPe = document.querySelector("p");


var elContenidoHache = elHache1.textContent;
var elContenidoPe = elPe.textContent;

console.log(elContenidoHache)
console.log(elContenidoPe);






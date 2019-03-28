
//Seleccionar el elemento ul
//Asignar el siguiente contenido utilizando innerHTML
//'<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>'
//Mostrar en consola los hijos del elemento ul utilizando la propiedad innerHTML
//Mostrar en consola los hijos del elemento ul utilizando la propiedad children


var laUl = document.querySelector("ul");

laUl.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>";

console.log(laUl)
console.log(laUl.children)


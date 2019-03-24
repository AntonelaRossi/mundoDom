var mensaje = prompt( "Ingrese un color (verde, azul, rojo)","")

var cambiarColor = document.querySelector('a');

cambiarColor.classList.add(mensaje);



// Agregar la etiqueta script
// Pedirle al usuario que seleccione un color utilizando el siguiente mensaje:
// Ingrese un color (verde, azul, rojo)
// Seleccionar el primer hipervinculo
// Según el color seleccionado sea verde, azul o rojo:
// Agregar al primer hupervinculo seleccionado una clase con el nombre ingresado por el usuario
// Si el usuario ingresa un valor que no es alguna de las opciones
// No agregar la clase
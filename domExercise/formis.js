// Hacer un formulario de invitación a un evento. 

// Validarlo en el submit 

// Nombre —> no puede estar vacío
// Edad ——> debe ser entre 18 y 120 
// Seleccionar estado civil —> no puede estar vacío 
// Seleccionar nacionalidad (select, desplegado de opciones) —> no puede estar vacío 


// Una vez enviados los datos, 
// en lugar de enviarse a otra web
// Se imprimen abajo, como una 
// lista de confirmación de asistencia


// Invitado {indice} 
// Nombre: {nombre}
// Edad: {edad}
// Estado civil {estado civil}
// Nacionalidad {nacionalidad}
// Boton "Eliminar invitado"
//  (Si le hacemos clic, se borra todo)

var formulario = document.querySelector("form")

formulario.onsubmit = function (e) {

  // evitamos que el form se mande 
  e.preventDefault();

  // selecciono los elementos del formulario 
  var nombre_form = formulario.elements[0]
  var edad_form = formulario.elements[1]
  var soltero_form = formulario.elements[2]
  var casado_form = formulario.elements[3]
  var nacionalidad_form = formulario.elements[4]

  // asigno el valor de nombre y edad a variables 
  var nombre = nombre_form.value
  var edad = edad_form.value


  // Creamos una variable "estado" y le asignamos el valor
  // del checkbox que este seleccionado. 
  // Ejemplo, si "soltero" esta seleccionado, "estado" va a ser "soltero"
  var estado = ''
  if (soltero_form.checked) {
    estado = soltero_form.value
  }
  else if (casado_form.checked) {
    estado = casado_form.value
  }
  else {
    estado = 'vacio'
  }


  // seleccionamos el select
  // Sacamos el indice de la opcion seleccionada
  // Usando ese indice, buscamos la opcion elegida
  // Asignamos la opcion elegida a la variable "nacionalidad"


  var i = nacionalidad_form.selectedIndex
  var nacionalidad = nacionalidad_form.options[i].value

  // console.log para chequear que nuestros datos esten bien 

  // console.log(nombre, edad)
  // console.log(estado)
  // console.log(nacionalidad)

  //   // Ahora validamos, marcando como error en el form: 

  // Nombre no tiene que estar vacio
  if (nombre.length === 0) {
    nombre_form.classList.add("error")
  }

  // version alternativa (mas linda)
  // if (!nombre) {
  //   nombre_form.classList.add("error")
  // }


  // edad debe ser mayor a 18 y menor a 120
  if (edad < 18 || edad > 120) {
    edad_form.classList.add("error")
  }

  if (estado === 'vacio') {
    soltero_form.nextElementSibling.classList.add("error")
    casado_form.nextElementSibling.classList.add("error")
  }





  // // nacionalidades se "autovalidan", 
  // // porque ya sabemos que estan seleccionadas. 


  if (nombre.length > 0
    && (edad > 18
      && edad < 120)
    && estado !== 'vacio') {
    agregarInvitado(nombre, edad, estado, nacionalidad)
  }
}


//cuestiones de LISTA DE INVITADES

function agregarInvitado(nombre, edad, estado, nacionalidad) {

  var lista = document.getElementById("lista-de-invitados")
  var divLista = document.createElement("div");
  var botonEliminar = document.createElement("button");

  var inputNombre = document.createElement("input");
  divLista.appendChild(inputNombre);
  inputNombre.value = nombre;
  inputNombre.classList.add("inputStyle");

  var inputEdad = document.createElement("input");
  divLista.appendChild(inputEdad);
  inputEdad.value = edad;
  inputEdad.classList.add("inputStyle");

  var inputEstado = document.createElement("input");
  divLista.appendChild(inputEstado);
  inputEstado.value = estado;
  inputEstado.classList.add("inputStyle");

  var inputNacion = document.createElement("input");
  divLista.appendChild(inputNacion);
  inputNacion.value = nacionalidad;
  inputNacion.classList.add("inputStyle");



  
  lista.appendChild(divLista);

  botonEliminar.textContent = "Eliminar invitadx";
  divLista.appendChild(botonEliminar);
  divLista.classList.add("divLista");

  console.log(nombre);
  console.log(lista);

  botonEliminar.onclick = function () {
    divLista.classList.add("displayNone")
  }

  


} // cierra funcion agregarInvitado


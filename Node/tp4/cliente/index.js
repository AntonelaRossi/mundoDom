let employee = [];

// // fetch('http://localhost:4000/api/employees')
// // .then(res => res.json())
// // .then(datos => {
// //   console.log(datos);
// // })

// fetch("http://localhost:4000/api/employees")
//     .then(function (res) {
//         return res.json();
//     })
//     //employees no tiene que ver con la variable con la del servidor, sino es el nombre que le puse al parametro
//     .then(function (employees) {
//         employee = employees;
//         return employees.map(function (t) {
//             //texto y completada son los nombres de las propiedades de mi objeto
//             return `<li id="${t.id}">
//             <span class="titulo"> ${t.texto} </span> 
//             <span class="estado">${t.completada}</span>
//             <button onclick="eliminar(this)" class"remove">eliminar</button>
        
//             <button onclick="completar(${t.id}, this)"><img src="data:image/png;base64,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"></button>
//             <button onclick="editar(${t.id}, this)"><img src="data:image/png;base64,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"></button>
//             </li>`
//             //agregamos un span al titulo para poder editarlo
//         });
//     })
//     .then(function (lis) {
//         document.querySelector("ul").innerHTML = lis.join("");
//         document.querySelectorAll("li button.remove").forEach(function (button) {
//             button.onclick = eliminar;
//         })
//     })

// function editar(id, button) {

//     employee.forEach(tarea => {
//         if (tarea.id === id) {
//             document.querySelector("#nueva-tarea").value = tarea.texto;

//             document.querySelector("#nueva-tarea-btn").style.display = "none";

//             const botonEditar = document.querySelector("#editar-tarea-btn");

//             botonEditar.style.display = "inline";
//             botonEditar.onclick = function () {
//                 const texto = document.querySelector("#nueva-tarea").value;

//                 //{ texto: "...", completada: false}

//                 const todo = {
//                     texto: texto,
//                     completada: false
//                 };

//                 fetch(`http://localhost:4000/api/employees/${id}`, {
//                     method: "put",
//                     body: JSON.stringify(todo),
//                     headers: {
//                         "Content-Type": "application/json"
//                     } //le tengo que decir al servidor que lo que le mando es un JSOn 
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         // button.parentNode.innerHTML = todo.texto; //Es EL LI a editar el boton es hijo // tratar de evitar parentNode! por si dps cmambia la estructura 
//                         button.parentNode.querySelector("span.titulo").innerHTML = todo.texto;


//                     })
//             }


//         }
//     })
// }

// function completar(id, button) {
//     console.log(id, button);

//     fetch(`http://localhost:4000/api/employees/${id}/complete`, {
//         //porque es algo que existe y lo quiero editar
//         method: "put"
//     })
//         .then(res => res.json())
//         .then(todo => {
//             const li = document
//                 .getElementById(`${id}`)

//             li
//                 .querySelector(`span.estado`)
//                 .innerHTML = todo.completada;
//         })

// }

// //e es el parametro evento que me da a triggerear lo que tiene que pasar
// function eliminar(e) {
//     //el li es el parent direccto de mi evento
//     //con esto obtengo en que tarea especificamente hicimos click
//     const id = e.parentNode.id;

//     //el fetch tiene un segundo parametro que es un objeto que le puedo decir que metodo puedo ejecutar
//     //get es el default y por eso antes no lo pusimos
//     fetch(`http://localhost:4000/api/employees/${id}`, {
//         method: "delete"
//     }).then(res => {
//         //aca no me interesa interpretar nada, si salio todo bien, lo elimino. Una vez que el servidor contesto, elimino
//         //ese li
//         console.log("hola")
//         document.getElementById(id).remove();
//     })
// }



// document.querySelector("#nueva-tarea-btn").onclick = function () {
//     const texto = document.querySelector("#nueva-tarea").value;


//     //{ texto: "...", completada: false}

//     const todo = {
//         texto: texto,
//         completada: false
//     }

//     //va a tener la direccion a la que vamos a pedir algo, en un principio es la misma
//     fetch(`http://localhost:4000/api/employees`, {
//         method: "POST",
//         //usamos la propiedad data para decirle que informacion guardar.
//         //le pasamos al servidor/ a la API, cualquier tipo de contenido
//         //hay que usar el JSON.stringify para que convertir un objeto en un string para que JS lo pueda volver a convertir
//         body: JSON.stringify(todo),
//         //si pusieramos todo.toString() --> me imprime [object Object]
//         //hay que decirle que le estamos mandando un JSON y por eso ponemos lo del header
//         headers: {
//             "Content-Type": "application/json"
//         }

//     })


//         //antes teniamos (res => res.json()) y lo cambiamos por esto...

//         //esta linea dice, que lo que me devuelve el servidor, lo intepreto como JSON
//         .then(res => {
//             //si el servidor no me respondio con un 200
//             if (!res.ok) {
//                 alert("salio todo mal");
//                 //throw "se fue todo al carajo"
//                 //throw {message: "se fue todo al carajo"}
//                 throw {
//                     status: res.status,
//                     message: "se fue todo al carajo por tu pedido mal armado"
//                 }
//                 //throw new Error("Se fue todo al carajo!")
//             } else {
//                 return res.json()
//             }
//         })
//         .then(todo => {
//             const nuevaTarea = `<li id="${todo.id}">
//     ${texto} <span>${todo.completada}</span>
//         <button>eliminar</button>
//         </li>`;

//             document.querySelector("ul").innerHTML += nuevaTarea;

//         })
//         .catch(function (err) {
//             //me va a mostrar en consola "se fue todo al carajo"
//             //el mensajito ya no esta suelto por ahi sino que yo lo estoy tratando
//             //console.log(err);
//             const cartel = document.querySelector(".notificacion.error")
//             cartel.innerHTML = `${err.status}: ${err.message}`;
//             cartel.style.display = "block";
//         })


// }
fetch('http://localhost:4000/api/todos')
.then(res => res.json())
.then(datos => {
  console.log(datos);
})

fetch(`http://localhost:4000/api/todos`)
.then(function (res){
    return res.json();
})
//todos no tiene que ver con la variable con la del servidor, sino es el nombre que le puse al parametro
.then(function (todos){
    return todos.map(function (t){
        //texto y completada son los nombres de las propiedades de mi objeto
        return `<li id="${t.id}">
        ${t.texto} <span>${t.completada}</span>
        <button>eliminar</button>
        </li>`
    });
})
.then(function (lis){
    document.querySelector("ul").innerHTML = lis.join("");
    document.querySelectorAll("button").forEach(function(button) {
        button.onclick = eliminar;
    })
})

//e es el parametro evento que me da a triggerear lo que tiene que pasar
function eliminar(e) {
    //el li es el parent directo de mi evento
    //con esto obtengo en que tarea especificamente hicimos click
    const id = e.target.parentNode.id;

    //el fetch tiene un segundo parametro que es un objeto que le puedo decir que metodo puedo ejecutar
    //get es el default y por eso antes no lo pusimos
    fetch(`http://localhost:4000/api/todos/${id}`, {
        method: "delete"
    }).then(res => {
        document.querySelector(`li#${id}`).remove();
    });
}

document.querySelector("#nueva-tarea-btn").onclick = function() {
    const texto = document.querySelector("#nueva-tarea").value;

    // {texto: "...", completado: false}

    const todo =  {
        texto: texto,
        completada: false,
    }

    fetch("http://localhost:4000/api/todos", {
        method:"post",
        body: JSON.stringify(todo), //GUATTTT 
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(res => res.json())
    .then(todo => {

        const nuevaTarea = `<li id="${todo.id}">
        ${texto} <span>${todo.completada}</span>
        <button>eliminar</button>
        </li>`;
        document.querySelector("ul").innerHTML += nuevaTarea;

    })

   
}
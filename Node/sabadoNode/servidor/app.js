 const express = require("express");
const cors = require("cors");

//la creo aca para que sea global
const tareas = [
    {id: 1, texto:"contabilizar asientos", completada: false},
    {id: 2, texto:"controlar AP", completada: true},
    {id: 3, texto:"bajar mails no leidos", completada: false},
]

let ID = 3;
//crear el servidor de express
const app = express();

//configuro la validacion --> esta abierta para todo el mundo porque no especifique nada
app.use(cors());

app.get("/api/todos", function (req, res) {
    res.send(tareas);
    //res.json(tareas);
});

//en el ejemplo de peliculas, el numero del final cambiaba con cada peli, porque era el ID que tenian
//api.tmdb.com/3/movies/321

//para borrar las tareas
app.delete("/api/todos/:id", function (req, res) {
    console.log(req.params.id);

    //OPCION 1: con splice y sin la constante id
    // for (let i =0; i < tareas.length; i++) {

    //     //puso == y no === porque todo lo que viaja en parametro en una URL es un string
    //     // al hacerlo asi, se omite el parseInt, aunque el parseInt da un punto mas de seguridad
    //     if (tareas[i].id == req.params.id) {
    //         // lo elimino utilizando splice que es un metodo para eliminar performante
    //         tareas.splice(i, 1);
    //     }
    // }

    //OPCION 2: con el parseInt

    const id = parseInt(req.params.id)

     for (let i =0; i < tareas.length; i++) {

        if (tareas[i].id === id) {
            // lo elimino utilizando splice que es un metodo para eliminar performante
            tareas.splice(i, 1);
        }
    }

    //OPCION 3: con filter --> filtrame todos los todos cuyo id sea distinto al que vino por parametro
    //tareas = tareas.filter(tarea => tarea.id !== id)

    //le digo al cliente, que salio todo bien.
    res.json(tareas)

});

//si lo que me llega si bien es un string, lo transformo en un objeto.
app.use(express.json());

//suele usar la misma direccion que se usa en el GET
app.post("/api/todos", function (req, res) {
    //paso 1: obtener los datos que me llegaron del cliente (de la nueva tarea)
    //body va a tener lo que yo le paso con la propiedad body del POST de la tarea nueva
    const nuevoTodo = req.body;
    //{texto: "...", completada" false}

    //nuevoTodo es el objeto que me llega de la web
    //que tiene estas caracteristicas {texto: "...", completada" false}
    //validar que el texto no este vacio, que no sean espacios y/o no sean solo numeros
    //validar que tenga las propiedades texto y completada
    //no dar de alta objetos que tengan propiedades extras

    //si no existe la propiedad texto de nuevoTodo o la longitud es 0
    //trim saca los espacios en blanco al principio y al final del texto
    //" hola ".trim() -> //"hola"
    if (!nuevoTodo.texto || nuevoTodo.texto.trim().length === 0) {
        //si quiero cortar la ejecucion porque no esta bien uso un return ademas de un res par avisarle al usuario
        return res.status(400).send("salió todo mal");
    }
    
    //ponemos ++ID para que primero incremente y despues asigne
    //antes poniamos ID++ entonces primero asignaba y despues incrementaba y me dejaba dos tareas 3
    nuevoTodo.id = ++ID;
    //paso 2: pushear esos datos al array de tareas
    tareas.push(nuevoTodo);
    //siempre tenemos que contestar algo para que el cliente sepa que salio ok
    //tambien controlamos que la sesion no se venza por timeout
    //que es lo mas comun que se contesta con un POST? el objeto propiamente dicho
    res.json(nuevoTodo);
});

app.put("/api/todos/:todoId/complete", function(req, res){
    const id = req.params.todoId;

    tareas.forEach(function (todo) {
        if(id == todo.id) {
            todo.completada = true;
            return res.json(todo);
        }
    })
})

//para la funcion EDITAR

//pongo el id como parametro para poder saber que tarea quiero editar
app.put("/api/todos/:id", function (req, res){
    //para obtener el id de la tarea a editar
    const todoId = req.params.id;
    const todoEditado = req.body; //pueden no llegar todas las propiedades del objeto

    //incluyo la misma validacion anterior
    if (!todoEditado.texto || todoEditado.texto.trim().length === 0) {
        return res.status(400).send("salió todo mal");
    }
    
   
    tareas.forEach(function (todo) {
        if(todoId == todo.id) {
           todo.texto = todoEditado.texto;
           todo.completada = todoEditado.completada;
           //una vez que editamos lo que queriamos editar, nos vamos y devolvemos el objeto editado
           return res.json(todo)
        }
    })
})

app.listen(4000);
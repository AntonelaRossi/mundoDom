const express = require("express");
const cors = require("cors");

//la creo aca para que sea global
const tareas = [
    {id: 1, texto:"contabilizar asientos", completada: false},
    {id: 2, texto:"controlar AP", completada: true},
    {id: 3, texto:"bajar mails no leidos", completada: false},
];

let ID = 3;

//crear el servidor de express
const app = express();

//configuro la validacion --> esta abierta para todo el mundo porque no especifique nada
app.use(cors());

//esto es para que express me interprete los objetos (los Jsons) no lo dejes como plain text, sino como datos utiles
app.use(express.json());


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


//para agregar cositas
app.post("/api/todos", function (req, res){
    //obtener los datos que me llegaron desde el cliente
    const nuevoTodo = req.body;
    //body es lo que dsd el cliente le  mandamos como contenido para guardar al servidor
    // {texto:"..", completada: false}
    nuevoTodo.id = ID++;

    //pushear esos datos al array
    tareas.push(nuevoTodo)

    res.json(nuevoTodo);


});


app.listen(4000);
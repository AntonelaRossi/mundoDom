const express = require("express")
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/employees", function (req, res) {
    res.send(employee);
});



app.delete("/api/employees/:id", function (req, res) {
    console.log(req.params.id);

    const id = parseInt(req.params.id)

     for (let i =0; i < employee.length; i++) {

        if (employee[i].id === id) {
            // lo elimino utilizando splice que es un metodo para eliminar performante
            employee.splice(i, 1);
        }
    }
    res.json(employee)
})


app.use(express.json());

//suele usar la misma direccion que se usa en el GET
app.post("/api/employees", function (req, res) {
    //paso 1: obtener los datos que me llegaron del cliente (de la nueva tarea)
    //body va a tener lo que yo le paso con la propiedad body del POST de la tarea nueva
    const newEmployee = req.body;
    //{texto: "...", completada" false}

    //newEmployee es el objeto que me llega de la web
    //que tiene estas caracteristicas {texto: "...", completada" false}
    //validar que el texto no este vacio, que no sean espacios y/o no sean solo numeros
    //validar que tenga las propiedades texto y completada
    //no dar de alta objetos que tengan propiedades extras

    //si no existe la propiedad texto de newEmployee o la longitud es 0
    //trim saca los espacios en blanco al principio y al final del texto
    //" hola ".trim() -> //"hola"
    if (!newEmployee.texto || newEmployee.texto.trim().length === 0) {
        //si quiero cortar la ejecucion porque no esta bien uso un return ademas de un res par avisarle al usuario
        return res.status(400).send("salió todo mal");
    }
    
    //ponemos ++ID para que primero incremente y despues asigne
    //antes poniamos ID++ entonces primero asignaba y despues incrementaba y me dejaba dos employee 3
    newEmployee.id = ++ID;
    //paso 2: pushear esos datos al array de employee
    employee.push(newEmployee);
    //siempre tenemos que contestar algo para que el cliente sepa que salio ok
    //tambien controlamos que la sesion no se venza por timeout
    //que es lo mas comun que se contesta con un POST? el objeto propiamente dicho
    res.json(newEmployee);
});

app.put("/api/employees/:todoId/complete", function(req, res){
    const id = req.params.todoId;

    employee.forEach(function (todo) {
        if(id == todo.id) {
            todo.completada = true;
            return res.json(todo);
        }
    })
})

//para la funcion EDITAR

//pongo el id como parametro para poder saber que tarea quiero editar
app.put("/api/employees/:id", function (req, res){
    //para obtener el id de la tarea a editar
    const todoId = req.params.id;
    const todoEditado = req.body; //pueden no llegar todas las propiedades del objeto

    //incluyo la misma validacion anterior
    if (!todoEditado.texto || todoEditado.texto.trim().length === 0) {
        return res.status(400).send("salió todo mal");
    }
    
   
    employee.forEach(function (todo) {
        if(todoId == todo.id) {
           todo.texto = todoEditado.texto;
           todo.completada = todoEditado.completada;
           //una vez que editamos lo que queriamos editar, nos vamos y devolvemos el objeto editado
           return res.json(todo)
        }
    })
})

app.listen(4000);
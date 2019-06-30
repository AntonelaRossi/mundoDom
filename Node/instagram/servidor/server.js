//servidor
// aplicacion que se ejecuta, quien se encarga de guardarme mis datos! 
// centraliza los datos, en vez de en una compu, en un servidor. El drive es un ejemplo de servidor.
// a la carpeta servidor: abris en terminal y le haces al comenzar npm init esto te crea los modulos que necesitas para abrirlo desde cualquier compu crea los pkg.JSON (son dos)
// dps creas este archivo server.js
// express paquete de datos y cors paquete de seguridad npm i express
// instalar cors npm i cors
// ahi haces correr express y cors (require)

const express = require("express")
const cors = require("cors");

//con esta llamada creamos el servidor
const app = express();

//configuras la validacion de seguridad (como esta vacia, vale todo)
app.use(cors());

//esto es para interpretar como json y no como plain.text
app.use(express.json());

//aca va el contenido de la "api" nueva "http://localhost:3000/api/post"
// aca guardamos los datos, es como una base de datos. Es un array de objetos
const post = [
    { id:1, texto: "valar Morgulis", img: "https://sm.ign.com/ign_es/screenshot/default/blob_67uz.jpg", likes: 0 },
];

let nextId = 2;

// esto es un end point (es la ruta)
// get es un metodo, es una funcion con dos parametros, la primera es la ruta, de donde me lo pedis
// el segundo parametro es la funcion Que es lo que tiene que hacer cuando alguien le pide 
// en este caso es send post
app.get("/api/posteos", function (req, res) {
    //puede ser res.send(post) pero con json es mas especificos
    res.json(post)
})


//aca creamos post nuevos y los guardamos! 
app.post("/api/posteos", function (req, res) {
    const newPost = req.body; //objeto que nos manda el cliente

    newPost.id = nextId++; // le agregamos la propiedad id CLAVE que se haga en el server y no en el cliente!

    post.unshift(newPost); // pone el nuevo objeto al principio por default del ultimo al primero

    res.json(newPost); // devuelvo el newPost guardado, le contesta al cliente actualizado

});


app.put("/api/posteos/:postId/likes", function (req, res) {
        
    const id = req.params.postId;

    for (let i = 0; i < post.length; i++) {
        if (post[i].id == id) {
            post[i].likes++;


            return res.json(post[i]);
        }
    }
})




// pongo a escuchar al servidor para que se ejecute siempre y le hagamos pedidos (el parametro es nuestro puerto)
app.listen(3000)
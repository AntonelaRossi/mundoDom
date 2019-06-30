// importamos express y cors
const express = require('express');
const cors = require('cors');
// creamos nuestro servidor
const app = express();
// usabamos cors
app.use( cors() );
// que nos interprete el json de un pedido, como un objeto y no un string
app.use( express.json() );

const router = require("./router")
//lo creamos en el archivo router

app.use("/", router);
//ejemplo es lo que dice en el navegador, cuando pide "ejemplo" te manda al archivo router

app.get("/", (req, res)=> {
    res.json(req.query); //crea el objeto en base de la busqueda del navegador
})

app.get("/", (req, res) => {
    const newBand= bands.map(e => {
        if (e.genre = req.query.genre) {
            return e
        }
    })
    res.json(newBand)
})

app.get("/", (req, res) => {
    console.log(req.params)
    console.log(req.query)

});

app.listen(3000);
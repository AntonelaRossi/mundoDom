const express = require("express")
//requerimos express

const routerZapatos = express.Router();
//accedemos al metodo router en express

routerZapatos.get("/",(req, res)=> {
    //contesto al cliente lo que quiera
    res.json("Hola, estan en la ruta zapatos");
})

routerZapatos.get("/10",(req, res)=> {
    //contesto al cliente lo que quiera
    res.json("Hola, estan en la ruta los re zapatos");
})


module.exports = router-zapatos;
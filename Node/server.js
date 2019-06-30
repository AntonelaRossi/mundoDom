// esta es la parte de atras, a quien le pedimos las cosas con el fetch, por ej

const http = require("http");
// http ya existe

const port = 3000;
//la direccion es la calle: local host la altura: 3000 (desde 1024 hasta 65000) es comun 3000 8080 9000


//funcion que se ejecutara respecto al pedido
const handle = (request, response) => { //request es la info del pedido. response es contestar a ese pedido
    console.log("pedidos ya");
    console.log(request.method); //GET POST etc
    console.log(request.url); // la direccion adonde aplicar el metodo

    if (request.url ==="/movies/popular") {
        response.writeHead(200, {  
            "Content-Type": "text/html"
    
        });
        // response.end("Hola Mundo, no esta trucado!"); // end es el fin de la devolucion al pedido
        response.end("<h1>pediste peliculas?!</h1>")
        
        
    } else {
        response.writeHead(200, {  
            "Content-Type": "text/html"
    
        });
        // response.end("Hola Mundo, no esta trucado!"); // end es el fin de la devolucion al pedido
        response.end("<h1>pedime algo especifico</h1>")
        

    }


    // response.writeHead(200, {  //200 es el ESTADO de http, 200 its good! 404 es Error! http status code
    //     // "Content-Type": "text/plain"  //tipo de dato con el que contesto, en este caso es texto (puede ser un JSON y abajo en response.end, le pego el array)

    //     "Content-Type": "text/html"

    // });
    // // response.end("Hola Mundo, no esta trucado!"); // end es el fin de la devolucion al pedido
    // response.end("<h1>Alo!</h1>")
    

};


const server = http.createServer(handle) //crea el servidor y ejecutara la funcion siempre

server.listen(port) //aca llamo el puerto para que se ponga a "escuchar" los pedidos
// estas ultimas dos lineas hacen que el programa este todo el tiempo andando





// //si quisiera llamar un JSON

// const handleDos = (req, res) => {
//     const apiKey = 1234567890;
//     const resultado = validarApiKey(apiKey);

//     if (resultado) {
//         const peliculas = obtenerPeliculas();
//         res.writeHead(200, {
//             "Content-Type": "application/json"
//         });
//         res.end(peliculas);
//     } else {
//         res.writeHead(401, {
//             "Content-Type": "text/plain"
//         });
//         res.end("va de vuelta la apikeyyyyy");
//     }
// }

// const server = http.createServer(handleDos) //crea el servidor y ejecutara la funcion siempre

// server.listen(port) //aca llamo el puerto para que se ponga a "escuchar" los pedidos
// // estas ultimas dos lineas hac





// SINGLE PAGE APLICATIONS SPA 
// es como el tp, todo desde dom apareciendo y eliminando cositas con javascript

//dps estan las paginas mas tradicionales que son muchos htmls y los vas llamando

//EXPRESS 
//npm node package manager
//entre todos los npm esta express




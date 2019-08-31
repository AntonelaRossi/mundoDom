// HTTP es el protocoloxxxx que te comunica (desde el navegador o consola) (el cliente) 
// con el servidor para que me de los datos (puede ser una pagina web, una imagen, css, objetos, un archvo, cualquier cosa)
// https (secure)

// HTTP GET 

// otros
// HTTP POST
// HTTP DELETE
// HTTP PUT 
// HTTP PATCH 

// request HTTP GET nos devuelve los JSONs de la API
// las APis de datos siempre devuelve JSONs?

// FETCH
// http://jsonplaceholder.typicode.com/todos

// JS es single thread o unitheread (solo puede hacer una cosa a la vez)

//.map se ejecuta de manera instantanea, en cambio buscar data en apis tarda, entonces:

const prom = fetch("http://jsonplaceholder.typicode.com/todos")

console.log(prom)
// te devuelve una PROMESA de que cuando lo necesites los datos estaran o al menos un msj que nos diga porque no los obtuve
// maneja las tareas asincronicas (?) o sea que puede tardar pero sucedera


// recibe como parametro una funcion
// la funcion se ejecuta cuando se cumple la promesa
// res: response

// prom.then( res => {
//     console.log(res);
//     return res.json(); // le pido que me devuelva el json
// } )

prom
    .then( res => res.json()) //si le saco las llaves el return sale solo
    //como me devuelve una nueva promesa le paso un nuevo .then()
    .then( data => { //data es el nombre de la funcion, conviene ponerle nombre de lo que me va a devolver
        
        console.log(data)

           // ACA ADENTRO dps de esto implementas el codigo para usar los datos

        const ul = document.querySelector("ul");

        ul.innerHTML = data
            .map(todo => `<li> ${todo.title} - ${todo.userId} </li>`) //recorremos y guardamos toda la data en <li>
            .join("") // para que me devuelve en strings separados y no un array
    
    })

 



    // ESTA ES LA DIRECCION DE LA API PARA EL TP, esta es una direccion con parametros
    // los parametros se inician con un ? se conocen como query params
    // apikey es el nombre de a variable y lo siguiente es el valor del parametro (en este caso es la clave que sacas de la web omdb)
    // se separan con &
    // t es otro parametro! en este caso t es el titulo o title (esa es la parte que llenas vooos!!!!!)

    // DOCUMENTACION DE LA API!


    // https://www.omdbapi.com/?apikey=2fb7569a&t= 




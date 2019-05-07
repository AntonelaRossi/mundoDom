// ECMAscript 6 
// scope = alcance 

// VAR
// global scope (mundo) 
// variables vivas en todo el codigo
// (podemos llamar las variables creadas dentro de estructuras pero no de funciones)

// function scope (pais)
// variables solo en elcodigo de una funcion

// LET y CONST
// block scope (ciudad)
// todo lo que va adentro de una llave
// estructuras de repeticion 

// LET
// si la creo adentro de una estructura no la puedo usar afuera. Pues block scope.

// CONST
// funciona como LET pero no puede ser reasignada

// USAR CONST POR DEFECTO, si de repente la queres pisar, la cambias a LeT


const persona = {
    nombre: Ada,
    edad: 33
};
console.log(persona)

persona.edad = 34;

console.log(persona)

// Las propiedades pueden variar pero la variable (CONST) NO, siempre sera un objeto, o por ej un array o un string (?)

// TEMPLATE LITERALS

// nueva forma de crear strings
//  permiten expresiones y soportan simple/multiple linea
//  se crean con comillas invertidas ``

const mensaje = `Hola guachin`;

const nombre = `Ada`;

const saludo = `Hola, ${nombre.toUpperCase()}!`

//APAAAAAAAAA

console.log(saludo)
//Hola, Ada!


const IVA = 0.21;
const precio = 19.99;

const total = `Precio final: ${precio + (precio * IVA)}`

console.log(total)


// 1. Utilizá template literals para obtener el output esperado a partir de las variables: "Ada es programadora."
const nombres = "Ada";
const profesion = "programadora";


console.log(`La profesión de ${nombres} es ${profesion}`) // completá el código acá

// 3. Utilizá template literals para actualizar y mejorar el siguiente código. Además, cambia var por let o const siguiendo los criterios vistos antes.

const personaje = 'Batman';
const identidad = 'Bruce Wayne';

const oracion = `La identidad secreta de ${personaje} es ${identidad.toUpperCase()}`



console.log( oracion );
// "La identidad secreta de Batman es BRUCE WAYNE."



// 4. Utilizá template literals para actualizar y mejorar el siguiente código. Además, cambia var por let o const siguiendo los criterios vistos antes.

var nombreUsuario = 'Grace';
var idUsuario = 2;
var espacioUsado = 10;
var espacioTotal = 11;
var url = 'https://drive.google.com/' + idUsuario + '/buy';
var email = '¡Hola, ' + nombreUsuario + '!\n' +
'Estás utilizando el ' + (espacioUsado / espacioTotal * 100) + '% de tu espacio.\n' +
'Solo te quedan ' + (espacioTotal - espacioUsado) +' GB.\n' +
'\n' +
'Podés comprar más espacio ingresando al a siguiente dirección: ' + url + '\n' +
'\n' +
'Saludos,\n' +
'Google';





// module.exports = 2;
//solo devuelve 1 dato
//esto le devuelve al que lo importa cositas

// console.log("hola mundo");
//esto no lo exporta, pero si lo ejecuta, por eso lo veo

// function saludar() {
//     console.log("hola Marti :)")
// }

// module.exports= saludar;

//con funcion anonima
// module.exports = function ( ){
//     console.log("besos a Fellini")
// }


//con objetos y funciones (3 formas de escribir funciones)
// module.exports = {
//     nombre: "Rossita",
//     edad:33,
//     //esta funcion no tiene que ser saludar: function, sino qe saludar( ...) ya entiende que es una funcion
//     saludar (nombre) {
//         console.log(`tengo hambre ${nombre}`);
//     },
//     despedir: function() {
//         console.log("adios mundo cruel");
//     },
//     //o direcutamente
//     lalala: () => {
//         console.log("mother fucker")
//     }
// }
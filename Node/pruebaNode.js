// modulos de archivo

//npm modulos ya creados por otres
//sirve para instalar cositas?
//comunidad dnd se suben modulos, como por ejemplo el de instalar sass y los importas y los usas 
// console.log("hola mundo desde pruebaNode.js")


// const elNumero = require("./modulo.js")
// // este require le pide al archivo
// console.log(elNumero)


// const saludar = require("./modulo.js")
// saludar();


//para funcion anominma
// const welcome = require("./modulo.js")

// welcome()

// const persona = require("./modulo.js")

// console.log(persona);
// console.log(`hola ${persona.nombre}`)


// //objeto con funciones varias, adentro de un objeto!

// const loQueExportaElModulo = require("./modulo.js");

// loQueExportaElModulo.saludar("Grace");
// loQueExportaElModulo.despedir();
// loQueExportaElModulo.lalala()

//esto seria hardcodeado
// const calc = require("./calculadora.js")

// console.log( calc.sumar(2,3));//5
// console.log( calc.restar(2,3));//-1
// console.log( calc.dividir(4,2));//2
// console.log( calc.multiplicar(2,3));//6
// console.log( calc.dividir(4,0));//no se puede dividir por cero

//para hacerlo en consola
const calc = require("./calculadora.js")
const terminal = process.argv
const numero1 = parseInt (process.argv[3]);
const numero2 = parseInt (process.argv[4]);

switch (process.argv[2]) {
    case "sumar":
        console.log(calc.sumar(numero1,numero2))
        break;
    case "restar":
            console.log(calc.restar(numero1,numero2))
        break;
    case "dividir":
            console.log(calc.dividir(numero1,numero2))
        break;
    case "multiplicar":
        console.log(calc.multiplicar(numero1,numero2))
        break;
    default:
        break;
}



console.log(terminal);




calc.sumar(numero1, numero2)





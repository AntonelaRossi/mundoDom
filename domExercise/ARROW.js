//arrow functions
//constante + parametro => lo que quiero retornar (aunque el return esta implicito)
//en lugar de function va solo la => flechita

var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(1, 2));


const sumar2 = (a, b) => {
    return a + b;
};
console.log(sumar2(1, 2));

const sumar3 = (a, b) => a + b;
console.log(sumar3(1, 2));

//todo esto da igual
//las arrow functions son ANONIMAS, asi que es buena practica asociarlas a una variable, el return esta implicito!
//si es un solo dato el que estoy procesando las llaves no son necesarias

// var saludar1 = function() {
//  return ‘Hola’;
// };
// console.log(saludar1());

// const saludar2 = () => {
//    return ‘Hola’
// };
// console.log(saludar2());

// const saludar3 = () => `Hola`
// console.log(saludar3());

//tambien puedo utilizarlas sin parametros
//cuando tenemos la posibilidad de utilizar dos return(estructura compleja)
//se tienen que utilizar las llaves y el retorno, hariamos flashar al codigo utilizando llaves
//ya sea con un for, un if, o un map

const sumarLosTres = (num1, num2, num3) => num1 + num2 + num3;

const cuadrado = (num) => num * num;

const decirHola = () => console.log('¡Hola!');


// function saludar (nombre) {
//     if (nombre === undefined) {
//         return"hola anónimo";
//     } else {return"hola " + nombre;}}

const saludar = (nombre) => {
    if (nombre === undefined) {
        return "hola anónimo"
    } else {
        return "hola " + nombre;
    }
}


const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`

const exclamar = (str) => `¡${str}!`

const mayusculas = (str) => str.toUpperCase()

const minusculas = (str) => str.toLowerCase()

console.log(nombreCompleto('Ada', 'Lovelace'));

console.log(exclamar('Hedy'))
// Ada Lovelaceconsole.log( exclamar('Hedy') ); 
console.log(mayusculas('grace'))
// ¡Hedy!console.log( mayusculas('grace') ); 
console.log(minusculas('SHERYL'))
// GRACE console.log( minusculas('SHERYL') ); // sheryl

// const saludarVisitanteWeb = (nombreUsuario) => {
//     if (nombreUsuario === undefined) {
//         return '¡Hola anónimo!';
//     } else {
//         return `¡Hola ${nombreUsuario}!`;
//     }
// }
// console.log(saludarVisitanteWeb()); // ¡Hola anónimo!
// console.log( saludarVisitanteWeb('Rossita') ); // ¡Hola Hedy!

const saludarVisitanteWeb = (nombreUsuario = "anónimo") => {
        return `¡Hola ${nombreUsuario}!`;
}
console.log(saludarVisitanteWeb()); // ¡Hola anónimo!
console.log( saludarVisitanteWeb('Rossita') ); // ¡Hola Hedy!
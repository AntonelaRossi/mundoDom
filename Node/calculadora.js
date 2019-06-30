

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



    module.exports = {
        sumar (numero1, numero2) {
            return numero1+numero2;
    
        },
        restar (numero1, numero2) {
            return numero1-numero2;
    
        },
        dividir (numero1, numero2) {
            if (numero2  == 0) {
                return "el numero no puede dividirse por cero"
            } else {
                return numero1/numero2
            }
    
        },
        multiplicar (numero1, numero2) {
            return numero1*numero2
        },
        
    }
    
    
    // te muestra en consola parametros
    // se puede agregar desde consola mas parametros node pruebaNode.js sumar 
    // o datos, directorios, etc
   

    
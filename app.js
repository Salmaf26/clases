
const {operacionSuma,
       operacionResta, 
       operacionMultiplicacion, 
       operacionDivision,
       operacionPotencia} = require ('./utilidades/operaciones');

//crear un programa encargado de suma, restar, multiplicar, dividir, elevar el numero al cuadrado
//los resultados se deben agregar al objeto dado, utilizando funciones



//objeto

const resultados = {
    suma: 0,
    resta: 0,
    multiplicacion: 0,
    division: 0,
    potencia: 0
}

let numero1 = 10, numero2 = 14;

operacionSuma(numero1, numero2, resultados);
operacionResta(numero1,numero2, resultados);
operacionMultiplicacion(numero1, numero2, resultados);
operacionDivision(numero1, numero2, resultados);
operacionPotencia(numero1, resultados);

console.log(resultados);
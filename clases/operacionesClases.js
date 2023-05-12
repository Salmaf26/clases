
const {operacionesClass} = require("./clases/operacionesClases");

//instancia
class operacionesClases {
    constructor (){
            this.resultados = {
                suma: 0,
                resta: 0,
                multiplicacion: 0,
                division: 0,
                potencia: 0
            }
    }
    operacionSuma (num1, num2){
        this.resultados.suma = num1 + num2;
    
    }

    operacionResta (num1, num2){
        this.resultados.resta = num1 - num2;

    }

    operacionMultiplicacion (num1, num2){
        this.resultados.multiplicacion = num1 * num2;

    }

    operacionDivision (num1, num2){
        this.resultados.division = num1 / num2;

    }

    operacionPotencia (num1){
        this.resultados.potencia = Math.pow(num1,2);

    }

}

module.exports = {
    operacionesClases

}
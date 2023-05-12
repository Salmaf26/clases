
//suma
const operacionSuma = ( num1, num2, objeto ) => {
    objeto.suma = num1 + num2;
    return objeto;
}

//resta
const operacionResta = (num1, num2, objeto) =>{
    objeto.resta = num1 - num2;
    return objeto;
}

//multiplicacion
const operacionMultiplicacion = (num1, num2, objeto) => {
    objeto.multiplicacion = num1 * num2;
    return objeto;
}

//division
const operacionDivision = (num1, num2, objeto) => {
    objeto.division = num1 / num2;
    return objeto;
}

//potencia Math.pow(numero,3); numero*numero
const operacionPotencia = (num1, objeto) => {
    objeto.potencia = num1 * num1;
    return objeto;
}

module.exports = {
    operacionSuma,
    operacionResta,
    operacionMultiplicacion,
    operacionDivision,
    operacionPotencia,
}

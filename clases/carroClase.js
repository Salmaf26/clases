
class Carro {
    //metodo inicial
    constructor (marca, modelo, year ){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.velocidad = 0;
    }

    //metodo acelerar
    acelerar (){
        console.log("El coche esta acelerando bien recio...");
        this.velocidad = this.velocidad + 100;
        console.log(`El coche paso de ${this.velocidad}km/h a ${this.velocidad + 100}km/h`)
    }


    //metodo frenar
    frenar () {
        this.velocidad = this.velocidad -50;
        console.log(`El coche paso de ${this.velocidad}km/h a ${this.velocidad - 50}km/h`)
        console.log()
    }

}

module.exports = { Carro };
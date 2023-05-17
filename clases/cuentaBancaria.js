
class cuentaBancaria {
    constructor (cliente, saldo, cuenta){
        this.cliente = cliente;
        this.saldo = 0;
        this.cuenta = new Date().getTime();//instancia de la clase date en su metodo getTime
    }

    //metodo consultar salto
    saldo() {
       return this.saldo;
    
    }

    depositar(cantidadDeposito) {
        this.saldo = this.saldo + cantidadDeposito;

    }

    retirar(cantidadRetiro) {
        if ( cantidadRetiro > this.saldo ){
            return 'No cuentas con saldo suficiente'
        }

        return this.saldo - cantidadRetiro;

        
    }
}

module.exports = {cuentaBancaria};
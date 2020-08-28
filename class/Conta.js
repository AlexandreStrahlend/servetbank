//Classe abstrata - Pode ser herdada mas não instanciada.

export class Conta {

    // Constructor:

    constructor(agencia, numero, operacao, saldo) {

        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata.")
        }

        this._saldo = saldo

        this.agencia = agencia
        this.numero = numero
        this.operacao = operacao

    }

    // Acessores:

    get saldo() {
        return this._saldo
    }

    // Metodos:

    sacando(valor) {

        if (valor <= this._saldo) {
            if (valor > 0) {
                this._saldo -= valor;
                return `Saque da conta ${this.numero} no valor de R$:${valor} realizado com sucesso.`
            } else {
                return `Valor ${valor} inválido. Tente um valor acima de zero.`
            
        } else {
            return `O Valor ${valor} é maior que o valor em saldo.`
        }
    }

    sacar(valor) {
        console.log(this.sacando(valor))
    }

    depositando(valor) {
        if(valor > 0) {
            this._saldo += valor
            return `Deposito na conta ${this.numero} no valor de ${valor} realizado com sucesso.`
        } else  {
            console.log(`Valor ${valor} inválido. Tente um valor acima de zero.`)
        }

    }

    depositar(valor) {
        console.log(this.depositando(valor))
    }

    consultarSaldo() {
        console.log(`O saldo da conta ${this.numero} é de R$:${this._saldo}.`)
        console.log(`----------------------------------------------------------------------------`)
    }

    transferir(valor, conta) {
        this.sacando(valor)
        conta.depositando(valor)
        console.log(`Valor de R$:${valor} transferido da conta ${this.numero} para a conta ${conta.numero}.`)
        console.log(`----------------------------------------------------------------------------`)
    }
}
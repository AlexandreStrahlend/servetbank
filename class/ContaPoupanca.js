import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta {

    // Atributos Estaticos:

    static numeroDeContasPoupanca = 0

    // Constructor:

    constructor(agencia, numero, operacao, saldo) {
        super(agencia, numero, operacao, saldo)
        ContaPoupanca.numeroDeContasPoupanca += 1
    }
}
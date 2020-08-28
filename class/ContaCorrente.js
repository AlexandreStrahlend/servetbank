import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta {

    // Atributos Estaticos:

    static numeroDeContasCorrente = 0

    // Constructor:

    constructor(agencia, numero, operacao, saldo) {
        super(agencia, numero, operacao, saldo)
        ContaCorrente.numeroDeContasCorrente += 1
    }
}
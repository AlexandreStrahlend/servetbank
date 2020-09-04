import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta {

	// Atributos Estaticos:

	static numeroDeContasCorrente = 0

	// Constructor:

	constructor(agencia, numero, operacao, saldo) {
		super(agencia, numero, operacao, saldo)
		ContaCorrente.numeroDeContasCorrente += 1
	}

	// Metodos:

	sacar(valor) {
		const taxaSaque = 1.1
		console.log(super._sacar(valor, taxaSaque))
	}

	transferir(valor, conta) {
		const taxaTransferencia = 1.15
		console.log(this._transferir(valor, conta, taxaTransferencia))
	}

}
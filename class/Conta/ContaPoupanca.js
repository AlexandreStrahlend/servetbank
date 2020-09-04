import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta {

	// Atributos Estaticos:

	static numeroDeContasPoupanca = 0

	// Constructor:

	constructor(agencia, numero, operacao, saldo) {
		super(agencia, numero, operacao, saldo)
		ContaPoupanca.numeroDeContasPoupanca += 1
	}

	// Metodos:

	sacar(valor) {
		const taxaSaque = 1.05
		console.log(super._sacar(valor, taxaSaque))
	}

	transferir(valor, conta) {
		const taxaTransferencia = 1.055
		console.log(this._transferir(valor, conta, taxaTransferencia))
	}

}
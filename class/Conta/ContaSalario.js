import {Conta} from "./Conta.js"

export class ContaSalario extends Conta {

	// Atributos Estaticos:

	static numeroDeContasSalario = 0

	// Constructor:

	constructor(agencia, numero, operacao, saldo) {
		super(agencia, numero, operacao, saldo)
		ContaSalario.numeroDeContasSalario += 1
	}

	// Metodos:

	sacar(valor) {
		const taxaSaque = 1.01
		console.log(super._sacar(valor, taxaSaque))
	}

	transferir(valor, conta) {
		const taxaTransferencia = 1.015
		console.log(this._transferir(valor, conta, taxaTransferencia))
	}

}
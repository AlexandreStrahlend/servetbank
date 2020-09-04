//Classe abstrata - Pode ser herdada mas não instanciada.

export class Conta {

	// Constructor:

	constructor(agencia, numero, operacao, saldo) {

		if (this.constructor == Conta) {
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

	// Metodos Abstrato

	sacar(valor) {
		throw new Error("O metodo sacar da classe Conta é abstrato")
	}

	transferir(valor, conta, taxa) {
		throw new Error("O metodo transferir da classe Conta é abstrato")
	}

	// Metodos Publicos:

	depositar(valor) {
		console.log(this._depositar(valor))
	}

	consultarSaldo() {
		console.log(`O saldo da conta ${this.numero} é de R$:${this._saldo}.\n`)
	}

	// Metodos Privados:

	_sacar(valor, taxaSaque) {

		// Variables

		const valorComTaxaSaque = valor * taxaSaque
		const taxaRealSaque = valorComTaxaSaque - valor

		// Early Return

		if (valor > this._saldo) {
			return `O Valor ${valor} é maior que o valor em saldo.\n`

		} else if (valor < 0) {
			return `Valor ${valor} inválido. Tente um valor acima de zero.\n`

		} else if (valorComTaxaSaque > this._saldo) {
			return `Valor ${valor} com taxa de saque de ${taxa} é maior que saldo em conta\n`

		} else if (valor < this._saldo && valor > 0 && valorComTaxaSaque <= this._saldo) {

			// Core

			this._saldo -= valorComTaxaSaque
			return `Saque da conta ${this.numero} no valor de R$:${valor} realizado com sucesso.\nTaxa de saque de ${taxaRealSaque}\nO saldo da conta ${this.numero} é de ${this._saldo}\n`
		}

		throw new Error("Nenhuma condição de sacar foi atendida, revise seu código")

	}

	_depositar(valor) {

		// Early Return

		if (valor < 0) {
			console.log(`Valor ${valor} inválido. Tente um valor acima de zero.\n`)

			// Core

		} else if (valor > 0) {
			this._saldo += valor
			return `Deposito na conta ${this.numero} no valor de ${valor} realizado com sucesso.\nSeu saldo é de ${this._saldo}\n`
		}

		throw new Error("Nenhuma condição de depositar foi atendida, revise seu código")

	}

	_transferir(valor, conta, taxaTransferencia) {

		// Variables

		const valorComTaxaTransferencia = valor * taxaTransferencia
		const taxaRealTransferencia = (valorComTaxaTransferencia - valor).toFixed(2)

		// Early Return

		if (valor > this._saldo) {
			return `O Valor ${valor} é maior que o valor em saldo.\n`

		} else if (valor < 0) {
			return `Valor ${valor} inválido. Tente um valor acima de zero.\n`

		} else if (valorComTaxaTransferencia > this._saldo) {
			return `Valor ${valor} com taxa de saque de ${taxa} é maior que saldo em conta\n`

		} else if (valor < this._saldo && valor > 0 && valorComTaxaTransferencia <= this._saldo) {

			// Core

			this._saldo -= valorComTaxaTransferencia
			conta._saldo += valor
			return `Transferencia realizada com Sucesso da conta ${this.numero} para a ${conta.numero}\nValor da transferencia de R$${valor}\nTaxa de transferencia de R$${taxaRealTransferencia}\n`


		}

		throw new Error("Nenhuma condição de transferir foi atendida, revise seu código")

	}
}
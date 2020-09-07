//Classe abstrata - Pode ser herdada mas não instanciada.

export class Funcionario {
	constructor(nome, salario, cpf) {

		if (this.constructor == Funcionario) {
			throw new Error("Você não deveria instanciar um objeto do tipo funcionario diretamente, pois essa é uma classe abstrata.")
		}

		this._nome = nome
		this._salario = salario
		this._cpf = cpf

		this._bonificacao = 1
		this._senha
	}

	// Acessores:

	get senha() {
		return this._senha
	}

	// Metodos:

	cadastrarSenha(senha) {
		this._senha = senha
	}

	autenticar(senha) {
		return senha === this._senha
	}

}
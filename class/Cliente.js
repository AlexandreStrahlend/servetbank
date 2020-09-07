export class Cliente {

	// Atributos Estaticos:

	static numeroDeClientes = 0

	// Constructor:

	constructor(cpf, senha, nome, sobrenome, rg, dataNascimento, cidade, contas) {
		this._cpf = cpf
		this._senha = senha

		this.nome = nome
		this.sobrenome = sobrenome
		this.rg = rg
		this.dataNascimento = dataNascimento
		this.cidade = cidade
		this.contas = contas


		Cliente.numeroDeClientes += 1
	}


	// Acessores:

	get cpf() {
		return this._cpf
	}

	get senha() {
		return this._senha
	}

	// Metodos:

	autenticar(senha) {
		return senha === this._senha
	}


}
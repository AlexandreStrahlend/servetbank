import {Funcionario} from "./Funcionario.js"

export class Gerente extends Funcionario {

	// Atributos Estaticos:

	static numeroDeGerentes = 0

	// Constructor:

	constructor(nome, salario, cpf) {
		super(nome, salario, cpf)
		this._bonificacao = 1.1
		Gerente.numeroDeGerentes += 1
	}
}
import {Funcionario} from "./Funcionario.js"

export class Diretor extends Funcionario {

	// Atributos Estaticos:

	static numeroDeDiretores = 0

	// Constructor:

	constructor(nome, salario, cpf) {
		super(nome, salario, cpf)
		this._bonificacao = 1.2
		Diretor.numeroDeDiretores += 1
	}
}
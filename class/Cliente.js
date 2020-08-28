export class Cliente {

    // Atributos Estaticos:

    static numeroDeClientes = 0

    // Constructor:

    constructor(cpf, nome, sobrenome, rg, dataNascimento, cidade, contas) {
        this._cpf = cpf

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


}
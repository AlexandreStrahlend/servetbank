export class Cliente {

    // Atributos Estaticos:

    static numeroDeClientes = 0;

    // Constructor:

    constructor(nome, sobrenome, cpf, rg, dataNascimento, cidade, contas) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this._cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
        this.cidade = cidade;
        this.contas = contas;

        Cliente.numeroDeClientes += 1;
    }


    // Acessores:

    get cpf() {
        return this._cpf;
    }


}
export class Cliente {

    // Atributos:

    nome;
    sobrenome;
    _cpf;
    rg;
    dataNascimento;
    cidade;
    contas;

    // Acessores:

    get cpf() {
        return this._cpf;
    }

    // Constructor:

    constructor(nome, sobrenome, cpf, rg, dataNascimento, cidade, contas) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this._cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
        this.cidade = cidade;
        this.contas = contas;
    }

}
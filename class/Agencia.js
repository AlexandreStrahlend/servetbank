export class Agencia {

    // Atributos Estaticos:

    static numeroDeAgencias = 0;

    // Constructor:

    constructor(numeroAg, cidadeSede, clientes) {
        this.numeroAg = numeroAg;
        this.cidadeSede = cidadeSede;
        this._clientes = clientes;

        Agencia.numeroDeAgencias += 1;
    }

    // Acessores:

    get clientes() {
        return this._clientes;
    }

}
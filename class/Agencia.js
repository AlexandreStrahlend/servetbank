export class Agencia {

    // Atributos:

    numeroAg;
    cidadeSede;
    _clientes;

    // Acessores:

    get clientes() {
        return this._clientes;
    }

    // Constructor:

    constructor(numeroAg, cidadeSede, clientes) {
        this.numeroAg = numeroAg;
        this.cidadeSede = cidadeSede;
        this._clientes = clientes;
    }


}
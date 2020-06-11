export class ContaCorrente {

    // Atributos:
    static numeroDeContas = 0;
    agencia;
    numero;

    _saldo = 0;

    // Acessores:

    get saldo() {
        return this._saldo;
    }

    // Constructor:

    constructor(agecia, numero, saldo) {
        this.agencia = agecia;
        this.numero = numero;
        this._saldo = saldo;
        ContaCorrente.numeroDeContas += 1;
    }

    // Metodos:

    sacando(valor) {

        if (valor <= this._saldo) {
            if (valor > 0) {
                this._saldo -= valor;
                return `Saque da conta ${this.numero} no valor de R$:${valor} realizado com sucesso.`;
            } else {
                return `Valor ${valor} inválido. Tente um valor acima de zero.`;
            }
        } else {
            return `O Valor ${valor} é maior que o valor em saldo.`;
        }
    }

    sacar(valor) {
        console.log(this.sacando(valor));
    }

    depositando(valor) {
        if(valor > 0) {
            this._saldo += valor;
            return `Deposito na conta ${this.numero} no valor de ${valor} realizado com sucesso.`;
        } else  {
            console.log(`Valor ${valor} inválido. Tente um valor acima de zero.`);
        }

    }

    depositar(valor) {
        console.log(this.depositando(valor));
    }

    consultarSaldo() {
        console.log(`O saldo da conta ${this.numero} é de R$:${this._saldo}.`);
        console.log(`----------------------------------------------------------------------------`)
    }

    transferir(valor, conta) {
        this.sacando(valor);
        conta.depositando(valor);
        console.log(`Valor de R$:${valor} transferido da conta ${this.numero} para a conta ${conta.numero}.`)
        console.log(`----------------------------------------------------------------------------`)
    }
}
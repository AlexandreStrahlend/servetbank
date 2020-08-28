//----------------------Importacoes-----------------------

import {Cliente} from "./class/Cliente.js"
import {ContaCorrente} from "./class/ContaCorrente.js"
import {Banco} from "./class/Banco.js"
import {Agencia} from "./class/Agencia.js"
import {ContaPoupanca} from "./class/ContaPoupanca.js"
import {Conta} from "./class/Conta.js"

//----------------------Instancia de Contas-----------------------

const contaCorrente1 = new ContaCorrente(
    1001,
    1,
    1,
    50
)

const contaCorrente2 = new ContaCorrente(
    1001,
    2,
    1,
    50
)

const contaPoupanca1 = new ContaPoupanca(
    1001,
    1301,
    13,
    100
)

const contaPoupanca2 = new ContaPoupanca(
    1001,
    1302,
    13,
    450
)

const conta1 = new Conta(
    1001,
    1,
    1,
    0
)

//----------------------Instacia de Clientes-----------------------

const cliente1 = new Cliente(
    "Ricardo",
    "Magalhaes",
    11122233309,
    12345,
    "12/03/1983",
    "Sao Paulo",
    {"1": contaCorrente1}
);

const cliente2 = new Cliente(
    "Alice",
    "Silva",
    44455566609,
    67890,
    "09/08/1976",
    "Curitiba",
    {"2": contaCorrente2}
);


//----------------------Instacia de Agencias-----------------------

const agencia1 = new Agencia(
    1001,
    "Campinas - SP",
    {
        "1": cliente1,
        "2": cliente2
    }
);


//----------------------Instacia de Bancos-----------------------

const banco1 = new Banco(
    "Banco Servetbank SA",
    "servetbank",
    348,
    2020,
    {
        "1001": agencia1
    }
);

//----------------------Movimentacoes-----------------------

contaCorrente1.depositar(100)
contaCorrente2.depositar(300)

contaCorrente1.sacar(12)

contaCorrente2.transferir(35, contaCorrente1)

contaCorrente1.consultarSaldo()
contaCorrente2.consultarSaldo()

console.log(contaCorrente1)
console.log(contaCorrente2)
console.log(contaPoupanca1)
console.log(conta1)

console.log(ContaCorrente.numeroDeContasCorrente)
console.log(Cliente.numeroDeClientes)
console.log(Agencia.numeroDeAgencias)
console.log(ContaCorrente.numeroDeContasCorrente + ContaPoupanca.numeroDeContasPoupanca)

contaCorrente1.depositar(50)
contaCorrente1.consultarSaldo()



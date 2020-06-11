//----------------------Importacoes-----------------------

import {Cliente} from "./class/Cliente.js";
import {ContaCorrente} from "./class/ContaCorrente.js";
import {Banco} from "./class/Banco.js";
import {Agencia} from "./class/Agencia.js";

//----------------------Instancia de Contas-----------------------

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.numero = 1;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 1001;
contaCorrente2.numero = 2;

//----------------------Instacia de Clientes-----------------------

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.sobrenome = "Magalhaes";
cliente1.cpf = 11122233309;
cliente1.rg = 12345;
cliente1.dataNascimento = "12/03/1983";
cliente1.cidade = "Sao Paulo";
cliente1.contas = {
    "1": contaCorrente1
};

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.sobrenome = "Silva";
cliente2.cpf = 44455566609;
cliente2.rg = 67890;
cliente2.dataNascimento = "09/08/1976"
cliente2.cidade = "Curitiba";
cliente2.contas = {
    "2":contaCorrente2
};

//----------------------Instacia de Agencias-----------------------

const agencia1 = new Agencia();
agencia1.numeroAg = 1001;
agencia1.cidadeSede = "Campinas";
agencia1.clientes = {
    "1": cliente1,
    "2": cliente2
}

//----------------------Instacia de Bancos-----------------------

const banco1 = new Banco();
banco1.razaoSocial = "Banco Servetbank SA";
banco1.nomeFantasia = "servetbank";
banco1.numeroBancoCentral = 348;
banco1.anoFundacao = 2020;
banco1.agencias = {
    "1001": agencia1
}
//----------------------Movimentacoes-----------------------

contaCorrente1.depositar(100);
contaCorrente2.depositar(300);

contaCorrente1.sacar(12);

contaCorrente2.transferir(35,contaCorrente1);

contaCorrente1.consultarSaldo()
contaCorrente2.consultarSaldo()

console.log(contaCorrente1);
console.log(contaCorrente2);

console.log(banco1);
console.log(agencia1);
console.log(cliente1);
console.log(cliente2);
console.log(contaCorrente1);
console.log(contaCorrente2);
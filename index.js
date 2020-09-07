//----------------------Importacoes-----------------------


import {Agencia} from "./class/Agencia.js"
import {Banco} from "./class/Banco.js"
import {Cliente} from "./class/Cliente.js"
import {ContaCorrente} from "./class/Conta/ContaCorrente.js"
import {ContaPoupanca} from "./class/Conta/ContaPoupanca.js"
import {ContaSalario} from "./class/Conta/ContaSalario.js"
import {Diretor} from "./class/Funcionario/Diretor.js"
import {Gerente} from "./class/Funcionario/Gerente.js"
import {SistemaAutenticacao} from "./class/SistemaAutenticacao.js"

//----------------------Instancia de Contas-----------------

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

const contaSalario1 = new ContaSalario(
	1001,
	1501,
	15,
	200
)

//----------------------Instacia de Clientes-----------------------

const cliente1 = new Cliente(
	"Ricardo",
	123456,
	"Magalhaes",
	11122233309,
	12345,
	"12/03/1983",
	"Sao Paulo",
	{"1": contaCorrente1}
)

const cliente2 = new Cliente(
	"Alice",
	4321,
	"Silva",
	44455566609,
	67890,
	"09/08/1976",
	"Curitiba",
	{"2": contaCorrente2}
)


//----------------------Instacia de Agencias-----------------------

const agencia1 = new Agencia(
	1001,
	"Campinas - SP",
	{
		"1": cliente1,
		"2": cliente2
	}
)


//----------------------Instacia de Bancos-----------------------

const banco1 = new Banco(
	"Banco Servetbank SA",
	"servetbank",
	348,
	2020,
	{
		"1001": agencia1
	}
)

//----------------------Movimentacoes-----------------------

contaSalario1.sacar(50)
contaSalario1.depositar(100)
contaSalario1.consultarSaldo()
contaSalario1.transferir(30, contaPoupanca1)

//------------------Instacia de Funcionarios-----------------

const diretor1 = new Diretor(
	"Matheus",
	1500,
	55566633398
)

const gerente1 = new Gerente(
	"Erick",
	1000,
	89976645532
)

//----------------Movimentacoes Funcionarios-------------------

diretor1.cadastrarSenha(123456789)
gerente1.cadastrarSenha(998877)

const diretorEstaLogado = SistemaAutenticacao.login(diretor1, 123456789)
const gerenteEstaLogado = SistemaAutenticacao.login(gerente1, 998877)
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, 123456)

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado)
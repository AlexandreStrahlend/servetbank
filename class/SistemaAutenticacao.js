// Ser autenticavelk significa ter um metodo autenticar

export class SistemaAutenticacao {
	static login(autenticavel, senha) {
		if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {

			// Core

			return autenticavel.autenticar(senha)
		}
		throw new Error("Nenhum das condicoes foi atendida")
	}

	static ehAutenticavel(autenticavel) {

		return "autenticar" in autenticavel &&
			autenticavel.autenticar instanceof Function
	}
}

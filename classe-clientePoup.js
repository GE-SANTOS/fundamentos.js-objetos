class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositarValor(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }

}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

const gil = new ClientePoupanca("Gil", "gil@email.com", "25547469625", 100, 2000);

console.log(gil);

gil.depositarValor(50);
gil.depositarPoupanca(50);

console.log(gil);
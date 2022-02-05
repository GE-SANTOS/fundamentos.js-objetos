class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(Valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }

}

const gil = new Cliente("Geovane", "geovane@gmail.com", "55688977644", 500);

gil.exibirSaldo();

console.log(gil)
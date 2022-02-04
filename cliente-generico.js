function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

const geovane = new Cliente("Geovane", "23569878955", "geovane@email.com", 200);

console.log(geovane);
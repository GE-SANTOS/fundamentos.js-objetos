const cliente = {
    nome: "Geovane",
    idade: 35,
    CPF: "78912345622",
    email: "geovane@email.com",
    fones: ["5571996548282", "5571988644622"],
    dependentes: [

        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }

    ],

    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
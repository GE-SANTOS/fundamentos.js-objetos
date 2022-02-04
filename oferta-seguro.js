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

//se o includes encontrar "dependentes" no array ira printar o que se pede.
function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj); // mostar array com  as chaves do objeto.
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${ obj.nome }`);
    }
}

console.log(Object.values(cliente)); // mostra array com os valores do objeto.
console.log(Object.entries(cliente)); // mostra array com varios arrays dentro dele.
oferecerSeguro(cliente);
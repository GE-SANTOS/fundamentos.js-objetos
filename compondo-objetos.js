const cliente = {
    nome: "Geovane",
    idade: 35,
    CPF: "78912345622",
    email: "geovane@email.com",
    fones: ["5571996548282", "5571988644622"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011",
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";

console.log(cliente);
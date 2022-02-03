const cliente = {
    nome: "Geovane",
    idade: 35,
    CPF: "78912345622",
    email: "geovane@email.com",
    fones: ["5571996548282", "5571988644622"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"

})

//console.log(cliente);

//faz uma busca no objeto através do filter tendo como referência a data de nascimento.
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);
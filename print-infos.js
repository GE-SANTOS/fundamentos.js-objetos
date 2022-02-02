const cliente = {
    nome: "Geovane",
    idade: 35,
    CPF: "78912345622",
    email: "geovane@email.com"
}

console.log(`Meu nome é ${ cliente.nome } e tenho ${ cliente.idade }`);
console.log(`CPF: ${cliente.CPF.substring(0, 3)}`);
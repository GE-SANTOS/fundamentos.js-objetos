const cliente = {
    nome: "Geovane",
    idade: 35,
    CPF: "78912345622",
    email: "geovane@email.com"
}

const chaves = ["nome", "idade", "CPF", "email"];

console.log(cliente[chaves[0]]);

// o forEach percorre o array.
chaves.forEach(info => console.log(cliente[info]));

console.log(cliente["nome"]);
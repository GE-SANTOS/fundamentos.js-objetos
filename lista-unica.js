const clientes = [{
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
    },
    {
        nome: "Juliana",
        cpf: "99665536922",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }]

    }
]



const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes);
console.table(listaDependentes);
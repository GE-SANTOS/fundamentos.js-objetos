const clientes = [{
        nome: "AGeovane",
        cpf: "12312312312",
        dependentes: [{
                nome: "Adrian",
                parentesco: "filho",
                dataNasc: "09/08/2011"
            },
            {
                nome: "Geovana",
                parentesco: "filha",
                dataNasc: "10/04/2013"
            }
        ],
    },
    {
        nome: "John",
        cpf: "56767867867",
        dependentes: [{
                nome: "Juan",
                parentesco: "filho",
                dataNasc: "30/08/2015"
            },
            {
                nome: "Dylan",
                parentesco: "filho",
                dataNasc: "10/04/2017"
            }
        ],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes);
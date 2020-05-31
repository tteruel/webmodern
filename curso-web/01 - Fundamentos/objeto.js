const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //Evitar atributos com espaço
console.log(prod1)


const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{
            blabla: 2
        }

    }
}

console.log(prod2)

//JSON - não é a mesma coisa que objetos, é apenas a forma textual para trocar dados entre sistemas java script object notation
'{ "nome": "camisa polo", "preco": 79.90 }'
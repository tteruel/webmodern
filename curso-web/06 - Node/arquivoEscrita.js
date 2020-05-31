const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!!') // se erro for null(falso) ele retorna para o segundo operando 
})


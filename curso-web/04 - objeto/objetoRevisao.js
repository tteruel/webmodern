// colecao dinamica de pares chave/valor
const produto = new Object

produto.nome = 'Cadeira'
produto['Marca produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            rua: 'rua abc',
            numero: 124
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 45
    }],

    calcularValorSeguro: function(){
        //.....
    }
}


carro.proprietario.endereco.numero = 167
carro['proprietario']['endereco']['rua'] = 'Av brasil'

console.log(carro)

delete carro.condutores

delete carro.proprietario.endereco

delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) tenta acessar algo de uma coisa undefined e dá erro
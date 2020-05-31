function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc)*(1+imposto)}`
}


const produto ={
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.desc = 0.1
global.preco = 500
console.log(getPreco())

console.log(produto.getPreco())

const carro = {preco: 40000, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, 'CAD')) // Dá pra passar tbm os parametros da função
console.log(getPreco.apply(carro, [0.17, '$'])) // com o apply se passa como array os parametros
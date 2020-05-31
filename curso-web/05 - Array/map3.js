// criando o map2 - não consegui fazer
 Array.prototype.map2 = function(callback) {
     const newArray = []
    for(let i = 0;i < this.length ; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
 }


const carrinho = [ // tipo JSON
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
console.log(resultado2)
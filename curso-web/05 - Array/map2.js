const carrinho = [ // tipo JSON
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// retornar array com map apenas com os preços
// EXERCICIO - DEU CERTO!!!!
let precos = carrinho.map(function(e, i, array){
    return JSON.parse(e)
}).map(function(e, i){
    return e.preco
})

console.log(precos)

//Como o professor fez
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
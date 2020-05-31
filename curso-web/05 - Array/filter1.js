const produtos = [
    {nome: 'Notebook', preco:2499, fragil: true},
    {nome: 'iPad Pro', preco:4199, fragil: true},
    {nome: 'Copo de Vidro', preco:12.49, fragil: true},
    {nome: 'Notebook', preco:18.99, fragil: false}
]


console.log(produtos.filter(function(p){
    return p.fragil == false
}))


const filtraFragil = produto => produto.fragil
const precoMaior500 = produto => produto.preco > 500
console.log(produtos.filter(filtraFragil).filter(precoMaior500))


// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a) // b não está definida e dá erro

//  template string
const produto = 'IPad'
console.log(`Teste ${produto} 
é
carooo!!`)

//Destructuring
const [l, e, ...tras] = 'Codigo'

console.log(l, e, tras)

const [x, y] = [1, 2, 3]

console.log(x, y)

const {idade: i, nome}=  {nome: 'Ana', idade: 29}
console.log(i, nome)
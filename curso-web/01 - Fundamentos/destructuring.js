// Destructuring parte 1
console.log('--------PARTE 1 --------')

//Novo recurso ES2015
const pessoa = {
    nome:  'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua zx',
        numero: 123
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa

console.log(n, i)

const {sobrenome: s, outro: o} = pessoa

console.log(s, o)

const {endereco: {logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)

// const {conta: {ag, banco}} = poupanca da erro pq ele tenta acessar algo parametros dentro de algo já undefined

// PARTE 2
console.log('-----Parte 2-----')
const [a] = [10]
console.log(a)


const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 2, 4],[1, 3]]

console.log(nota)

// PARTE 3
console.log('-----Parte 3-----')
function rand( {min = 0, max = 1000} ) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({max: 999, min: 990}))
console.log(rand({})) // random de 0 a 1000
// console.log(rand()) - destructure de undefined - ERRO


// PARTE 4
console.log('-----Parte 4-----')
function rand2( [min = 0, max = 1000] ) {

    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand2([70, 30]))
console.log(rand2([992]))//minimo como 992
console.log(rand2([, 10])) // maximo como 10
console.log(rand2([]))
// console.log(rand2()) - destructure de undefined - ERRO
// pessoa -> 123 -> {...} (pessoa aponta para o endereço de memória 123)
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro' // o Que não se altera neste caso é a constante pessoa

console.log(pessoa.nome)

// pessoa -> 456 -> {...} 

// pessoa = {nome: 'Ana'} (não dá pra fazer isso pois ele tenta apontar para outro endereço)

Object.freeze(pessoa) // torna o objeto em si uma constante (não deleta, não edita e não adiciona mais nada)

pessoa.nome = 'Ana'
pessoa.end = 'Rua 1234'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'BLABLA'})
pessoaConstante.nome = 'Joséeeeeeeeeee'
console.log(pessoaConstante)
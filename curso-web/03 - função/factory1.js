// const prod1 = {
//     nome: 'telefone',
//     preco: 45
// }
// const prod2 = {
//     nome: '...',
//     preco: 4512
// }
// factory é uma função que retorna um objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
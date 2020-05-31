const alunos = [
    {nome: 'Maria', nota: 7.9},
    {nome: 'João', nota: 9.2}
]

// imperativo
let total1 = 0
for(let i = 0;i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)
// menos reuso


// ------------------------------
// declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

// Basicamente apenas essas duas linhas são códigos
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)
// mais reuso do código

//exemplo
//select codigo, nome, email from clientes where ativo = 1 = declarativo


// declarativo simplesmente da a ordem e não se preocupa no como fazer.. ao contrario, o imperativo tem que dizer o passo a passo para realizar
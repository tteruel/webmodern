const escola =[{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'pedro',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasTurma)

console.log(notas1) // retorna um array formado por dois elementos que tbm são arrays
Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotasTurma)

console.log(notas2)
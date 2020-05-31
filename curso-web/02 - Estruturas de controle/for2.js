const notas = [6.5, 3.8, 3.0, 8.4, 8.9, 6.4]

for(let i in notas){ // colocar o let para ser utilizado o i apenas dentro do for
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    Sobrenome: 'AIJAIA',
    idade: 28
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}


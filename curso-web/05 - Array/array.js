console.log(typeof Array, typeof new Array, typeof [])

let Aprovados = new Array('Ana', 'Carlos', 'Bia')
console.log(Aprovados)

// assim que deve ser usado no dia a dia

Aprovados = ['BIA', 'Carlos', 'Ana']

console.log(Aprovados[0], Aprovados[1], Aprovados[2], Aprovados[3]) // indice que não existe fica undefined

Aprovados[3]= 'Paulo'
Aprovados.push('JONSON')
console.log(Aprovados[0], Aprovados[1], Aprovados[2], Aprovados[3], Aprovados[4])

console.log(Aprovados.length)

Aprovados[9] = 'Rafael'

console.log(Aprovados.length)
console.log(Aprovados)
Aprovados.sort()
console.log(Aprovados.length)
console.log(Aprovados)


delete Aprovados[1]
console.log(Aprovados[1])
console.log(Aprovados[2]) // não foi reordenado depois que chamamos o delete

Aprovados = ['Bia', 'Carlos', 'Ana']

Aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // param1 = indice, param2 = qtd que vai remover, param3..x = o que vai adicionar
console.log(Aprovados)
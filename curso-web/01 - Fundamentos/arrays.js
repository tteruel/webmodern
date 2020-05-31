const valores = [7.7, 8.3, 5.5, 1.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined

valores[6] = 10
console.log(valores, valores[5])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //péssimo habito
console.log(valores)

console.log(valores.pop()) //remove o último valor
delete valores[0] // remover o valor de dentro de um objeto

console.log(valores)

console.log(typeof valores)
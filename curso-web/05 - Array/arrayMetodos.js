const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// vc pode mudar o array, porém não pode atribuir mais nada para pilotos pois ela é uma constante

pilotos.pop() // Massa sai da lista de pilotos - Remove o ultimo elemento do array
console.log('pop: ', pilotos)

pilotos.push('Verstappen') // Adiciona elementos à lista
console.log('push: ', pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log('shift: ', pilotos)

pilotos.unshift('Hamilton') // add no primeiro elemento
console.log('unshift: ', pilotos)

// Splice pode adicionar e remover elementos
// Add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log('Splice add: ', pilotos)

//Remover
pilotos.splice(3, 1)
console.log('Splice remover: ', pilotos)

//Slice
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log('slice: ', algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// param1 = inicio | param2 = fim - indice 4 não é add
console.log('Slice2: ', algunsPilotos2)
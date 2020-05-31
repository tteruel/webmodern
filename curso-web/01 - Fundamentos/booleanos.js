let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Negação duas vezes com !! 
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3, ' 3')
console.log(!!-1, ' - 1')
console.log(!!' ', ' espaço')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('pra finalizar...')

console.log(!!('' || null || 0 || 'epa' || 3)) // Lógico OU ||

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // Se nome for vazio '' ele retorna Desconhecido




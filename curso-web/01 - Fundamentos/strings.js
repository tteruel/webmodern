const escola = "TESTE"
console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5)) //vazio

console.log(escola.charCodeAt(3)) //Valor dentro da tabela ASCII - unicode
console.log(escola.indexOf('2')) //não retornou o valor correto

console.log(escola.substring(1))
console.log(escola.substring(0,3))


console.log('Escola '.concat(escola.concat("!")))
console.log('Escola ' + escola + "!!")
console.log(escola.replace('E', 'R'))

|console.log('Ana,Maria,Pedro'.split(','))
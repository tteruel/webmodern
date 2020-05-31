const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
//Template String
const template = `
    Olá
    ${nome}!`


console.log(concatenacao)
console.log(template)

//expressões...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()

//Usar o tempate string com função
console.log(`Eiii... ${up('cuidado')}`)
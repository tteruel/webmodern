// é o modulo que vai utilizar os modulos que já foram definidos

const moduloA = require('./moduloa')  // mesma pasta acessando o moduloA
const moduloB = require('./modulob')
const funcao = require('../../exercicios-js/função/factory2') // ão tem o export.. então ele não exports algo que queremos e sim só executa o modulo

console.log(moduloA.bemVindo, moduloA.atelogo)

console.log(moduloB.bomDia, moduloB.boaNoite())


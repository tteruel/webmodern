const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova') () // retorna uma função este arquivo
const contadorD = require('./instanciaNova') ()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor) // exportou um objeto e então ele faz cache desse objeto

contadorC.inc()
contadorC.inc()
contadorC.inc()

console.log(contadorA.valor, contadorB.valor, contadorC.valor, contadorD.valor)
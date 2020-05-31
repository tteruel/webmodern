console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

console.log(module.exports) // tanto faz a maneira que vai exportar.. todas vão para module.exports

exports ={
    nome: 'Teste'
} // para objeto o correto é usar o module.exports ao invés do exports apenas

console.log(module.exports)
console.log(exports)

module.exports ={
    numero: 123
}
console.log(module.exports)

// resumindo o this e o exports são duas referências para um objeto que o module.exports aponta
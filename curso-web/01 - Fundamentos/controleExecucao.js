let a = 123

global.b = 12

this.c = 1243
this.d = false

this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // this == module.exports
console.log(module.exports)

//criando variavel maluca: sem var e nem let
abc = 123 // Não fazer isso
console.log(global.abc)
// module.exports = {e: 456, f: false, g:'teste'}


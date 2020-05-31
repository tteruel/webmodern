console.log(this ===  global)
console.log(this ===  module)
console.log(this ===  module.exports)
console.log(this ===  exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this ===  global) // aponta para global
    console.log(this ===  module)
    console.log(this ===  module.exports)
    console.log(this ===  exports)

    this.perigo = '...'
}

logThis()
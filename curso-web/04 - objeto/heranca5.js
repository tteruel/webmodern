console.log(typeof(String))
console.log(typeof(Array))
console.log(typeof(Object))

// Os três tem um atributo chamado..................................... prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())


// Pode gerar efeitos colaterais - HAHAHA

String.prototype.toString = function(){
    return 'Fudeu!'
}

console.log('Escola Cod3r'.reverse())

// não substituir os metodos que já existem no prototype, e se adicionar.. tbm tomar cuidado
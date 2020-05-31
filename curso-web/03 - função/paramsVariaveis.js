function soma(){
    let soma = 0
    for(i in arguments){ // quando nenhum argumento é passado, vc pode utilizar o arguments e acessar em array os argumentos passados
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(1.1, 1.2, 3.4, 4.5))


console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a', 'b', 'c'))
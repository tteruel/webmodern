//Armazenando função dentro de váriavel
const imprimirSoma = function (a, b){

    console.log(a + b)
}

imprimirSoma(2, 3)


//Armazenando uma função arrow em uma variavel
const soma = (a, b) => { // => substitui function
return a + b

}

console.log(soma(2, 3))

//Retorno implícito
const Subtracao = (a, b) => a - b

console.log(Subtracao(2, 1))

const imprimir2 = a => console.log(a)

imprimir2(3)
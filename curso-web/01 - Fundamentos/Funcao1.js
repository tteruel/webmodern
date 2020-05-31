// Função sem retorno

console.log("TESTE IMPRIME:")
function imprimirSoma(a, b){

    console.log(a + b)
}


imprimirSoma(2, 4)
imprimirSoma(2)
imprimirSoma(1, 2, 3, 4, 5,6 , 7,8)
imprimirSoma()


function Soma(a = 1, b = 0){ 

    return a + b
}
console.log("TESTE SOMA:")
console.log(Soma(2, 3))
console.log(Soma(2)) // caso tenha um valor declarado na função, ele não fica como undefined
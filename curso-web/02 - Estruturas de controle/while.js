function getaleatorioEntre(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while( opcao != 5) {
opcao = getaleatorioEntre(10,1)
console.log(`A opção escolhida foi: ${opcao}`)
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(i in nums){
    if(i == 5) break
    console.log(`${i} = ${nums[i]}`)
}

for(y in nums){
    if(y == 5) continue // ele interrompe e vai para a proxima repetição nesse caso
    console.log(`${y} = ${nums[y]}`)
}

// continue só faz sentido em estruturas de repetição
// break pode ser utilizado com do, while, for e switch

externo: // utilizando o rotulo
for (a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo // colocar o rotulo aqui para ele utilizar o break no for que queremos
        console.log(`Par: ${a} e ${b}`)   // caso contrário ele quebra o for interno, o mais próximo
    }
}
// Não usar esse tipo de estrutura
console.log('Fim!')
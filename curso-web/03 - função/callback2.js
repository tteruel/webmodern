const notas = [7.8, 6.1, 6.6, 6.8, 8.0, 9.7, 7.3]

// sem callback
let notasBaixas = []

for(let i = 0; i < notas.length ;i++){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
    
}

console.log(notasBaixas)


//com callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)
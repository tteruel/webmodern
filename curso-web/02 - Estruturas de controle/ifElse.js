function ResultadoFinal(nota){
    if(nota  >= 7){
        console.log('Aprovado! Nota: '+ nota)
    } else {
        console.log('Reprovado! Nota: '+ nota)
    }
}

ResultadoFinal(7.3)
ResultadoFinal(6.9)
ResultadoFinal('EPA') //Cuidado, ele aceita o valor para comparacao e compila, porem entra no else
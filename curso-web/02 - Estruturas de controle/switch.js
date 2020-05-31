function imprimeResultado(nota){
    switch(Math.floor(nota)){ // Arredonda a onta
        case 10: // não é necessario repetir a sequencia de código
        case 9: 
            console.log(Math.floor(nota), 'Quadro de honra!')
            break // sair sem executar os debaixo
        case 8:
        case 7:
            console.log(Math.floor(nota), 'Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log(Math.floor(nota), 'Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log(Math.floor(nota), 'Reprovado')
            break
        default: 
            console.log('Nota inválida!')
    }
}

imprimeResultado(10)
imprimeResultado(8.9)
imprimeResultado(6.65)
imprimeResultado(4.33)
imprimeResultado(3)
imprimeResultado(0)
imprimeResultado(11)
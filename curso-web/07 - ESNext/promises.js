function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // é a situação de sucesso / aceita apenas um parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'que legal!!')
    .then(frase => frase.concat('?!?!?!'))
    .then(outrafrase => console.log(outrafrase))
    .catch(erro => console.log(erro)) // tratando o reject
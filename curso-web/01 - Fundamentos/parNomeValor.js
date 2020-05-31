const saudacao = 'Olá' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    altura: 1.90,
    idade: 29,
    endereco: {
        logradouro: 'Rua Josep',
        numero: '127'
    }

}

console.log(saudacao)
console.log(exec())

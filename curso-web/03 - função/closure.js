// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função


// contexto lexico em ação

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())
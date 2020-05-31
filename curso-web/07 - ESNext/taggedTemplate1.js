// Tagged Template - processar uma template string em uma função
function tag (partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'AProvado'
console.log(tag `${aluno} está ${situacao}!`)
const sequence = {
    _id: 1,
    get id(){ return this._id++}
}

const produtos ={}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function deleteProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

function SaveDB(produtos) {
    fs.writeFile(__dirname + '/DB.json', JSON.stringify(produtos), err => {
        console.log(err || 'Arquivo Salvo!!') // se erro for null(falso) ele retorna para o segundo operando 
    })
}

function loadDB() {
    fs.readFile(caminho, 'utf-8', (err, conteudo) => { // manda um callback e quando o arquivo estiver carregado ele manda de volta
        // const config = conteudo - nesse caso o config gera uma string e não um objetoe invalida  o console.log de baixo
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    })
}
module.exports = {salvarProduto, getProduto, getProdutos, deleteProduto}
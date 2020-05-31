const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono... - não é muito interessante pois ele lê o arquivo completamente antes de retornar
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)


//asincrono - interessante

fs.readFile(caminho, 'utf-8', (err, conteudo) => { // manda um callback e quando o arquivo estiver carregado ele manda de volta
    // const config = conteudo - nesse caso o config gera uma string e não um objetoe invalida  o console.log de baixo
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // imprime primeiro esse pois ele é executado de forma sincrona e o outro não, aqui ele retorna o objeto
console.log(config.db)

// ler todo o diretório

fs.readdir(__dirname, (err, arquivos)=> {  //__dirname está presente no node e representa o diretório atual
    console.log('Conteudo de Pasta...')
    console.log(arquivos) // retornou um array com todos os arquivos do diretório
})
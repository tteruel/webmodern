const anonimo = process.argv.indexOf('-a') !== -1 //parametro de inicialização "node arquivo.js -a"
if (anonimo){
    process.stdout.write('Fala anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome:\n')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Falaaa ${nome}!!`)
        process.exit()
    })

}


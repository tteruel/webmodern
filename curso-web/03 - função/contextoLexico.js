const valor = 'Global' 

function minhaFuncao(){
    console.log(valor) // como não encontra local a variável valor, ele procura dentro do contexto lexico que ela foi definida, 'Global, não o de execução
}

function exec(){
    const valor = 'legal'
    minhaFuncao()
}


exec()
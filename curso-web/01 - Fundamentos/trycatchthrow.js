function tratarErroELancar(erro){
    // throw new Error (10)
    // throw 'mensagem'
    // throw 10
    // throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
    console.log(obj.name.toUpperCase() + '!!!!')
    } catch(e){
        tratarErroELancar(e)
        } finally{ // será chamado mesmo se der certo o try e depois de passar pelo catch

            console.log('Final')
        }
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)
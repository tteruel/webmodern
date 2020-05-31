Array.prototype.forEach2 = function(funccallback){ // função call back de parâmetro
    for(let i = 0; i < this.length; i++){
        funccallback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Jon', 'Bruno', 'houa']

aprovados.forEach2(function(nome, indice, array, x){ // recebe 3 parametros, o x fica undefined
    console.log(`${indice + 1}: ${nome}.`)
})
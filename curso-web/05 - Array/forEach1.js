const aprovados = ['Agatha', 'Jon', 'Bruno', 'houa']

aprovados.forEach(function(nome, indice, array, x){ // recebe 3 parametros, o x fica undefined
    console.log(`${indice + 1}: ${nome}.`)
    console.log(array)
})


aprovados.forEach(nome => console.log(nome)) // imprime apenas o nome - arrow function

const exibirAprovados = aprovado => console.log('exibirAprovados: ', aprovado)
aprovados.forEach(exibirAprovados)
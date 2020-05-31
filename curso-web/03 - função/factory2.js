function criarProduto(nome, valor){
    
    return {
        nome,
        valor,
        desconto: valor*0.05
    }
}

console.log(criarProduto('Celular', 5000))
console.log(criarProduto('Notebook', 6000))
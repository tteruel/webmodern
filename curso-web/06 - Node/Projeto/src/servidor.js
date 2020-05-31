const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodeDados = require('./bancoDeDados')

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1....')

//     next()
// })

// app.use((req, res, next) => {
//     res.send({ nome: 'Notebook', preco: 123.45 })  // metodo send converte para JSON automaticamente
// })

app.use(bodyParser.urlencoded({ extended: true})) // para poder receber o get ele precisa do url enconded para aplicar isso e transformar o que recebeu em objetono

app.get('/produtos', (req, res, next) => { // caso não utilize o next, pode ser removido dos parametros
    res.send(bancodeDados.getProdutos())  // metodo send converte para JSON automaticamente
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancodeDados.getProduto(req.params.id))  // metodo send converte para JSON automaticamente
})

app.post('/produtos', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodeDados.deleteProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta -> ${porta}`)
})
const express = require('express')
const app = express()
const bodyparser = require('body-parser')


app.use(bodyparser.urlencoded({extended:true})) // Body parser é extremamente importante pq ele pega o corpo da requisição e o faz ler para que o oserver.js utilize. no caso logo abaixo
app.get('/usuarios', (req, resp)=> {
    console.log(req.query)
    // resp.send('<h1>Parabéns, usuário incluido!</h1>')
})

app.post('/usuarios', (req, resp)=> {
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário incluido!</h1>')
}) // no arquivo o método é post e acessa usuários

app.post('/usuarios/:id', (req, resp)=> {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário alterado!</h1>')
}) // no arquivo o método é post e acessa usuários
app.listen(3003)
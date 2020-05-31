const pessoa = {
    nome: 'Teste',
    falar(){
        console.log(this.nome) // neste contexto caso tire o this ele não funciona, pois não encontra a variavel nome
    }
}

pessoa.falar()

const falar = pessoa.falar

falar() // conflito entre paradigmas: funcional e OO

const falardePessoa = pessoa.falar.bind(pessoa)

falardePessoa()




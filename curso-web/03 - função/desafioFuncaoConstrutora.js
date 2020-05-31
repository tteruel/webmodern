function Pessoa(nome){
    this.nome = nome // se não usar o this aqui, vc não tem mais acesso à variavel depois
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}!!`)
    }
}


const p1 = new Pessoa('João')
p1.falar()

const p2 = new Pessoa('Zé')
p2.falar()
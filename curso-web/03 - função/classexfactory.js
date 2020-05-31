
// a partir de classe
class Pessoa{
    constructor(nome) {
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p1 = new Pessoa ('João')

p1.falar()

// a partir de função
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}!`)
    }
}

const p2 = pessoa('Zé')
p2.falar()
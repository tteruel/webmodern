// usando a notação literal
const obj1 = {}

console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object

console.log(obj2)

//Funções construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

console.log(typeof Produto, typeof new Produto)
const p1 = new Produto('Caneta', 2, 0.1)

console.log(p1.preco)
console.log(p1.getPrecoComDesconto())
console.log(p1.nome)


// função factory
function criarFuncionario (nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30)*(30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(`${f1.nome}: ${f1.getSalario()}`)
console.log(`${f2.nome}: ${f2.getSalario()}`)


//Object.create

const filha = Object.create(null)

filha.nome = 'Ana'
console.log(filha)


// Função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')

console.log(fromJSON.info)
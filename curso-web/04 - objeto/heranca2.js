Object.prototype.attr0 = 'BISAVO' // Avo aponta para object.prototype
const avo ={ attr: 'Avo'}
const pai ={ __proto__: avo, attr2: 'Pai', attr4: 'PAI2'}
const filho ={__proto__: pai, attr3: 'Filho', attr4: 'FILHO2'}

console.log(filho.__proto__.__proto__.attr)
console.log(filho.__proto__.attr)  // Pai tem o attr
console.log(filho.attr)
console.log(filho.attr0)  // undefined

console.log(filho.attr0, filho.attr, filho.attr2, filho.attr3, filho.attr4) // attr4 não chega no pai pois ele já encontra no filho -  se chama SOMBREAMENTO

// Protótipo
const carro ={
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){ return `${this.velAtual} km/h de ${this.velMax} km/h`}
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //Shadowing
}


const volvo ={
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // se usar o this, ele vai invocar de forma recursiva o mesmo método. assim ele chama o método do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) /// Ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari)
console.log(volvo)
ferrari.acelerarMais(90)
volvo.acelerarMais(110)
console.log(ferrari.status())
console.log(volvo.status())

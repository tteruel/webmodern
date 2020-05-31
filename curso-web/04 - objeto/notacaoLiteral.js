const a = 1
const b = 2
const c = 3
const obj1 = {a: a, b: b, c: c} // não é mais necessário fazer assim
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeattr = 'Valor'
const valorattr = 12378
const obj3 = {}
obj3[nomeattr] = valorattr
console.log(obj3)

const obj4 = {[nomeattr]: valorattr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //.....
    },
    funcao2() {  // forma reduzida na versão mais nova do JS
        //.....
    }
}

console.log(obj5)

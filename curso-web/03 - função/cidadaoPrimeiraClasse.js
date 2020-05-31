//função em JS é first class object (citizen)
//Higher order function
// isso quer dizer que a linguagem trata a função como um dado

// criar da forma literal
function fun1(){ }

//armazenar em uma variável
const fun2 = function(){}

//armazenar em um array
const array = [function (a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em atributo de objetos
const obj ={}
    obj.falar = function () {return 'Opa'}

console.log(obj.falar())

function run(fun){
    fun()
}
run(function () {console.log("Função como parametro de função!!")})

//uma função pode retornar/ conter uma função

function soma(a, b){
    return function (c){ console.log(a + b + c)}
}

soma(2, 3)(4)  // como o retorno é uma função, vc adiciona o segundo abre e fecha parenteses
const ab = soma(2, 3)
ab(4) // assim tbm pode ser feito
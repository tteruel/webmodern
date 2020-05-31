let dobro = function (a){
    return a * 2
}
console.log(dobro(Math.PI))

dobro = a => {
    return a * 2
}
console.log(dobro(Math.PI))

dobro = a => 2*a // Nome_Função = Parametro_recebido => Return

console.log(dobro(Math.PI))


let ola = function(){
    return 'Olá'
}

console.log(ola())

ola = () => 'Olá'
console.log(ola())

ola = _ => 'Olá' // Pode ser feito tbm, possui um param

console.log(ola())
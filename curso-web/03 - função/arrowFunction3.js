let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {} // criar um objeto
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
// o This funciona diferente quando a função é arrow
comparaComThisArrow(global)

comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
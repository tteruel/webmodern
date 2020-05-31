// v e v = v
// v e f = f
// f e v = f
// f e f = f

// v ou v = v
// v ou f = v
// f ou v = v
// f ou f = f

// v xor v = f
// v xor f = v
// f xor v = v
// f xor f = f

// !v = f
// !f = v

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // OU
    const comprarTv50 = trabalho1 && trabalho2 // AND
    const comprartvcomum = trabalho1 != trabalho2 // diferente simula XOR
    const manterSaudavel = !comprarSorvete 

    return { comprarSorvete, comprarTv50, comprartvcomum, manterSaudavel}// return de objeto
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

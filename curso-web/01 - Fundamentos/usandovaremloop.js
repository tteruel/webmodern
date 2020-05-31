
console.log("Parte 1 ------------------------------------------------")
for(var i = 0; i < 10; i++){
    console.log(i)
}


console.log("Parte 2 ------------------------------------------------")
// Parte 2  de usando var em loop

const funct = []

for (var i = 0; i < 10; i++){
    funct.push(function() {
        console.log(i)
    })

}

funct[2]()
funct[8]()
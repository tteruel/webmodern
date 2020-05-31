console.log("Parte 1 ------------------------------------------------")

for(let i = 0; i < 10; i++){

}
console.log("Parte 2 ------------------------------------------------")

const funct = []

for (let i = 0; i < 10; i++){
    funct.push(function() {
        console.log(i)
    })

}

funct[2]()
funct[8]()
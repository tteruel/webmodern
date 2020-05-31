function area (largura, altura){
    const area = largura* altura
    if(area > 20){
        console.log(`Area acima do permitido ${area} M²`)
    }else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area(5, 5)) // nesse caso não tem retorno por estar acima de 20m2
console.log(area(6, 2, 3))
console.log(area())
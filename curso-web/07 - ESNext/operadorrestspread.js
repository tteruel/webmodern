// Operador Rest (juntar)// Spread(Espalhar)
//Usar rest com parâmetro de função


// Usar spread com objeto
const funcionario ={ nome: 'Maria', salario: 12356}
const clone ={ ativo: true, ...funcionario} // pega os atributos de funcionário e espalha em clone

console.log(clone)

// Usar spread com array
const grupoA = ['José', 'Maria', 'Robson']
const grupoB = ['Rafaela', 'João', ...grupoA]

console.log(grupoB)
const moduloA = require('../../MODULOA')// tomar cuidado, pois windows e MAC funcionaria, porém em linux não
//const moduloB = require('D:\Dev-proj\exercicios-js\Node\modulob.js') // utilizando o copy path do node -  botão direito no modulo -> copy path
// ^^^^ dessa forma ele prende no path absoluto e vc pode ter dificuldade com diferentes plataformas

console.log(moduloA.bemVindo)
const c = require('./pastac') // pode importar sem referenciar o index

console.log(c.ola2) // pasta c


const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.write(moduloA.bemVindo)
    res.write(c.ola2)
    res.end()
}).listen(8080)
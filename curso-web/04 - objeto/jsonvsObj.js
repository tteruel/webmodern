const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, soma() { return a + b + c + d + e}}

console.log(JSON.stringify(obj)) // função soma é excluida do JSON, pq ele só pega os dados
//console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // assim é valido o JSON

console.log(JSON.parse('{"a": 1.7, "b": "String Teste", "c": true, "d": {}, "e": []}')) // o texto tem que ser delimitado por aspas duplas ""

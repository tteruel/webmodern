const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const getGenero = funcionario => funcionario.genero == 'F'
const getPais = funcionario => funcionario.pais == 'China'
const getMenorSalario = (funcAcumulador, funcAtual) => funcAcumulador.salario < funcAtual.salario ? funcAcumulador : funcAtual

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(getGenero).filter(getPais).reduce(getMenorSalario))
})

//Obter mulher chinesa com menor salário




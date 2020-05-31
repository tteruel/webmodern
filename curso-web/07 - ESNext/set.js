// não aceita repetição / Não aceita repetição
const times = new Set()
times.add('vasco')
times.add('São Paulo').add('Sem Mundial').add('Rebaixado')
times.add('Flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('palmeiras tem mundial?'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Rqeuel' ,'joão', 'lucas', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

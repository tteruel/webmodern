const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 7', function (){
    console.log('Exwecutando tarefa 1', new Date().getSeconds())
}) // executar de 5 em 5 segundos 


setTimeout(function() {
    tarefa1.cancel()
    console.log('cancelando tarefa1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 12
regra.second = 30
//setImmediate
// setInterval
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Exwecutando tarefa 2', new Date().getSeconds())
})
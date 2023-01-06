//opret server med express
const express = require('express')

const app = express()

const port = 1871

app.use('/', express.static('public'))

const server = app.listen(port, ()=>{
    console.log('server lytter på: http://localhost: ' + port)
})
//opret en socket
const io = require('socket.io')
const serverSocket = io(server)



let players = []

//alt snak med klienterne sker på connection
serverSocket.on('connection', socket =>{
    //der kommer en ny spiller
    console.log('ny spiller forsæger at komme ind, der er i forvejen: ' + players.length + 'spillere')
    //vi putter spillerens id ind i players arrayet
    players.push({'id': socket.id })
    console.log(players.length)
    //er der plads til flere spillere
    if(players.length > 2){
        socket.emit('join',false)
        socket.disconnect()
    }else{
        socket.emit('join', true)
    }
    //lav noget der tjekker hele tiden?. ellers når spillet er slut

})
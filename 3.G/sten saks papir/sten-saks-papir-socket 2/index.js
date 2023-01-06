//opret server med express
const express = require('express')
const app = express()
const port = 4444
app.use('/', express.static('public'))
const server = app.listen(port, ()=>{
    console.log('server lytter på adressen: http://localhost:' + port)
})
//opret en socket 
const io = require('socket.io')
const serverSocket = io(server)

let players = []

let numPlayers = 0
let numNames = 0
let numChoice = 0

//Der kommer en ny klient - og serveren møder den her
serverSocket.on('connection', socket => {
    console.log('ny player, id: ' + socket.id)
    numPlayers++
    //er der plads tiln flere spillere?
    if(numPlayers <= 2){
        //hvis ja, så lægger vi spilleren til i arrayet
        players[socket.id] = {
            'id': socket.id
        }
        //og sender en besked om han/hun/hen er inde og med 
        socket.emit('welcome', true)
    }else{
        //ellers sender vi en afvisning
        socket.emit('welcome', false)
        //vi skal lige huske at tælle en spilelr mindre 
        numPlayers--
        //og disconnecter denne socket 
        socket.disconnect()
    }

    //Vi indsætter spillerens navn i arrayet
    socket.on('name', message => {
        players[socket.id].name = message
        numNames++
        if(numNames == 2){
            serverSocket.emit('play', true)
        }
    })

    socket.on('disconnect', socket => {
        numPlayers--
        console.log('Der var en der smuttede')
        console.log('Nu er der ' + numPlayers + ' tilbage');

        players = players.filter(p => p.id != socket.id)
    })
})
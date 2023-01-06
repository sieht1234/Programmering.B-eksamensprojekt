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

//Der kommer en ny klient - og serveren møder den her. når nogen åbner hjemmesiden kommer de derind
serverSocket.on('connection', socket => {
    console.log('ny spiller, id: ' + socket.id)
    numPlayers++
    console.log('Der er nu: ' + numPlayers + ' spillere')
    //er der plads til flere spillere
    if(numPlayers <= 2){
        //hvis ja lægger vi spilleren til i arrayet
        players[socket.id] = {
            'id':socket.id
        }
        //og sender en besked om han/hun er inde og med, på emnet welcome
        socket.emit('welcome', true)

    }else{
        //ellers sender vi en afvisning
        console.log('der var sku ikke plads vi smider spilleren ud igen')
        socket.emit('welcome', false)
        //vi skal huske at tælle en spiller mindre
        numPlayers--
        console.log('nu er der ' + numPlayers + ' tilbage')

        //og disconnecter socket
        socket.disconnect()
    }
    //når vi modtager navne fra spilleren
    socket.on('name', message =>{
        //lægger vi en egenskab, der hedder name til spilleren i arrayet
        players[socket.id].name = message
        numNames++
        if(numNames == 2){
            serverSocket.emit('play', true)
        }
    })

    //når vi får et valg
    socket.on('choice', message =>{
        numChoice++
        players[socket.id].choice = message
        if(numChoice == 2){
            //regne ud hvem der har vundet
            //sæt en vinder variable
            let winner
            //vi siger at den der lige har sendt sit valg har vundet
            //udelukkelsesmetoden
            //vi skal først hente de to spillere i arrayet
            let player1 = players.filter(p => p.id == socket.id)
            //den som ikke har det ID vi får er player 2
            let player2 = players.filter(p => p.id != socket.id)

            winner = player1
            //der er draw hvis de har valgt det samme
            if(player1.choice == player2.choice){
                winner = {
                    'name':'draw',
                    'choice': player1.choice
                }
            }
            //eller player2, hvis han har vundet vha et af følgende scenarier
            if(player1.choice == 'paper'&& player2.choice == 'scissor'){
                winner = player2
            }
            if(player1.choice == 'stone'&& player2.choice == 'paper'){
                winner = player2
            }
            if(player1.choice == 'scissor'&& player2.choice == 'stone'){
                winner = player2
            }
            serverSocket.emit('result', winner)


        }
    })

    //når nogen lukker browseren
    socket.on('disconnect', socket=>{
        numPlayers--
        console.log('ups der var en der smuttede')
        console.log('nu er der '+ numPlayers + ' tilbage')
        //fjern denne spiller fra array'et
        players = players.filter( p => p.id != socket.id)
    })
})

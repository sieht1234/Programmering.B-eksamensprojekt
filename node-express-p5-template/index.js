console.log('new node app is running')
//hent biblioteket ip
const ip = require('ip')
console.log(ip.address())

let colors = ['red', 'green', 'blue', 'navyblue']

//hent biblioteket socket.io for at lave en websocket
const socketLib = require('socket.io')
//vælg en port
const port = 1776
//opret en variable der indeholder express biblioteket. 
const express = require('express')
//() initialiser app objektet
const app = express()
//laver et json-array objekt til brugere
let user = []
//start serveren og lyt på din port bror
const server = app.listen(port, ()=>{
    console.log('serveren kører på '+port)
})

//oprette en server websocket
const serverSocket = socketLib(server)
app.use('/', express.static('public'))

//opret et endpoint der returnerer endpointet
app.get('/ip', (req, res)=>{
    res.json(
        {
            'ip': ip.address(), 
            'port': port

        }
        )
})

serverSocket.sockets.on('connection', socket =>{
    console.log('new connection established')
    //socket.on er en eventlistener på nye beskeder fra klienter
    socket.on('chat', message =>{
        console.log(message)
        //når serveren modtager en besked sender den dem rundt til alle
        serverSocket.sockets.emit('newMessage', message)
    })
    socket.on('newUser', user =>{
        users.push({'name':user,'id':socket.id})
    })

})
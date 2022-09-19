//kommenter alle linjer i koden 
const express = require('express')
// vi henter express biblioteket
const app = express()
// vi definerer hvilken port vi skal hoste på
const port = 4000
//vi definerer at den skal bruge express biblioteket, og når man skriver havd som helst skal man ind på public
app.use('/', express.static('public'))
//Vi laver en konstant hvor express/app hvor vi laver en funktion med et parameter der er vores port. hvor vi kalder en funktion
const server = app.listen(port, () => {
  console.log('App listening on http://localhost:' + port)
})
// Vi laver en konstant, der skal ind og hente io biblioteket
const io = require("socket.io")
// vi laver en konstant serverSocket der skal bruge io, og lave en server
const serverSocket = io(server)

// Når serverScoket er koblet til med connection. vi lytter efter connections på websocketen, og vil have den til at gøre noget med en arrow funktioon. når der kommer en bruger kalder vi funktionen
serverSocket.on('connection', socket => {
  //når der kommer en user, loger vi det, og vores varible gemmer id'et 
  console.log('a user connected ' + socket.id)
  // sende en besked til denne ene socket. derfor 'private'
  socket.emit('private', 'Her er en privat besked med dit id ' + socket.id)
  //sender en besked til alle i alle sockets
  serverSocket.emit('everybody', 'Vi fik en ny klient med id ' + socket.id)
  // sender en besked til alle bortset fra den nye user
  socket.broadcast.emit('everybody else', 'Besked fra den nye socket id ' + socket.id)
  //når vi får en besked fra klienten, gør vi noget. 
  socket.on('fromClient', message => {
    console.log('Modtog besked: ' + message + ' på emnet fromClient')
    socket.emit('fromServer', 'Besked modtaget, tak for det.')
  })
})
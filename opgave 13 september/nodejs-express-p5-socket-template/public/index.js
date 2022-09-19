//kommenter alle linjer i koden
let clientSocket

// vi starter med det javascriptet skal loade 1 gang
function setup(){
    //vi laver clientSocket til io bibliotekt
    clientSocket = io.connect()
    //når den får en besked fra alle
    clientSocket.on('everybody', message => {
        console.log('Got message from server to all clients: ' + message)
    })
    //når den får en besked fra denne ene socket
    clientSocket.on('private', message => {
        console.log('Got private message from server: ', message)
    })
    //når den får en besked fra broadcast, fra serveren selv 
    clientSocket.on('fromServer', message => {
        console.log('Got reply from server: ', message)
        select('#answer').html(message)
    })
    //man tager fat i et html element der hedder someButton, og laver en event ud fra det. så når mussen bliver trykket på someButton sender vi fra klienten til serveren.
    select('#someButton').mousePressed(()=>{
        clientSocket.emit('fromClient', 'Hej med dig server')
    })
}
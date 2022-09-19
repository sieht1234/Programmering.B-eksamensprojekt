
let clientSocket
let state = 'enterName'

function setup(){

    frameRate(60)
    
    createCanvas(windowWidth, windowHeight)
    background('gray')
    select('#info').html('sådan skriver man noget i html')
    //fetch serverIP from node endpoint
    
    fetch('http://localhost:1776/ip')
    .then(res => res.json())
    .then(data => {
        select('#info').html(data.ip)
    })
    //io kommer fra socket.io biblioteket
    clientSocket = io.connect()
    clientSocket.on('newMessage', message =>{
        let p = createElement('P', message)
        select('#chat').child(p)
        select('#chat').select.scrollTop = select('#chat').select.scrollHeight
    })
    select('#nameButton').mouseReleased(()=>{
        console.log('ny bruger sendt til server')
        clientSocket.emit('newUser', select('#name').value())
        select('#nameBox').addClass('hide')
        select('#chatBox').removeClass('hide')
    })
}
function keyPressed(){
    if(key == 'Enter'){
        let message = select('#message').value()
        //emit tager et emne og noget data
        clientSocket.emit('chat',message)
        select('#message').value('')
    }
}


function draw(){
    //mouseX mouseY frameCount map//
    
}

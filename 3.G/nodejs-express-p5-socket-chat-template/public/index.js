
let clientSocket
let chatHistory 
let myName
let message
function setup(){
    //spørg serveren om en socket forbindelse
    clientSocket = io.connect()
    //modtag array med chat historik
    clientSocket.on('history', history => {
        console.log('modtog chathistorik: ', history)
        //indsæt historikken i HTML elementet 
        select('#chatBox').html(history)
    })
    //når brugeren trykker ok på navnesiden
    select('#okButton').mousePressed(()=>{
        //Hvis der er skrevet et navn i input feltet
        if(select('#nameInput')!=''){
            //gem brugernavnet i din variabel
            myName = select('#nameInput').value()
            select('#namePage').addClass('hidden')
            select('#chatPage').removeClass('hidden')
            //din kode her - se flowchart
        }
    })

    select('#sendButton').mousePressed(()=>{
        let mes = select('#chatMessage').value()
        let sendMes = {
            "name": myName,
            "message": mes
        }
        clientSocket.emit('chatMessage', sendMes)

    })

    clientSocket.on('chatMessage', chatMessage => {
        console.log('modtog chatmessage: ', chatMessage)
        //indsæt historikken i HTML elementet 
        select('#chatBox').html(chatMessage)
    })

}
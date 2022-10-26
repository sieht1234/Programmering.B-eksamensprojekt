let clientSocket


function setup(){
    noCanvas()
    //log på serveren
    clientSocket = io.connect()
    //vi venter på en besked om du er med eller må vente

    clientSocket.on('join', ok =>{
        if(ok){
            select('#name').addClass('show')

        }else{
            select('#reject').addClass('show')
        }
    })


}

function draw(){

}
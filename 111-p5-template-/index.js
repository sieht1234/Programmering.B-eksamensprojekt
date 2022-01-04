


function setup(){
    frameRate(60)
    
    createCanvas(windowWidth, windowHeight)
    background('gray')
    select('#info').html('sådan skriver man noget i html')
}

function draw(){
    //mouseX mouseY frameCount map//
    
}
function mousePressed(){
    select('#info').html('vi har response!')

}
function mouseReleased(){
    select('#info').html('Houston til tårnet, vi mistede musen')

}

function keyPressed(event){
    select('#info').html('hovsa der blev trykket: ' + event.key)

}
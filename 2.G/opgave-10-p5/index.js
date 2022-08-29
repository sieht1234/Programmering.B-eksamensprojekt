
/*let info = document.querySelector('#info')
info.innerHTML = 'houston til tårnet'*/


/*let info = select('#info')
info.html = ('houston til tårnet')*/


/*function setup(){
    console.log('nu bliver der sat noget op mester')
    console.log('vinduet er' + windowHeight + 'pixels højt' + windowWidth + 'px bredt')
}

function draw(){
    console.log('nu køres der draw')
    console.log ('musen er ved x og y: ' + mouseX + ',' + mouseY)
}*/


function setup(){
    createCanvas(windowWidth, windowHeight)
    background('darkGray')
    //ellipse(50, 50, 80, 100)//

}

/*function draw(){
    select('#info').html(mouseX + ',' + mouseY)
    fill('red') 
    stroke('darkRed')
    //ellipse(mouseX,mouseY , 80, 100 framecount)
    ellipse(mouseX, mouseY, frameCount % 60)
}*/

function draw() {
    let green = map(mouseX, 0, windowWidth, 0, 255)
    fill(0, green, 0)
    ellipse(mouseX, mouseY, 20)
    
}

















/*function setup(){
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

}*/
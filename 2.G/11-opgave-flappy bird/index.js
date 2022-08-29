let x,y, diameter
let gravity = 1
let friction = 0.99
let velocity = 0
let opdrift = 20
let rectX, rectY, rectW, rectH
let rectSpeed = 10
let score = 10
/*let eli1
let rect1
let col*/


let totalTime
let timeLimit = 15 //tid du har
let splashTime
let gameTime





function setup(){    
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    background('gray')
    x = windowWidth/2
    diameter = 32
    y = diameter/2
    rectW = 20
    rectH = 100
    rectX = windowWidth
    rectY = windowHeight - rectH
    /*eli1 = ellipse(x, y, diameter)
    rect1 = rect(rectX, rectY, rectW, rectH)
    col = color(255)*/
}

function showRect(){
  rect(rectX, rectY, rectW, rectH)
  rect(rectX, 0, rectW, rectH)
    
}

function updateRect(){
    rectX -= rectSpeed
    if(rectX <= 0 ){
        rectX = windowWidth
        rectH = random(100, 350)
        rectY = windowHeight - rectH
        select('#info').html(score)
        score += 1
    }

}

function show(){
    ellipse(x, y, diameter)
    //fill(col)
    
    

}

function update(){
    velocity += gravity
    //+=  er det samme som y=y + gravity//
    velocity *= friction
    y += velocity

    if(y>windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
    }

    


}

function draw(){
    background('gray')
    // vi laver en background så den laver en ny baggrund, dermed sletter den boldens spor//
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)
    totalTime = millis() //starten af timer

    

    /*if (eli1.intersects(rect1)){
        eli1.changeColor()
        console.log(changeColor)
    }*/


    //timeren
    
    
    totalTime = int((totalTime)/1000) // her bliver seconder lavet om til en interger
    fill(255)
    stroke(0)
    strokeWeight(10)
    textSize(30)
    text('Tid tilbage:', 540, 50)
    text(timeLimit - totalTime, 700, 50)



    
}

function keyPressed(key){
    //en event er et json objekt vi får//
    console.log(key)
    if(key.key == ' '){
        //vi vil gerne åbne key inde i json//

        velocity-=opdrift

    }
}


/*function splash(){
    splashTime = totalTime
}*/

/*function changeColor(){
    eli1 = color(random(0, 255))
}*/

/*this.intersects = function(other){
    var d = dist(this.x, this.y, other.x, other.y)
    if (d < this.diameter + other.diameter){
        return true
    }else{
        return false
    }
}*/


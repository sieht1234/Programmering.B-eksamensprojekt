let x,y, diameter
let gravity = 1
let friction = 0.99
let velocity = 0
let opdrift = 20
let rectX, rectY, rectW, rectH
let rectSpeed = 10
let score = 0


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
    // vi laver en background så den, laver en ny baggrund, dermed sletter den boldens spor//
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)
    
}

function keyPressed(key){
    //en event er et json objekt vi får//
    console.log(key)
    if(key.key == ' '){
        //vi vil gerne åbne key inde i json//

        velocity-=opdrift

    }
}

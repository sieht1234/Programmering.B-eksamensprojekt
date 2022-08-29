let x, y, diameter
let gravity = 1
let friction = .97   
let velocity = 0
let updrift = 25
let rectX, rectY, rectW, rectH
let rectSpeed = 10
let score = 0
let bird1, bird2, bird3, bird4

const animRate = 40


function preload() {
    bird1 = loadImage('assets/bird1.png');
    bird2 = loadImage('assets/bird2.png');
    bird3 = loadImage('assets/bird3.png');
    bird4 = loadImage('assets/bird4.png');
    
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    background('darkGray')
    x = windowWidth/2
    diameter = 133
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
    if(rectX <= 0){
        rectX = windowWidth
        rectH = random(100, 300)
        rectY = windowHeight - rectH  
    }
}

function show(){
    ellipseMode(CENTER)
    imageMode(CENTER)
    //ellipse(x, y, diameter)
    image(bird1, x, y)
    //% betyder rest 10/4 = 2 eller 4/4 = 0. modolo gover os heltals resten. vi får en kurve (eller en tæller). Det vil gå op til det tal vi har skrevet
    let a = frameCount % animRate / 10
    if ( a <= 1)image(bird1, x, y)
    if ( a >= 1 && a < 2)image(bird2, x, y)
    if ( a >= 2 && a < 3)image(bird3, x, y)
    if ( a >= 4)image(bird4, x, y)
}

function update(){
    velocity += gravity
    velocity *= friction
    y += velocity 

    if(y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
        //score -=1
    }
    //loftet
    if(y < diameter/2){
        y = diameter/2
        velocity = -velocity
        score += 4
    }
    
}

function collission(){
    //cirklens nederste punkt er x,y + diameter/2 altså radius
    //det er omvendt for toppen

    if(x> rectX && x<rectX + rectW){
        if(y < rectH || y > windowHeight - rectH){
            score -= 1
        }
        // || = eller og skives med command i 
    }

}

function draw(){
    background('darkGray')
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)
    collission()
}

function keyPressed(key){
    if(key.key == ' '){
        velocity -= updrift
    }
}

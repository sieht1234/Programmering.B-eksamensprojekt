
let balls = []

function setup(){
    noCanvas()

    for(student in students){
        let b = new Ball(random (50), random(window.innerWidth), random(window.innerHeight), 'red', students[student], student)
        balls.push(b)
    }
    
}

function draw(){
    background('red')
    balls.map(item => {
        item.show()
        item.update()
        if(frameCount % 23 == 0){
            item.up(random(10))
        }
    })
    
}

function keyPressed(key) {
    console.log(key)
    if(key.key == ' '){
        balls.map(item => item.up())
    }
}

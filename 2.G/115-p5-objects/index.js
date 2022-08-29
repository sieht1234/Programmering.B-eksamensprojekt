
let students = ['mie', 'bjarke', 'marius', 'frederik', 'sofus', 'bjørn', 'viktor', 'andreas', 'theis']
let balls = []

function setup(){
    createCanvas(400, 400)
    background('red')
    students.map(item => {
        let b = new Ball(random(10, 40), random(width), random(height), 'white', item)
        balls.push(b)
    })
    
}

function draw(){
    background('red')
    balls.map(item => {
        item.show()
        item.update()
    })
    
}

function keyPressed(key) {
    console.log(key)
    if(key.key == ' '){
        balls.map(item => item.up())
    }
}


let circles = []
let number = 10
let size = 20

function setup(){
    createCanvas(windowWidth, windowHeight)
    //bruger et loop, fordi det skal gøre det 
    for (let i = 0; i < number; i++ ){
        //laver vektorer til bolden, bruger positionen, hastigheden og accelerationen i den rækkefølge
        circles[i] = new Circle(createVector(25, 25), createVector(6,0), createVector(0,2))
        
    }
}

function draw(){
    background(255)
    strokeWeight(25)
    //laver et loop til hver bold, at funktionerne skal kaldes
    for ( let ball of circles){
        //kalder funktionerne i class Circle
        ball.show()
        ball.move()
        ball.walls()

    }
}

//laver en klasse der hedder bolde
class Circle{
    constructor(p,v,a){
    this.p = p
    this.v = v
    this.a = a
    }
    show(){
        //laver en bold, på dets position
        point(this.p.x, this.p.y)
    }
    move(){
        //bruger p5js funktionen add() til at lægge vores parameter v med a
        this.v.add(this.a)
        this.p.add(this.v)
    }
    //laver en funktion til kanterne af brower vinduet
    walls(){
        //håndterer om vores y-position er større end browservinduets højde
        if(this.p.y>windowHeight-size/2){
            //hvis det er skal hastigheden "flippes"
            this.v.y*=-1
        }
        //håndterer om vores position er større end browservinduets bredte
        if(this.p.x>windowWidth-size/2 || this.p.x <=0+size/2 ){
            this.v.x*=-1
        }
    }
}
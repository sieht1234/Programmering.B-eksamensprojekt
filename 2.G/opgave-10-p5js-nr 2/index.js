console.log('scripted loaded')


let r
let g
let b
let a

function setup(){
    frameRate(60)
    console.log('setup')
    createCanvas(windowWidth, windowHeight)
    background('gray')
    

}

function draw(){
    select('#info').html(frameCount % 60)
    //procent tegnet er det samme som rest når man dividere. procenttegnet hedder modolo//

    let green = map(mouseX, 0, windowWidth, 0, 255)
    fill(0, green, 0)
    ellipse(mouseX, mouseY, 20)
    ellipse(mouseX, mouseY, frameCount % 60)

    r = Math.floor(Math.random()*256) + 1
    g = Math.floor(Math.random()*256) + 1
    b = Math.floor(Math.random()*256) + 1
    a = Math.floor(Math.random()*256) + 1
    
    //mouseX mouseY frameCount

    let xColor = map(mouseX, r, g, b, a)
    //den anden scala er farveværdi
    

    stroke(xColor, r, g, b, a)

    noFill()
    //koordinatsystemet starter i venstre hjørne i toppen//
    rect(mouseX, mouseY, frameCount % 60)
    //modolo får cirklen til at vokse indtil den har talt til 60//
    

}

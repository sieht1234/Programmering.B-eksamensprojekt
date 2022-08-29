
let country



function setup(){
    
    country = {
        name: 'Denmark',
        government: 'democratic',
        officialTitle: 'the kingdom of Denmark'
       }
       
    createCanvas(windowWidth, windowHeight)
    background('gray')
    console.log(country)
}

function draw(){
    
    loop(text(country.name, 20, 50),text(country.government, 0, 50) )
    

    //mouseX mouseY frameCount map//
    
}

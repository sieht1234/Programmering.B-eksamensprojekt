
let data

function preload(){
    data  = loadJSON("countries_with_capitals.json")
}


function setup(){
    noCanvas()
    
    let country = data.countries
    console.log(data)

   
    
for (let i = 0; i < country.length; i++) {
    createElement('h1', country[i].name)
    let capital = country[i].capital
    for (let j = 0; j < capital.length; j++) {
      createDiv(capital[j])
        
        
    }
    
}

}

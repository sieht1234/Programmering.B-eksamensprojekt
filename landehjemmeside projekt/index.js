

let data

fetch('./data/lande.json')
.then( res => res.json() )
//when the passing is done we get the json object into a arrival. Vi kunne kalde det alt
.then (json => {
    console.log(json)

    })
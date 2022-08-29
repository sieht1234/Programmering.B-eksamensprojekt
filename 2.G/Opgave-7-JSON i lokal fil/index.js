

let data

//asynkron funktioner

fetch('./data/artifact.json')
    //res = response
    .then( res => res.json() )
    .then (json => {
            console.log(json)
            console.log(json)
            data = json.artifacts
            document.querySelector('#title').innerHTML = json.description
            //document.querySelector('#title').innerHTML = json.description


            
            json.artifacts.map( artifacts => {
                newCard(artifacts)
            })

        }  )


     //document.querySelector('#input').addEventListener('input', () =>{
            //let result = data.filter (artifacts => artifacts.name.includes(document.querySelector
            //('#input'.value)))
            //document.querySelector('main').innerHTML=''
            //result.map(artifacts => newCard(artifacts))
        //})

        //document.querySelector('#searchicon').addEventListener('click', () =>{
          // document.querySelector('#searchbar').classList.add('show')
        //})

        //document.querySelector('#close').addEventListener('click',() =>{
           // document.querySelector('#searchbar').classList.remove('show')
        //} )
        //document.querySelector('#close').addEventListener('click',() =>{
          //  document.querySelector('#searchbar').classList.remove('show')
        //} )
    
    
        //document.querySelector('#input').addEventListener('input', () => {
            //let result = data.filter(artif =>artif.name.includes(document.
            //    querySelector('#input').value ))
            //document.querySelector('main').innerHTML = ''
            //result.map (artif => newCard(artif))
        //})
        
        //kan ikke lave en funktion i asynkron
    const newCard = (artif) =>{
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let lel = document.createElement('div')
        let nede = document.createElement('div')
        //card er dens klasse
        card.classList.add('card')
        lel.classList.add('members')
        //nede.classList.add('mem')
        heading.innerHTML = artif.name
        lel.innerHTML = artif.synonyms
        lel.innerHTML = artif.qualities
        nede.innerHTML = artif.nature
        
        
        card.append(heading)
        card.append(lel)
        card.append(lel)
        card.append(nede)

        
        
        let list = ''
        artif.synonyms.map(synonyms =>list += '<li>' + synonyms + '</li>')
        artif.qualities.map(qualities =>list += '<li>' + qualities + '</li>')
        
        document.querySelector('main').append(card)
        lel.innerHTML = list
        

        
    }

    
    



let data

//asynkron funktioner

fetch('./data/birds.json')
    //get the response object and pass it into JSOn 
    //res = response
    .then( res => res.json() )
    //when the passing is done we get the json object into a arrival. Vi kunne kalde det alt
    .then (json => {
            console.log(json)
            //kig på json file, vi henter den første "familie. Birds, og henter underfamilien members og husk det starter med 0,1,2"
            console.log(json)
            data = json.birds
            document.querySelector('#title').innerHTML = json.description
            //document.querySelector('#title').innerHTML = json.description


            //hver bird har en string og et array
            json.birds.map( bird => {
                newCard(bird)
            })

        }  )



        
        //kan ikke lave en funktion i asynkron
    const newCard = (bird) =>{
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let members = document.createElement('div')
        //card er dens klasse
        card.classList.add('card')
        members.classList.add('members')
        heading.innerHTML = bird.family
        members.innerHTML = bird.members
        card.append(heading)
        card.append(members)
        let list = ''
        bird.members.map(members =>list += '<li>' + members + '</li>')
        document.querySelector('main').append(card)
        members.innerHTML = list
    }

    document.querySelector('#searchicon').addEventListener('click',() =>{
        document.querySelector('#searchbar').classList.add('show')
    } )
    document.querySelector('#close').addEventListener('click',() =>{
        document.querySelector('#searchbar').classList.remove('show')
    } )

    //løber hvert bird og leder efter hvilke betingelser. Leder f.eks et c og leder igennem arrayet
    //dette er en funktion
    document.querySelector('#input').addEventListener('input', () => {
        let result = data.filter(bird =>bird.family.includes(document.
            querySelector('#input').value ))
        document.querySelector('main').innerHTML = ''
        result.map (bird => newCard(bird))
    })
    


let data

fetch('countries_with_capitals.json')

.then( res => res.json() )
    .then (json => {
           
            console.log(json)
            data = json.countries_with_capitals
            document.querySelector('main').innerHTML = json.description
           

            
            json.countries.map( countries => {
                    let nc =document.createElement('div')
                    nc.classList.add('card')

                    nc.innerHTML = '<h2>' + countries.name + '</h2>'
                    document.querySelector('main').append(nc)
            })
        }  )


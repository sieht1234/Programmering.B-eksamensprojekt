let nameList = ['blackjack', 'poker', 'rolette','chips', 'maskiner']
let body = document.querySelector('body')
let main = document.querySelector('main')

let search = document.querySelector('#search')


let newElement = document.createElement('div')
newElement.classList.add('blackjack')





const makeCards = array => {

    array.map( name=> {
        let card = document.createElement('div')
        card.classList.add('card')
    
        let top = document.createElement('div')
        top.classList.add('top')
    
        let bottom = document.createElement('div')
        bottom.classList.add('bottom')
    
        let h = document.createElement('h1')
        h.innerHTML = name
    
        let p = document.createElement('p')
        p.innerHTML = 'casino er funnie<br>med penge'
    
        top.append(h)
        card.append(top)
        card.append(bottom)
        bottom.append(p)
    
    
        main.append(card)
    
    } )
}

makeCards(nameList)

search.addEventListener('input', () => {
    console.log(search.value)
    let results = nameList.filter(name => name.includes(search.value))
    main.innerHTML = ''
    makeCards(results)
})


console.log(nameList.length)


for(let i = 0; i < nameList.length; i++){
    console.log(nameList[i])
  }


let newArray = nameList.map( f => f + ' er et spil')
console.log(newArray)

nameList.map( casino => console.log(casino) )


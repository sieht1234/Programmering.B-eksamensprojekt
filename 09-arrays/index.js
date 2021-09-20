let main = document.querySelector('main')
let input = document.querySelector('#input')

let newCard = document.createElement('div')

const addCard = name =>{
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    main.append(newCard)
}

addCard('søren er  ')

//vi vil lave et array med tekst variabler
//starter med 0,1,2,3
let names = ['androgles','Sieht', 'frækkefrede', 'fader', 'lugte chaus', 'travis', 'el - sofus','mario', 'emilio','emo - mie' ]



names.push('bismarck')



//map tage en liste og giver et element en efter en
names.map(name => addCard(name) )

input.addEventListener('input', () =>{
    let results = names.filter( name => name.toLowerCase().includes(input.value) )
    main.innerHTML = ''
    results.map(name => addCard(name) )
})











//command + shift + skråsteg så amrkere du det hele

// her er et for loop
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }
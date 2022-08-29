let people = [{
    name: 'claus',
    surname: 'chaus',
    age: 50,
    hobbies: ['malke', 'tisse', 'skide'],
    favoriteColor: 'gray'
},
{
    name:'john',
    surname: ' fra Findland',
    age: 129,
    hobbies:['malke', 'tyndskid', 'at være 40', 'en etiopisk konge'],
    favoriteColor: 'brown'
},{
    
    name: 'tyroler',
    surname:'jørgen',
    age: 24,
    hobbies: ['TG shit', 'drikke vodka', 'sauna med gutterne'],
    favoriteColor: 'red'
},{
    name: 'stomi',
    surname:'pose',
    age: 24,
    hobbies: ['puste grise op', 'drikke saft', 'ti gange med remolade'],
    favoriteColor: 'black'
}
]

let artist = [ {
    name: 'The weeknd',
    genre: 'R&B',
    bestSong:'Aftherhours',
    albums:'10'
},{
    name: 'J Cole',
    genre: 'rap',
    bestSong:'No role modelz',
    albums:'6'

},{
    name: 'Micheal Jackson',
    genre: 'pop',
    bestSong:'Billie jean',
    albums:'10'
},{
    name: 'Kaj',
    genre: 'alt',
    bestSong:'Kajs rap',
    albums:'100'
}]



let movies = [ {
    name:'Heat',
    length:'2 timer og 50 minutter',
    director:'Michael Mann',
},{
    name:'Collateral',
    length:'2 timer',
    director:'Michael Mann',
}]



let countrys = [ {
    country:'Danmark',
    why:'dannebrog!'
},{
    country:'USa',
    why:'Fuck Yeah!'
},{
    country:'tyskland',
    why:'ahem'
},{
    country:'ussr',
    why:'https://www.youtube.com/watch?v=GK2GUxOnjDQ'
}]



people.map( person => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>navn: ' + person.name + ' ' + person.surname + '</h1>' 
    htmlString += '<li>alder: ' + person.age + '</li>'
    htmlString += '<li>hobbies: ' + person.hobbies.join(', ') + '</li>'
    htmlString += '<li>yndlingsfarve: ' + person.favoriteColor + '</li>'
    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )

artist.map( artist => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>navn: ' + artist.name +'</h1>' 
    htmlString += '<li>genre: ' + artist.genre + '</li>'
    htmlString += '<li>bedste sang: ' + artist.bestSong + '</li>'
    htmlString += '<li>albums: ' + artist.albums + '</li>'
    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )

movies.map( movies => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>navn ' + movies.name +'</h1>' 
    htmlString += '<li>længde ' + movies.length + '</li>'
    htmlString += '<li>instruktør ' + movies.director + '</li>'
    
    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )

countrys.map( countrys => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + countrys.country +'</h1>' 
    htmlString += '<li>Hvorfor? ' + countrys.why + '</li>'
    
    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )


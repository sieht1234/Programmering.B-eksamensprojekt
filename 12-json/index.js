let person = {
    id: 'sovs',
    name: 'Theis',
    age: 17,
    hobbies: ['code', 'historie', 'skide'],
    favoriteColor: 'darkblue'
    //HUSK KOMMA
}
console.log('this persons id is ' + person.id)
console.log('this persons name is ' + person.name)
console.log('this persons age is ' + person.age)
console.log('this persons id is ' + person.hobbies[1])
console.log('this persons id is ' + person.favoriteColor)

let people = [person, {
    id: 'chaus',
    name: 'claus',
    age: 50,
    hobbies: ['malke', 'tisse', 'skide'],
    favoriteColor: 'gray'
},{
    name:'tynskidsjohn',
    id:'diahrre',
    age: 'alt for gammel',
    hobbies:['malke', 'tyndskid', 'at være 40', 'en etiopisk konge'],
    favoriteColor: 'brown'
},{
    id: 'finneterese',
    name: 'knivvalteri',
    age: 24,
    hobbies: ['TG shit', 'drikke vodka', 'sauna med klunkerne'],
    favoriteColor: 'red'
}]


people.map(person =>{
    let nc =document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = person.favoriteColor
    //fordi vi køærer map kalder vi det json vi har i hånden, derfor bruges der person
    
    nc.innerHTML = '<h2>' + person.name + '</h2>'
    nc.innerHTML += '<li>age: ' + person.age + '</li>'
    nc.innerHTML += '<li>id: ' + person.id + '</li>'
    nc.innerHTML += '<li>hobbies: ' + person.hobbies + '</li>'
    nc.innerHTML += '<li>favoriteColor: ' + person.favoriteColor + '</li>'



    document.querySelector('main').append(nc)
})
console.log('person 2s name is ' + people[1].name)
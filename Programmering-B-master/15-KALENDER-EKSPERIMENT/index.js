
fetch('./kalender.json')
    .then( res => res.json() )
    .then( json => {
        console.log(json)
        json.days.map( door => {
            let div = document.createElement('div')
            div.id = door.date + '-day'
            div.classList.add('door')
            div.style.width = door.width
            div.style.height = door.height
            
            let lock = document.createElement('div')
            lock.classList.add('lock')
            lock.innerHTML = door.date
            
            lock.addEventListener('click', () => {
                switch(door.animation){
                    case'lock':
                        lock.classList.add('open')
                        lock.innerHTML=''
                        break
                        
                        case'christmas':
                        lock.classList.add('openChristmas')
                        lock.innerHTML=''
                        break

                        case'slide':
                        lock.classList.add('openSlide')
                        lock.innerHTML=''
                        break
                    default:
                        lock.classList.add('open')
                        lock.innerHTML=''
                        break
                }
                

            })
            
            
            switch(door.content){
                case 'image': 
                setImage(div, door)
                break
                case 'youtube':
                    setYoutube(div, door)
                    break
                    default:
                        break
                    }
                    
                    
            div.append(lock)
            document.querySelector('main').append(div)


        })
    })


const setImage = (div, obj) => {
    div.style.backgroundImage = `url('${obj.url}')`
}
const setYoutube = (div, obj) => {
    div.innerHTML = obj.embed
}
const setBoredApi = (div, obj) => {

}
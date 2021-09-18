let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let thomas = document.querySelector('#thomas')
let main = document.querySelector('main')
let button = document.querySelector('#button')
let footer = document.querySelector('footer')

//variabler er en kasse der kan ændre//

thomas.style.backgroundImage = "url('./assets/glad.png')"
main.style.backgroundImage = "url('./assets/ungarn1.gif')"
footer.style.backgroundImage = 'url("./assets/1.png")'

const saetTid = () =>{
    let tid = new Date()


    if(tid.getSeconds()<30){
        thomas.style.backgroundImage = "url('./assets/glad.png')"

    }else{
        thomas.style.backgroundImage = "url('./assets/sur.png')"
    }

    thomas.style.marginLeft = 1.6 * tid.getSeconds() + '%'

    if(tid.getSeconds()<30){
        main.style.backgroundImage = "url('./assets/ungarn1.gif')"

    }else{
        main.style.backgroundImage = "url('./assets/nej.png')"
    }
    





    let nul = ''
    if(tid.getHours() < 10) nul = '0'
    timer.innerHTML = nul + tid.getHours()
    
    nul = ''
    if(tid.getMinutes() < 10) nul = '0'
    min.innerHTML = nul + tid.getMinutes()

    nul = ''
    if(tid.getSeconds() < 10) nul = '0'
    sek.innerHTML = nul + tid.getSeconds()
}
setInterval(saetTid, 1000)

const skiftBillede = () => {
     

    if(footer.style.backgroundImage == 'url("./assets/1.jpg")'){
        footer.style.backgroundImage = 'url("./assets/2.jpg")'
    }
    else if (footer.style.backgroundImage == 'url("./assets/2.jpg")'){
        footer.style.backgroundImage = 'url("./assets/3.png")' 
    }
    else if (footer.style.backgroundImage == 'url("./assets/3.png")'){
        footer.style.backgroundImage = 'url("./assets/4.jpg")' 
    }
    else{
        footer.style.backgroundImage = 'url("./assets/1.jpg")'
    }

}
button.addEventListener('click',skiftBillede)
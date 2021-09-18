let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let main = document.querySelector('main')
let button = document.querySelector('#button')
let button2 = document.querySelector('#button2')

main.style.backgroundImage = 'url("./assets/1.jpg")'

const skiftBillede = () => {
     

    if(main.style.backgroundImage == 'url("./assets/1.jpg")'){
        main.style.backgroundImage = 'url("./assets/2.jpg")'
    }
    else if (main.style.backgroundImage == 'url("./assets/2.jpg")'){
        main.style.backgroundImage = 'url("./assets/3.jpg")' 
    }
    else if (main.style.backgroundImage == 'url("./assets/3.jpg")'){
        main.style.backgroundImage = 'url("./assets/4.jpg")' 
    }
    else{
        main.style.backgroundImage = 'url("./assets/1.jpg")'
    }

}


const skiftBillede2 = () => {
     

    if(main.style.backgroundImage == 'url("./assets/4.jpg")'){
        main.style.backgroundImage = 'url("./assets/3.jpg")'
    }
    else if (main.style.backgroundImage == 'url("./assets/3.jpg")'){
        main.style.backgroundImage = 'url("./assets/2.jpg")' 
    }
    else if (main.style.backgroundImage == 'url("./assets/2.jpg")'){
        main.style.backgroundImage = 'url("./assets/1.jpg")' 
    }
    else{
        main.style.backgroundImage = 'url("./assets/4.jpg")'
    }

}

button.addEventListener('click',skiftBillede)


button2.addEventListener('click',skiftBillede2)




//variabler er en kasse der kan ændre//
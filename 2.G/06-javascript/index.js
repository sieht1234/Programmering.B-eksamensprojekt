let sekunder = 0
let footer = document.querySelector('footer')
let tid = document.querySelector('#tid')
let knap = document.querySelector('#button')
let main = document.querySelector('main')

const restart = () => {
    sekunder = 0
}

knap.addEventListener('click',restart)





//bruger milisekunder. Derfor 1000
setInterval (()=>{
    sekunder++
    //betingelse = if
    if(sekunder == 60){
        sekunder = 0
    } 
    document.querySelector('footer').style.width = 100/60 * sekunder + '%'
    
    if(sekunder == 10){
        main.style.backgroundColor = 'orange'

    }else{
        main.style.backgroundColor = 'gray'
    }

    if(sekunder ==20){
        main.style.backgroundColor = 'blue'

    }


    if(tid.style.borderRadius =='0px'){
        tid.style.borderRadius = '50%'
        tid.style.backgroundColor = 'gray'
        tid.style.color = 'white'
        footer.style.borderBottomRightRadius = '0'
        footer.style.borderTopRightRadius = '0'
    }else{
        footer.style.borderBottomRightRadius = '1rem'
        footer.style.borderTopRightRadius = '1rem'
        tid.style.borderRadius = '0px'
        tid.style.backgroundColor = 'black'
        tid.style.color = 'red'
    }
    tid.innerHTML = sekunder
    console.log(sekunder)
    
} , 1000)


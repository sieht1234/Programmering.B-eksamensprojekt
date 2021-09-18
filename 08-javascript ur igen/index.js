let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let body = document.querySelector('body')

//variabler er en kasse der kan ændre//




//evt main.style.background//

const saetTid = () =>{
    let tid = new Date()
    
    footer.style.width = 1.6 * tid.getSeconds() + '%'
    main.style.width = 1.6 * tid.getMinutes() + '%'
    header.style.width = 1.6 * tid.getHours() + '%'

    

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
    


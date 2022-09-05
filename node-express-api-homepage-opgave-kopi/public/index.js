console.log('hejsa')
let hvalDiv = document.querySelector('#hvaler')
let aboutDiv = document.querySelector('#about')

hvalDiv.style.top = 0
aboutDiv.style.bottom = 90


document.querySelector('#hvaler h2').addEventListener('click', ()=>{
    if(hvalDiv.style.top == '90vh'){
        hvalDiv.style.top = 0;
    }else{
        hvalDiv.style.top = '90vh';

    }
})
document.querySelector('#about h2').addEventListener('click', ()=>{
    if(aboutDiv.style.bottom == '0vh'){
        aboutDiv.style.bottom = 90;
        hvalDiv.style.opacity = 1;
        
        
        
    }else{
        aboutDiv.style.bottom = '10vh';
        hvalDiv.style.opacity = 0;

    }
})


document.querySelector('#submitH').addEventListener('click', ()=>{
    fetch('http://localhost:4400/api/hvaler')
        .then(res => res.json())
        .then(json => document.querySelector('#hvaler .json').innerHTML = JSON.stringify(json))
})
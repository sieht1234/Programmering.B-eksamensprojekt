const express = require('express')
const ip = require('ip')

let apiData = {
    "ice cream":"sun lolly og magnum is",
    "breakfast":"pandekager, ægg og gøgemøg",
    "lunch": "hvad end der er billigt",
    "dinner": "pasta med cognacsovs, weinerschnitzel... i think hamburgers work well with fries",
    "dessert":"risalamande",
    "why":"hvorfor ikke",
    "ultimate confusion": "mitsubishi materials"

}

const ownIp = ip.address()
const app = express()
const port = 4343

app.get('/', (req, res)=>{
    console.log('der var nogen')
    res.send('hej med dig ')

})
app.get('/api/*', (req, res)=>{
    let str = 'måltidet for i dag er: ' +  req.params[0] +' ' 
    str += apiData[req.params[0]]
    res.send(str)
    

})

app.listen(port, ()=>{
    console.log('express serveren og den lytter '+ ownIp)
})
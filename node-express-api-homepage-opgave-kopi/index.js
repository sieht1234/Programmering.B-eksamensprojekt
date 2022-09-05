//hent biblioteket IP 
const ip = require('ip')
//fordi vi har hentet biblioteket kan vi hente ip adressen
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 4400

//serve en statisk mappe i roden 
app.use('/', express.static('public'))


//hvis der kommer klienter og skriver endpointet /hvaler får de hvaler
app.get('/api/hvaler', (req, res)=>{
    const obj ={
        'blåhval':{
            'farve':'grøn',
            'vægt':'1/2 toyota'
        },
        'jorge':{
            'jorge':'jorge'

        }
    }
    res.json(obj)
})
app.get('/api/dato', (req, res)=>{
    res.send('du er kommet til api om datoer ')
})

//serveren skal bare køre på porten, 
app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 
//hent biblioteket ip
const ip = require('ip')
console.log(ip.address())
// hent biblioteket og gem objeket i en konstant
const express = require('express')
//opret en variable til expressserveren
const app = express()

const port = 4000
//vi laver ne simpel database

const weekDays = {
    'mandag': 'jeg har det... meh både godt og dårligt',
    'tirsdag': 'lang dag, men ellers fint',
    'onsdag':'kort dag ... men informatik',
    'torsdag': 'det er fint',
    'fredag': 'jeg har det ... fint det er snart weeknd',
    'lørdag': 'jeg har det ... rick astley agtigt',
    'søndag': '... lektier. ellers fint'
    //dagene hedder endpoints
}
//start en webserver på port 4000
app.get('/*', (req, res)=>{
    console.log('serveren fik et response i roden')
    if (req.params[0]){
        console.log('wowow nogen udnytter os: '+ req.params[0])
        if (weekDays[req.params[0]]){
            res.send(weekDays[req.params[0]])
        }else{
            res.send(req.params[0]+ ' is NOT an endpoint')
        }

    }else{
        res.send('du besøgte mig i : ')
    }

})
app.listen(port, ()=>{
    console.log('server lutter til dig på port 4000' )
})
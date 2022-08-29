console.log('jeg er et node.js script')

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res)=>{
    res.send('100 at du findes')
})
app.get('/itadmin/*', (req, res)=>{
    res.send('hemmelig info: ' + req.params[0])
})

app.listen(port, ()=>{
    console.log('express server is mow running on port: ' + port)
})


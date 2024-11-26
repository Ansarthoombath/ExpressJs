const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/home',(req,res)=>{
    const obj={
        name:'john',
        place:'clt'
    }
    res.send(obj)
})




app.listen(3000)

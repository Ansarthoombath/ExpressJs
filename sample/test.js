const express = require('express')
const app = express()

app.post('/new',(req,res)=>{
    res.send('setting')
})

app.put('/newput',(req,res)=>{
    res.send('putting')
})

app.delete('/newdel',(req,res)=>{
    res.send('deleting')
})


app.listen(3000,(req,res)=>{
    console.log('app is listening to the port 3000')})
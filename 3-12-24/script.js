const express = require('express')
const Token = require('./token')
const Validation = require('./validation')

const app = express()

const middleware = [Token,Validation]

app.get("/profile",middleware,(req,res)=>{
    console.log('User Logged')
    res.send('<h1>succeess</h1>')
})

app.listen(3000,()=>{
    console.log('server running on http://localhost:3000')
})

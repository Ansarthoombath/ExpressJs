const express=require('express')
var app=express()

function Token(req,res,next){

    const token = '1234'
    console.log(req)

    req.token =token
    console.log('Creating Token...')
    next()
}

function Validation(req,res,next){

 

    if(req.token){
        console.log('Token Validated')
        next()
    }else{
        res.status(403).send("<h1>Token Missing</h1>")
    }
   
}
app.get("/profile",Token,Validation,(req,res)=>{
    console.log('User Logged')
    res.send("<h1>Success</h1>")
})

app.listen(7000,()=>{
    console.log('server running on http://localhost:7000')
})

const express=require('express')
var app=express()

app.get("/jsondata",auth,(req,res)=>{
    mernStudent={
        name:'John',class:'10:30'
    }
    res.send(mernStudent)
})

app.get("/json",logging,(req,res)=>{
    mern={
        name:'MERN',class:'6 month'
    }
    res.send(mern)
})

function auth(req,res,next){
    console.log('inside auth middleware')
    next()
}

function logging(req,res,next){
    console.log('inside logging middleware')
    next()
}

app.listen(6000)



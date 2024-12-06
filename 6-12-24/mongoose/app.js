var express = require('express');
var app =express()

var mongoose = require("mongoose")
const {db_port, db_url} = require('./connection')

// connect to mongodb
mongoose.connect(db_url)

mongoose.connection.on('connected',()=>{
    console.log('coonected to mongodb')
})

app.listen(db_port)
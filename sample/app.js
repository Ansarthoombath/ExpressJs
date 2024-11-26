const express = require("express")


const product = require('./routes/product.js')

const appl = express()
appl.use('/new',product)


appl.listen(4000)

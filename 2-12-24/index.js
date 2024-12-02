const express=require('express')

const products=require('./routes/product')
 const users=require('./routes/users')
const obj=express()



obj.use('/product',products)
obj.use('/users',users)




obj.listen(4000)
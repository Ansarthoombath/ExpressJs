const express = require('express')

const router = express.Router()

router.get('/search/:key([A-E]{5}[0-9]{2})',(req,res)=>{
    res.send('users request recieved with  a pattern of `XXXXXXX` '+req.params.key)
})

router.get('/getDetails/:id',(req,res)=>{
    res.send('users request recieved with   id '+req.params.id)
})


router.get('/getDet/:city/:town',(req,res)=>{
    res.send('users request recieved with   city ' + req.params.city + ' and in town named ' + req.params.town)
})

module.exports=router;

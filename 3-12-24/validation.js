function Validation(req,res,next){
    if(req.token){
        console.log('Token Validated')
        next()
    }else{
        res.status(403).send("<h1>Token Missing</h1>")
    }
   
}
module.exports = Validation
function Token(req,res,next){

    const token = '1234'
    console.log(req)

    req.token =token
    console.log('Creating Token...')
    next()
}
module.exports = Token
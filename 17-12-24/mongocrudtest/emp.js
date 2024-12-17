var express = require('express');
var router = express.Router();
var empModel = require('../models/empdetails.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('connected');
});

router.get('/add',function(req,res,next){
    let newEmp = new empModel({
       
        Name:'Maria',
        email:'maria@123',
        address:'paris,france',
        phone:34466})
        newEmp.save().then((result)=>{
            res.send(result)
        }).catch((err)=>{
            res.send(err)
        })

})

router.put('/updatebyId',async function(req,res,next){
    try{
        const empId=req.query.id;
        const name=req.query.Name;
        let result = await empModel.findByIdAndUpdate(
            empId,
            {Name:name}
        );
        res.status(200).send({status:200,message:"update successfull"})
    }
 
       
        catch(err){
            res.status(500).send({error:err.message})
        }
    }) 

    router.delete('/deleteOne',async function(req,res,next){
        try{
            const name=req.query.Name;
            let response = await empModel.findOneAndDelete({Name:name});
            res.status(200).send({status:200,message:"delete successfull"})
          
}
     
           
            catch(err){
                res.status(500).send({error:err.message})
            }
        })

   
module.exports = router;
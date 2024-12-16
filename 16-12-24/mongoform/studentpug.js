var express = require('express');
var router = express.Router();
var studentModel= require('../model/student.model')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('student');
});
router.post('/',function(req,res,next){
    let newStudent = new studentModel({
        
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        dob:req.body.dob,
        department:req.body.department})
        newStudent.save().then((result)=>{
            res.send('student added'+JSON.stringify(result))
        }).catch((err)=>{
            res.send("error"+err)
        })

})


module.exports = router;
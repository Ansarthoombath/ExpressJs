
mongoose  = require("mongoose");

var studentschema = mongoose.Schema({
   
   firstName:String,
   lastName:String,
   age:Number,
   dob:String,
   department:String
})
studentModel=mongoose.model('students',studentschema)
module.exports=studentModel
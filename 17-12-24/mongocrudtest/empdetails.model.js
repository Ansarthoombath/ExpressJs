mongoose  = require("mongoose");

var empschema = mongoose.Schema({
   
   Name:String,
   email:String,
   address:String,
   phone:Number,
   
})
empModel=mongoose.model('empdetails',empschema)
module.exports=empModel
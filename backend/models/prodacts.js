const mongoose = require("mongoose");
const prodactSchema = new mongoose.Schema({
Name:{
type:String,
required:true,
},

prix:{
    type:String,
    required:true,

},
reference:{
type:String,
unique:true,
},
imageUrl:String
});
module.exports=mongoose.model("Prodact",prodactSchema);
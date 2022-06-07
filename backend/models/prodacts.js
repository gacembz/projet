const mongoose = require("mongoose");
const prodact = new mongoose.Schema({
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
image:{
type:String,
required:true,
}
});
module.exports=mongoose.model("prodact",prodact);
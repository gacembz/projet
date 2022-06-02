const mongoose = require("mongoose");
const prodact = new mongoose.Schema({
Name:{
type:String,
required:true,
},
typeName:{
    type:String,
    require:true,
    unique:true,

},
prix:{
    type:String,
    required:true,

},
reference:{
type:String,
unique:true,
}
});
module.exports=mongoose.model("prodact",prodact);
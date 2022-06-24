const mongoose = require("mongoose");
const users = new mongoose.Schema({
firstName:{
type:String,
required:true,
},
email:{
    type:String,
    require:true,
    unique:true,

},
passWord:{
    type:String,
    required:true,

},
role:{
    type:String,enum:["user","admin"],default:"user"
}

});
module.exports=mongoose.model("user",users);
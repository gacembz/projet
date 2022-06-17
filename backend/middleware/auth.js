const users = require("../models/users");
const jwt=require("jsonwebtoken");
exports.isAuth=async(req,res,next)=>{
const token=req.header("token");

try{
if(!token){
    return res.status(400).send("you are not authorised")
}
const decoded=jwt.verify(token,process.env.secret);
const user=await users.findById(decoded._id);
req.user=user;

next();

}
catch(error){
    console.log("servr error");
}

}
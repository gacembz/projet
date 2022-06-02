const users = require("../models/users");
const jwt=require("jsonwebtoken");
exports.isAuth=async(req,res,next)=>{
const token=req.header("authentification");
try{
if(!token){
    return res.status(400).send("you are not authorised")
}
const decoded=jwt.verify(token,process.env.secretOrkey);
const users=await users.findById(decoded.id);
req.users=users;
next();

}
catch(error){
    console.log("servr error");
}

}
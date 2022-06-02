const express=require("express");
const { register, login, GetUser, deleteUser, updateUser, GetAllUser } = require("../controllers/userControllers")
const { isAuth } = require("../middleware/auth");
const { RegisterValidation, loginValidation, validation } = require("../middleware/validation");
const Router=express.Router()

Router.post("/register",RegisterValidation,validation,register);
Router.post("/login",loginValidation,validation,login);
Router.get("/",GetAllUser);
Router.get("/get",GetUser);
Router.delete("/deleted/:id",deleteUser);
Router.put("/put/:id",updateUser);
//method get
// api:current
Router.get("current",isAuth,(req,res)=>{
    res.send({user:req.user});
});
 
module.exports=Router;

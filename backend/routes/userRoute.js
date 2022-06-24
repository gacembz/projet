const express=require("express");
const { register, login, GetUser, deleteUser, updateUser, getAllUser } = require("../controllers/userControllers")
const { isAuth } = require("../middleware/auth");
const { RegisterValidation, loginValidation, validation } = require("../middleware/validation");
const Router=express.Router()

Router.post("/register",RegisterValidation,validation,register);
Router.post("/login",loginValidation,validation,login);
Router.get("/users",isAuth,getAllUser);
// Router.get("/allusers",GetUser);
Router.delete("/deleted/:id",deleteUser);
Router.put("/put/:id",updateUser);
//method get
// api:current
Router.get("/current",isAuth,(req,res)=>{
    res.send({user:req.user});
});
 
module.exports=Router;

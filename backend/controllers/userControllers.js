
const user=require("../models/users");
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');
const users = require("../models/users");

exports.register =async(req,res)=> {
    const{email,passWord}=req.body ;
    try{
        const found = await user.findOne({email})
        
         if(found){ 
            return res.status(400).send({errors:[{msg:"user already exist"}]})
        }
        const newUser= new user(req.body);
        //bcrypt
        const salt=10;
        const hashPassword=bcrypt.hashSync(passWord,salt);
        newUser.passWord=hashPassword;
   
        await newUser.save();
         const token =jwt.sign({_id:newUser._id}, process.env.secret)
  
        res.status(200).send({msg:"register with success",newUser,token})
        }
        catch(error){
            res.status(500).send({errors:[{msg:"could not register"}]})
        }
       
    
}
//LOGIN
exports.login= async(req,res)=>{
    const {email,passWord}=req.body
    try {
        const foundUser=await user.findOne({email});
        if (!foundUser){
            return res.status(400).send({error:({msg:"user not found"})})
        }
        const match=await bcrypt.compare(passWord,foundUser.passWord);
        if(!match){
            return res.status(400).send({error:({msg:"user not found"})})
        }
const payload={_id:foundUser._id}
const token=jwt.sign(payload,process.env.secret)
res.status(200).send({msg:"login",foundUser,token})

    } catch (error) {
        res.status(500).send({error:[{msg:"could not login"}]})
        
        
    }
}
// API: /current/:id
exports.GetUser = async (req, res) => {
    try {
        const user = await users.findById(req.params.id)
        res.status(200).send({ msg: "this is user",user })
    } catch (error) {
        res.status(500).send({ msg: "could not get user" })

    }
}
exports.GetAllUser = async(req,res)=>{
    try {
     const allusers = await users.find()  
     res.status(200).send({msg:"ggg",allusers}) 
    } catch (error) {
        res.status(500).send({msg:"fff"})
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const deleteuser = await users.findByIdAndDelete(req.params.id)
        res.status(200).send({ msg: "deleted user" })
    } catch (error) {
        res.status(500).send({ msg: "could not delete user" })

    }

}
exports.updateUser = async (req, res) => {
    try {
        const updateUser = await users.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).send({ msg: "updated user" })


    } catch (error) {
        res.status(500).send({ msg: "could not update user" })


    }
}
 
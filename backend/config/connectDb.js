const mongoose=require("mongoose");
require("dotenv").config(); 
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.mongo_URL)
        console.log("data base is connected successfully")
    }
    catch(error){
        console.log("data base is not connected ")
    }

} 
module.exports = connectDb; 
const express=require("express");
const { register, GetProdact, deleteProdact, updateProdact } = require("../controllers/prodactControlle");

const prodactRoutes = express.Router()

prodactRoutes.post("/register",register);

prodactRoutes.get("/get",GetProdact);
prodactRoutes.delete("/delete/:id",deleteProdact);
prodactRoutes.put("/put/:id",updateProdact);


 
module.exports=prodactRoutes;
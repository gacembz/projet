const express=require("express");
const { register, deleteProdact, updateProdact, getProdacts } = require("../controllers/prodactControlle");

const prodactRoutes = express.Router()

prodactRoutes.post("/addProdact",register);

prodactRoutes.get("/allproducts",getProdacts);
prodactRoutes.delete("/delete/:id",deleteProdact);
prodactRoutes.put("/put/:id",updateProdact);


 
module.exports=prodactRoutes;
const express=require("express");
const { register, deleteProdact, updateProdact, getProdacts } = require("../controllers/prodactControlle");
const { isAuth } = require("../middleware/auth");

const prodactRoutes = express.Router()

prodactRoutes.post("/addProdact",isAuth,register);

prodactRoutes.get("/allproducts",getProdacts);
prodactRoutes.delete("/delete/:id",deleteProdact);
prodactRoutes.put("/put/:id",updateProdact);


 
module.exports=prodactRoutes;
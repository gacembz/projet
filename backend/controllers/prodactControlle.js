const Prodact=require("../models/prodacts");



exports.register =async(req,res)=> {
     const{Name,prix,reference}=req.body ;
    
    try{  
        const newprodact= new Prodact(req.body);
        await newprodact.save();
  
        res.status(200).send({msg:"product added with success",newprodact})
        }
        catch(error){
            res.status(500).send({errors:[{msg:"could not register"}]})
        }
       
    
}
exports.getProdacts= async (req, res) => {
    try {
        const prodacts = await Prodact.find()
        res.status(200).send({ msg: "this is prodact",prodacts})
    } catch (error) {
        res.status(500).send({ msg: "could not get prodact" })

    }
}
exports.deleteProdact = async (req, res) => {
    try {
        const deleteprodact = await Prodact.findByIdAndDelete(req.params.id)
        res.status(200).send({ msg: "deleted prodact" })
    } catch (error) {
        res.status(500).send({ msg: "could not delete prodact" })

    }

}
exports.updateProdact = async (req, res) => {
    try {
        const updateprodact = await Prodact.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).send({ msg: "updated prodact" })


    } catch (error) {
        res.status(500).send({ msg: "could not update prodact" })


}}
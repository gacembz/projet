const prodact=require("../models/prodacts");



exports.register =async(req,res)=> {
    const{Name,prix,reference,image}=req.body ;
    try{
        
        
        const newprodact= new prodact(req.body);
        
   
        await newprodact.save();
        
  
        res.status(200).send({msg:"register with success",newprodact})
        }
        catch(error){
            res.status(500).send({errors:[{msg:"could not register"}]})
        }
       
    
}
exports.GetProdact= async (req, res) => {
    try {
        const prodact = await prodact.findById(req.params.id)
        res.status(200).send({ msg: "this is prodact",prodact })
    } catch (error) {
        res.status(500).send({ msg: "could not get prodact" })

    }
}
exports.deleteProdact = async (req, res) => {
    try {
        const deleteprodact = await prodact.findByIdAndDelete(req.params.id)
        res.status(200).send({ msg: "deleted prodact" })
    } catch (error) {
        res.status(500).send({ msg: "could not delete prodact" })

    }

}
exports.updateProdact = async (req, res) => {
    try {
        const updateprodact = await prodact.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).send({ msg: "updated prodact" })


    } catch (error) {
        res.status(500).send({ msg: "could not update prodact" })


}}
const userModel = require("../model/user.model")
exports.register = async(req,res)=>{
    try {
        const userData = new userModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        const data = await userData.save()
        res.status(200).json({
            message:"re"
        })
    } catch (error) {
        
    }
}
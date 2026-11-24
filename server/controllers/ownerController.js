import User from "../models/User.js";



// API to Change Role of User
export const changeRolrToOwner = async ()=>{
    try {
        const {_id} = req.user;
        await User.findOneIdAndUpdate(_id, {role: "owner"})
        res.json({success:true, Message: "Now you can list cars"})
    } catch (error) {
        console.log(error.message);
         res.json({success:false, Message: error.message})
    }
}

// API to List Car

export  const addCar = async (req, res)=>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.crData);
        const imageFile = req.file;
        
    } catch (error) {
         console.log(error.message);
         res.json({success:false, Message: error.message})
    }
}







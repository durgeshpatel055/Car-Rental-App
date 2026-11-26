import imagekit from "../configs/imageKit.js";
import Car from "../models/car.js";
import User from "../models/User.js";
import fs from 'fs';




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
        let car = JSON.parse(req.body.carData);
        const imageFile = req.file;



         // Upload image to imagekit
         const fileBuffer = fs.readFileSync(imageFile.path)
        const response =  await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })


    //   optimized through imagekit URL transformation
       var optimizedImageURL = imagekit.url({
        path : response.filePath,
        transformation : [
            {width: '1280'},  //Width resizing
            {quality: 'auto'}, //Auto compression
            {formate: 'webp'} //Convert to modern format
        ]
       });
 
       
        const image = optimizedImageURL;
        await Car.create({...car, owner: _id, image})

        res.json({success: true, message: "Car Added"})

       
      

        
    } catch (error) {
         console.log(error.message);
         res.json({success:false, Message: error.message})
    }
}







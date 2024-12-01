import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
        api_key:process.env.CLOUDINARY_API_KEY, 
        api_secret:  process.env.CLOUDINARY_API_SCRET // Click 'View API Keys' above to copy your API secret
    });



    const UploadonCloudinary = async (localfilepath)=>{
        try{
            if(!localfilepath) return null
            const response = await cloudinary.uploader.upload(localfilepath,{resource_type: "auto"})
            console.log("file uploaded on cloudinary ",response.url)
            return response;
        }
        catch(error){
            fs.unlinkSync(localfilepath)//remove the locally saved temporary file as the upload opertaion got failed
            return null;
        }
    }



    export { UploadonCloudinary }
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectdb = async()=>{
    try { 
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`\n mongodb connected db host: ${connectionInstance.connection.host}`);
    }

    catch (error){
        console.log("error",error);
        process.exit(1)
    }
}

export default connectdb 
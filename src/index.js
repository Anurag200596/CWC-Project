// require('dotenv').config({path:'./en=nv'})
import dotenv from "dotenv"
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants.js"
import connectdb from "./db/index2.js"
// FIRST APPROACH
import express from "express"
import {app} from "./app.js"
//  const app = express()
//  (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("not able to talk to database",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })

//     }
//     catch(error){
//         console.log("error",error)
//         throw error
//     }

//  })()

dotenv.config({
    
    path:'./env'
 })
connectdb()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error",error)
        throw error
    })
    app.listen(process.env.PORT||5000,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("error",error);
})


import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true

}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieparser())

//routes

import router from "./routes/user.routes.js"

app.use("/users", router)




// http://localhost:8000/api/v1/users/register

export { app }
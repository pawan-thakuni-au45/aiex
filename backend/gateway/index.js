import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
import protect from "./middlewear/auth.middlewear.js"
import { getCurrentUser } from "./controller/user.controller.js"

const port=process.env.PORT

const app=express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use(cookieParser())
app.use("/auth",proxy(process.env.AUTH_SERVICE))
app.get("/me",protect,getCurrentUser)



app.get('/',(req,res)=>{
    res.json({
        message:"hii this is gateway"
    })
})

app.listen(port,()=>{
    console.log(`port connected to ${port}`)
})
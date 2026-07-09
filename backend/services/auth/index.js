import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import { router } from "./routers/auth.js"
dotenv.config()

const port=process.env.PORT

const app=express()
app.use(express.json())
app.use('/',router)

app.get('/',(req,res)=>{
    res.json({
        message:"hii this is from auth"
    })
})

app.listen(port,()=>{
    console.log(`port connected to ${port}`)
    connectDB()
})
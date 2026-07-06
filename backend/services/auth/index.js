import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config.js"
dotenv.config()

const port=process.env.PORT

const app=express()

app.get('/',(req,res)=>{
    res.json({
        message:"hii this is from auth"
    })
})

app.listen(port,()=>{
    console.log(`port connected to ${port}`)
    connectDB()
})
import express from "express"
import dotnev, { config } from "dotenv"
import connectDB from "./config/db.js"
import { route } from "./route/conversation.route.js"
dotnev.config()
connectDB()

let port=process.env.PORT

const app=express()
app.use(express.json())

app.use('/',route)
app.get('/',(req,res)=>{
    res.json({
        message:"chat is here babyy!"
    })
})

app.listen(port,()=>{
    console.log("chat connected at port "+ port)
    connectDB()
})
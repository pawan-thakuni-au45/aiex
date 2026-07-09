import { json } from "express"
import redis from "../../shared/redis/redis.js"


const protect=async (req,res,next)=>{
    try{
        const sessionId=req.cookies?.session
        if(!sessionId){
            return res.status(400).json({
                message:"not authenticated"
            })
        }

        const data=await redis.get(`session-${sessionId}`)
        if(!data){
            return  res.status(400).json({
                message:"session expiered"
            })
        }
        req.user=JSON.parse(data)
        next()

    }catch(error){
     return  res.status(500).json({
                message:`protect error ${error}`           })

    }
}
export default protect
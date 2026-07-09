import redis from "../../../shared/redis/redis.js";
import { app } from "../config/firebase.js"
import { userModel } from "../models/userModel.js";
import {getAuth} from "firebase-admin/auth"

export const login=async(req,res)=>{
       console.log("1. Login route hit");
    try{
  console.log("2. Body:", req.body);
        const {token}=req.body
                console.log("3. Token received");

        const decode=await getAuth(app).verifyIdToken(token)
          console.log("4. Token verified:", decode);
        let user=await userModel.findOne({
            firebaseUid:decode.uid})
             console.log("5. User found:", user);

            if(!user){
                  console.log("6. Creating user...");
                 user=await userModel.create({
                    firebaseUid:decode.uid,
                    name:decode.name,
                    email:decode.email,

                })
            }

            const sessionId=crypto.randomUUID()
await redis.set(`session-${sessionId}`,JSON.stringify({
    userId:user._id,
    name:user.name,
    email:user.email
}),"EX",7*24*60*60  )
            res.cookie("session",sessionId,{
                httpOnly:true,
                secure:false,
                sameSite:"strict",
                maxAge:7*24*60*60*1000
                
            })
    console.log("8. Sending response");
            res.status(200).json({
                user
            })
    }catch(error){
        res.status(500).json({
            message:`error occures ${error.message}`
        })

    }
}

export const logout=async(req,res)=>{
 try{
         const sessionId=req.cookies?.session
         await redis.del(`session-${sessionId}`)
         res.clearCookie("session")
         return res.status(200).json({
            message:"logout succesfully"
         })
 }catch(error){

 }

}
import { conversationModel } from "../model/conversation.model.js"
import { messageModel } from "../model/message.model.js"

export const conversation=async(req,res)=>{
    try{

        const userId=req.headers["x-user-id"]
        console.log("userid",userId)
        const conversation=await conversationModel.create({
            userId:userId
        })

        res.status(200).json(conversation)
        
        
    }catch(error){
        console.log(error)
        res.status(500).json({message:"conversation error"+error})

            
        }
}




export const getConversation=async(req,res)=>{
    try{

        const userId=req.headers["x-user-id"]
        console.log("userid",userId)
        const conversations=await conversationModel.find({
            userId:userId
        }).sort({updatedAt:-1})

        res.status(200).json(conversations)
        
        
    }catch(error){
        console.log(error)
        res.status(500).json({message:"conversation error"+error})

            
        }
}

export const message=async(req,res)=>{

    try{

    
    const {conversationId,role,content}=req.body

    const message=await messageModel.create({
        conversationId,
        role,
        content
    })
    res.status(200).json(message)

    }catch(error){
    res.status(500).json({message:`message error ${error}`})

        
    }
}

export const getMessage=async(req,res)=>{
    try{
       
 const message=await messageModel.find({conversationId:req.params.conversationId}).sort({createdAt:-1})
 res.status(200).json(message)
    }catch(error){
        
 res.status(500).json({message:`get message error ${error}`})
    }
   
}

export const conversationTtile=async(req,res)=>{

    try{

    
    const {title,id}=req.body
    const titleUpdate=await conversationModel.findByIdAndUpdate(id,{
        title
    })
    res.status(200).json(titleUpdate)

    }catch(error){
    res.status(500).json({message:`title error ${error}`})

    }
}

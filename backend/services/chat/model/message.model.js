import mongoose, { mongo } from "mongoose";


const messageSchema=new mongoose.Schema({
    conversationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Conversation"

    },
    role:{
        type:String,
        enum:["user","assistant"]
    },


    content:String
},{timestamps:true})

export const messageModel=mongoose.model("Message",messageSchema)
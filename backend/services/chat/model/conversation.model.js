import mongoose, { mongo } from "mongoose";

const conversationSchema=new mongoose.Schema({
   title:{
    type:String,
    default:"New Chat"
   },
   userId:{
    type:String
   }
},{timestamps:true})

export const conversationModel=mongoose.model("Conversation",conversationSchema)
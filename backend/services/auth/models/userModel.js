import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    firebaseUid:
    {type:String,unique:true},
    name:{type:String,required:true},
    email:{type:String,required:true}
},{
    timestamps:true
})

export const userModel=mongoose.model("User",userSchema)


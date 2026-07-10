
import express from "express"
import { conversation, conversationTtile, getConversation, getMessage, message } from "../controller/conversation.controller.js"

export const route=express.Router()

route.get("/create-conversation",conversation)
route.get("/get-conversation",getConversation)
route.post("/update-conversation",conversationTtile)
route.post("/save-message",message)
route.get("/get-conversation/:conversationId",getMessage)




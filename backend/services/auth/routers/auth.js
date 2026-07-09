import express from "express"
import { login, logout } from "../controller/auth.js"

export const router=express.Router()

router.post('/login',login)
router.get("/logout",logout)
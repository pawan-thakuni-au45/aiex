import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvider } from '../../utils/firebase'
import api from '../../utils/axios'
import { FcGoogle } from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const {userData}=useSelector(state=>state.user)
    const dispatch=useDispatch()
console.log(userData,"redux")
    const handleLogin = async (token) => {
        try {
            const { data } = await api.post('/auth/login', { token })
            console.log(data, "gr")
            dispatch(useDispatch(data))
        } catch (error) {
            console.log(error)
        }
    }
    const googleLogin = async () => {
        const data = await signInWithPopup(auth, googleProvider)
        
        const token = await data.user.getIdToken()
        await handleLogin(token)
        console.log(data)
    }
    return (
        <div className='h-screen text-white overflow-hidden bg-[#0d0f14]' >
        {!userData && 
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur'>
                <div className='w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-[17px] text-slate-100 tracking-tight'>Welcome to aiex</h2>
                        <p className='text-[13px] text-slate-500'>Please login to continue using the app.</p>
                    </div>
                    <button className='bg-black ' onClick={googleLogin }><FcGoogle className='text-white' />Continue with google</button>
                </div>
            </div>}
            bjhbjbn
        </div>
    )
}
export default Home
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../features/userSlice'


const Login = () => {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({})

    const {currentUser} = useSelector(getCurrentUser)


    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const canSave = Boolean(formData.email) && Boolean(formData.password)

    const handleSubmit = (e)=>{
        e.preventDefault()
        try{
            if(canSave){
                if((currentUser.email === formData.email) && (currentUser.password === formData.password)){
                    console.log('Login success')
                    navigate('/')
                }else{
                    console.log('login failed')
                }
            }
        }catch(err){
            console.log('Something went wrong',err.message)
        }
    }
  return (
    <div className='p-3 max-w-lg mx-auto bg-grey-100'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
                type="email"
                onChange={handleChange}
                className='bg-slate-100 p-3 rounded-lg'
                placeholder='Email'
                name='email' />
            <input 
                type="password"
                onChange={handleChange}
                className='bg-slate-100 p-3 rounded-lg'
                placeholder='Password'
                name='password' />
            <button 
                type="submit"
                disabled={!canSave}
                className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                    Sign In
            </button>

            <div className='flex gap-2 mt-5'>
            <Link to='/Profile'>
                        <span className='text-red-500'>Forgot Password? Reset here!</span>
                    </Link>
                <p>Don't have an account?
                    <Link to='/sign-up'>
                        <span className='text-blue-500'>Sign up</span>
                    </Link>
                </p>
            </div>
            <p className='text-red-700 mt-5'></p>
        </form>
    </div>
  )
}

export default Login
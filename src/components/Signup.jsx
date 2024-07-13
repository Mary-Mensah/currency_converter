import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'


const Signup = () => {
    const dispatch = useDispatch()
    const [formData,setFormData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const canSave = Boolean(formData.username) && Boolean(formData.email) && Boolean(formData.password)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        try{
            if(canSave){
            dispatch(setUser(formData))
            console.log(formData)
            navigate('/sign-in')
            }
            
        }catch(err){
            console.log('Something went wrong',err.message)
        }
    }
  return (
    <div className='p-3 max-w-lg mx-auto bg-grey-100'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input 
                type="text"
                onChange={handleChange}
                className='bg-slate-100 p-3 rounded-lg'
                placeholder='Username'
                name='username' />
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
                    Sign Up
            </button>

            <div className='flex gap-2 mt-5'>
                <p>Already have an account?
                    <Link to='/sign-in'>
                        <span className='text-blue-500'>Sign in</span>
                    </Link>
                </p>
            </div>
            <p className='text-red-700 mt-5'></p>
        </form>
    </div>
  )
}

export default Signup
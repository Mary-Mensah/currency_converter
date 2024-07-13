import React, {useState} from 'react'
import { getCurrentUser } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { upDateUser } from '../features/userSlice'
import { deleteUser } from '../features/userSlice'
import { signOut } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(getCurrentUser)
    const navigate = useNavigate()

    const [formData,setFormData] = useState({})

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const canSave = Boolean(formData.username) && Boolean(formData.email) && Boolean(formData.password)

    const handleSubmit = (e)=>{
        e.preventDefault()
        try{
            if(canSave){
                dispatch(upDateUser(formData))
            }
        }catch(err){
            console.log('Something went wrong ',err.message)
        }
    }

    const handleDeleteAccount = ()=>{
        dispatch(deleteUser())
        navigate('/sign-up')
    }
    const handleUpdateAccount = ()=>{
        dispatch(updateUser())
        navigate('/sign-in')
    }

    const handleSignOut = ()=>{
        dispatch(signOut())
        navigate('/sign-in')
    }
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className="text-3xl font-semibold text-center my-7">Reset Password</h1>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* <input 
                defaultValue={currentUser.username}
                type="text" 
                name="username" 
                id="username" 
                onChange={handleChange}
                className="bg-slate-100 rounded-lg p-3" /> */}
            {/* <input 
                defaultValue={currentUser.email}
                type="email" 
                name="email"
                onChange={handleChange} 
                className="bg-slate-100 rounded-lg p-3" /> */}
            {/*<input 
                placeholder='Enter Old Password'
                type="password" 
                name="password"
                onChange={handleChange} 
            className="bg-slate-100 rounded-lg p-3" />*/}
            <input 
                placeholder='Enter New Password'
                type="password" 
                name="password"
                onChange={handleChange} 
                className="bg-slate-100 rounded-lg p-3" />
                 <input 
                placeholder='Confirm Password'
                type="password" 
                name="password"
                onChange={handleChange} 
                className="bg-slate-100 rounded-lg p-3" />

            <button 
                disabled={!canSave}
                className="bg-slate-700 text-white p-3 rounded-lg  hover:opacity-95 disabled:opacity-80">
                Reset Password
            </button>
            {/* <div className="flex justify-between mt-5">
                <span 
                    onClick={handleDeleteAccount}
                    className='text-red-700 cursor-pointer'
                >
                    Delete Account
                </span>
                
            </div> */}
        </form>
    </div>
  )
}

export default Profile
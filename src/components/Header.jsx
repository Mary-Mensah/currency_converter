import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../features/userSlice'
import { Link } from 'react-router-dom'

const Header = () => {
    const {currentUser} = useSelector(getCurrentUser)

  return (
    <div className='bg-slate-200'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to='/'>
                <h1 className="font-bold">Currency Exchange App</h1>
            </Link>
            <ul className="flex gap-4">
                <Link to='sign-in'>
                    {currentUser ? (
                        <li>Signout</li>
                    ) : (
                        <li>Sign In</li>
                    )}
                </Link>
            </ul>            
        </div>

    </div>
  )
}

export default Header
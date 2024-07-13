import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { getCurrentUser } from '../features/userSlice'

const PrivateRoute = () => {
    const {currentUser} = useSelector(getCurrentUser)
  return (
    currentUser !== null ? <Outlet /> : <Navigate to='/sign-in'/>
  )
}

export default PrivateRoute
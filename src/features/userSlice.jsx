import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action)=>{
            state.currentUser = action.payload
        },
        upDateUser: (state,action)=>{
            state.currentUser = action.payload
        },
        deleteUser: (state)=>{
            state.currentUser = null
        },
        signOut: (state)=>{
            state.currentUser = null
        }
    }
})

export const getCurrentUser = (state)=> state.user;
export const {setUser, upDateUser, deleteUser, signOut} = userSlice.actions
export default userSlice.reducer

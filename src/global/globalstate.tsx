import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "" || null
}

const globalstate = createSlice({
  name: "AuthFlow",
  initialState,
  reducers: {
    CreateUser: (state: any, {payload}) => {
        state.user = payload
    },
    LogOut: (state: any) => {
        state.user = null
    }
  }
});

export const {CreateUser,LogOut} = globalstate.actions

export default globalstate.reducer
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: TUser = {
    email: "",
    firstName: "",
    lastName: "",
    key: "",
    phoneNumber: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TUser>) => {
            const { payload } = action

            state.email = payload.email
            state.firstName = payload.firstName
            state.lastName = payload.lastName
            state.key = payload.key
            state.phoneNumber = payload.phoneNumber
        },
        logout: (state, _action: PayloadAction<TUser>) => {
            state.email = ""
            state.firstName = ""
            state.lastName = ""
            state.key = ""
            state.phoneNumber = ""
        }
    }
})

export const { logout, setUser } = userSlice.actions
export default userSlice.reducer
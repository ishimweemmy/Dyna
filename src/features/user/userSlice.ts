/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TUser = {
  email: "",
  firstName: "",
  lastName: "",
  id: -1,
  phoneNumber: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      const { payload } = action;

      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.id = payload.id;
      state.phoneNumber = payload.phoneNumber;
    },
    logoutUser: (state, _action: PayloadAction<TUser>) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.id = -1;
      state.phoneNumber = "";
    },
  },
});

export const { logoutUser, setUser } = userSlice.actions;
export default userSlice.reducer;

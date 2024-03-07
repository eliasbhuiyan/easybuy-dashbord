import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    value: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    loggeduser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loggeduser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
    setMessage(state, action) {
      state.error = action.payload;
    },
  },
});

export default authSlice.actions;
export const authReducer = authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartActive: false,
  notifications: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCartActive(state, actions) {
      state.cartActive = actions.payload ?? !state.cartActive;
    },

    sendNotification(state, actions) {
      let notification = actions.payload;
      let id = Math.random();
      state.notifications.unshift({ ...notification, id });
    },

    deleteNotification(state, actions) {
      let id = actions.payload;
      state.notifications = state.notifications.filter((n) => n.id !== id);
    },
  },
});

export default uiSlice.actions;
export const uiReducer = uiSlice.reducer;

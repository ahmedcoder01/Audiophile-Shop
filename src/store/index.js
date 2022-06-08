import { configureStore } from "@reduxjs/toolkit";
// import reducers
import { productsReducer } from "./slices/productsSlice/products";
import { authReducer } from "./slices/authSlice/authSlice";
import { uiReducer } from "./slices/uiSlice/uiSlice";
import { cartReducer } from "./slices/cartSlice/cart";

const store = configureStore({
  //reducers
  reducer: {
    products: productsReducer,
    auth: authReducer,
    ui: uiReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./productSlice.js";
import counterSlice from "./counterSlice.js";
import cartSlice from "./cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export default store;

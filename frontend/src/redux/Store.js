import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./ProductSlice.js";
import counterSlice from "./counterSlice.js";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export default store;

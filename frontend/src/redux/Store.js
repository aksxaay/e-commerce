import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./ProductSlice.js";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export default store;

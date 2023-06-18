import { createSlice } from "@reduxjs/toolkit";
import { fakeStoreApiProducts } from "../utils/api";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "Error",
});

const productSlice = createSlice({
  // name
  // initialState
  // reducers
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export default productSlice;

export const { setProducts, setStatus } = productSlice.actions;

// thunk

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await fetch(fakeStoreApiProducts);
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      console.log("ProductSlice.js/error", error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}

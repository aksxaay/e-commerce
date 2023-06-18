import { createSlice } from "@reduxjs/toolkit";

/* 
need to create all these actions
1. decrement
2. increment
2.5 incrementByAmount

these aren't reducers
3. incrementAsync
4. selectCount
*/

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setCount } =
  counterSlice.actions;

// thunk
// didn't understand the dispatch part, but we'll see
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// selector - selects a value from state
export const selectCount = (state) => state.counter.value;

export default counterSlice;

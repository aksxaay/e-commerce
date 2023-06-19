// items, totalQuantity, totalPrice

// actions: addItemToCart, removeItemFromCart

import { createSlice } from "@reduxjs/toolkit";

// takes object with 3 properties
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    // can take methods / properties

    // method
    addItemsToCart(prevState, action) {
      const newItem = action.payload;
      const existingItem = prevState.items.find(
        (item) => item.id === newItem.id
      );
      prevState.totalQuantity++;

      if (!existingItem) {
        prevState.items.push({
          name: newItem.name,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: Number(newItem.price),
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += Number(newItem.price);
      }
    },

    removeItemFromCart: (prevState, action) => {
      const itemToBeRemoved = prevState.items.find(
        (item) => item.id === action.payload?.id
      );

      // if item found
      if (itemToBeRemoved) {
        prevState.totalQuantity--;
        if (itemToBeRemoved.quantity === 1)
          prevState.items.filter((item) => item.id === itemToBeRemoved.id);
        else {
          itemToBeRemoved.quantity++;
          itemToBeRemoved.totalPrice -= itemToBeRemoved.price;
        }
      }
    },
  },
});

export default cartSlice;
export const { addItemsToCart, removeItemFromCart } = cartSlice.actions;

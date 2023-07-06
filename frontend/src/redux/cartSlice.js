// items, totalQuantity, totalPrice

// actions: addItemToCart, removeItemFromCart

import { createSlice } from "@reduxjs/toolkit";

// createSlice() takes object with 3 properties
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
    addItemToCart(prevState, action) {
      const newItem = action.payload;
      const existingItem = prevState.items.find(
        (item) => item.id === newItem.id
      );
      prevState.totalQuantity++;
      prevState.totalPrice += newItem.price;

      if (!existingItem) {
        prevState.items.push({
          id: newItem.id,
          image: newItem.image,
          name: newItem.name,
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
      const id = action.payload;
      const itemToBeRemoved = prevState.items.find((item) => item.id === id);

      // if item found
      if (itemToBeRemoved) {
        prevState.totalPrice -= itemToBeRemoved.price;
        prevState.totalQuantity--;
        if (itemToBeRemoved.quantity === 1) {
          console.log(prevState.items);
          // apparently filter doesn't mutate the array
          prevState.items = prevState.items.filter(
            (item) => item.id !== itemToBeRemoved.id
          );
          console.log(prevState.items);
        } else {
          itemToBeRemoved.quantity--;
          itemToBeRemoved.totalPrice -= itemToBeRemoved.price;
        }
      }
    },
  },
  // this is how you default load the cart
});

export default cartSlice;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

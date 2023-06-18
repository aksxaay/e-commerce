/*
this is video 1 - 7 codevolution
*/

import { createStore } from "redux";
import { bindActionCreators } from "redux";
// start with actions
// describe action
const CAKE_ORDERED = "CAKE_ORDERED";

// define an action object(with prop type)
// then return action through action creator
const orderCake = () => ({
  type: CAKE_ORDERED,
  quantity: 1,
});

// now we have to do reducer
// we have to define initialState as well
// (prevState, action) => newState

const initialState = {
  numOfCakes: 10,
  testProperty: 0,
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        // old state copy
        ...prevState,
        numOfCakes: --prevState.numOfCakes,
      };

    default:
      return prevState;
  }
};

// configure store
// store takes in a reducer
const store = createStore(reducer);
console.log("Initial state", store.getState());

// subscribe exposes a method
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

// now we dispatch an action
// the return from orderCake, don't directly dispatch
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();

// what happens if you try to call after unsubscribe
// invalid call nothing happens
store.dispatch(orderCake());

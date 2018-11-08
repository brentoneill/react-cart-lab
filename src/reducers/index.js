// src/js/reducers/index.js
import {
  ADD_CART_ITEM,
  UPDATE_CART_ITEM,
  DELETE_CART_ITEM,
} from "../actions";

const initialState = {
  // Array of products
  cartItems: []
  uniqueid: 1
};

const cartReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_CART_ITEM:
      return {...state,
        cartItems: [ ...state.cartItems, action.payload],
        uniqueid: state.uniqueid+1
      };

    case UPDATE_CART_ITEM:
      var index = state.cartItems.findIndex( (item) => { return(item.id === action.payload.id) });

      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, index),
          action.payload,
          ...state.cartItems.slice(index+1),
        ]
      };

    case DELETE_CART_ITEM:
      var index = state.cartItems.findIndex( (item) => { return(item.id === action.payload.id) });

      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, index),
          ...state.cartItems.slice(index+1),
        ]
      };

    default:
      return state;
  }

};

export default cartReducer;

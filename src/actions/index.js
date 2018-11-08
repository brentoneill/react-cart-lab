// src/js/actions/index.js

export const
  ADD_CART_ITEM    = "ADD_CART_ITEM",
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
  DELETE_CART_ITEM = "DELETE_CART_ITEM"
;

export const addCartItem = CartItem => ({
  type: ADD_CART_ITEM,
  payload: CartItem,
});

export const updateCartItem = CartItem => ({
  type: UPDATE_CART_ITEM,
  payload: CartItem,
});

export const deleteCartItem = CartItem => ({
  type: DELETE_CART_ITEM,
  payload: CartItem,
});

import { combineReducers } from "redux";
import CartReducer from "./cart";

const RootReducer = combineReducers({
  cart: CartReducer
});

export default RootReducer;

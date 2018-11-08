import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import cartReducer from "./reducers/index";

const store = createStore(cartReducer, applyMiddleware(logger));

export default store;

import {applyMiddleware, combineReducers, createStore} from 'redux';
import productListReducer from '../reducer/productListReducer';
import thunk from 'redux-thunk';
import cardReducer from '../reducer/cardReducer';

export const reducers = combineReducers({
  productList: productListReducer,
  cartList: cardReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));

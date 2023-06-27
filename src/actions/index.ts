import {
  ADD_TO_CART,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_LIST_INIT,
  GET_PRODUCT_LIST_SUCCESS,
  REMOVE_FROM_CART,
} from '../constants';
import {ProductInterface} from '../interface';

export const getProductList = (data: ProductInterface) => {
  return {type: GET_PRODUCT_LIST_SUCCESS, payload: data};
};
export const getProductListFailure = (error: any) => {
  return {type: GET_PRODUCT_LIST_FAILURE, payload: error};
};
export const getProductListInit = () => {
  return {type: GET_PRODUCT_LIST_INIT};
};

export const addTOCartAction = (data: ProductInterface) => {
  return {type: ADD_TO_CART, payload: data};
};
export const removeFromCartAction = (data: ProductInterface) => {
  return {type: REMOVE_FROM_CART, payload: data};
};

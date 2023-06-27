import {
  getProductList,
  getProductListFailure,
  getProductListInit,
} from '../actions';

export const fetchProductList = () => dispatch => {
  dispatch(getProductListInit());
  fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
    .then(response => response.json())
    .then(data => dispatch(getProductList(data)))
    .catch(error => dispatch(getProductListFailure(error)));
};

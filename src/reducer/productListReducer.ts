import {
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_LIST_INIT,
  GET_PRODUCT_LIST_SUCCESS,
} from '../constants';
import {ProductInterface} from '../interface';
import {ProductsList} from '../services';
import {isIosDevice} from '../utils';
type ProductListState = {
  productList: ProductInterface[];
  isLoading: boolean;
  error: any;
};
const initialState: ProductListState = {
  productList: isIosDevice ? ProductsList : [],
  isLoading: false,
  error: undefined,
};

export default function productListReducer(
  state: ProductListState = initialState,
  action,
) {
  switch (action.type) {
    case GET_PRODUCT_LIST_INIT:
      return {...state, isLoading: true};
    case GET_PRODUCT_LIST_SUCCESS:
      let stateData = {isLoading: false, productList: action?.payload};
      return {...state, ...stateData};
    case GET_PRODUCT_LIST_FAILURE:
      return {...state, isLoading: false};
    default:
      return state;
  }
}

import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants';

type CartListState = {
  cartMap: Map<number, number>;
};
const initialState: CartListState = {
  cartMap: new Map(),
};
export default function cardReducer(
  state: CartListState = initialState,
  action,
) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cartMap.get(action.payload.id)) {
        const count: number = state.cartMap.get(action.payload.id) ?? 0;
        state.cartMap.set(action.payload.id, count + 1);
      } else {
        state.cartMap.set(action.payload.id, 1);
      }
      return {
        ...state,
      };
    case REMOVE_FROM_CART:
      if (state.cartMap.get(action.payload.id)) {
        const count: number = state.cartMap.get(action.payload.id) ?? 0;
        if (count === 1) {
          state.cartMap.delete(action.payload.id);
        } else {
          state.cartMap.set(action.payload.id, count - 1);
        }
      }
      return {...state};

    default:
      return state;
  }
}

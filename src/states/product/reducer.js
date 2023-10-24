import { ActionType } from './action';

function productReducer(product = {}, action = {}) {
  switch (action.type) {
    case ActionType.GET_PRODUCT:
      return action.payload.product;

    default:
      return product;
  }
}

export default productReducer;
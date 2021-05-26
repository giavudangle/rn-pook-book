import {
  FETCH_PRODUCTS,
  PRODUCT_LOADING,
  PRODUCT_FAILURE,
} from "../../@types/productActionTypes";






const initialState = {
  products: [],
  isLoading: false,
};






export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
        isLoading: false,
      };

    default:
      return state;
  }
};

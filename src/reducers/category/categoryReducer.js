import {
  FETCH_CATEGORIES,
  CATEGORY_FAILURE,
  CATEGORY_LOADING
} from "../../@types/categoryActionTypes";
import { FIRST_OPEN } from "../../@types/firstTimeOpenActionTypes";






const initialState = {
  categories: [],
  isLoading:false
};


export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
        isLoading: false,
      };  
    default:
      return state;
  }
};

import {
  FETCH_REVIEW,
  REVIEW_LOADING
} from "../../@types/reviewActionTypes";






const initialState = {
  reviews: [],
  isLoading: false,
};






export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEW:
      return {
        ...state,
        reviews:action.payload,
        isLoading:false
      };
    case REVIEW_LOADING:
      return {
        ...state,
        isLoading:true
      };

    default:
      return state;
  }
};

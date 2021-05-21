import {
  FETCH_FAVORITE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FAVORITE_LOADING,
  FAVORITE_FAILURE,
} from "../../@types/favoriteActionTypes";

const initialState = {
  favoriteList: [],
  isLoading: false,
};
export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FAVORITE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_FAVORITE:    
      return {
        ...state,
        favoriteList: action.favoriteList,
        isLoading: false,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        isLoading: false,
        favoriteList:[...state.favoriteList,action.addItem]       
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoriteList: [...state.favoriteList.filter((q) => q.item._id !==action.itemId)],
        isLoading: false,
      };
    default:
      return state;
  }
};

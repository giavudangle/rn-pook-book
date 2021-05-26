import React from 'react'; 
import {ORDER_FAILURE,ORDER_LOADING,ADD_ORDER,FETCH_ORDER,CANCEL_ORDER_SUCCESSFUL} from '../../@types/orderActionTypes'


const initialState = {
  orders: [],
  isLoading: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_ORDER:
      return {
        ...state,
        orders: action.orderData,
        isLoading: false,
      };
    case ADD_ORDER:
      const newOrder = action.orderItem;    
      return {
        ...state,
        orders: state.orders.concat(newOrder),
        isLoading: false,
      };
    case CANCEL_ORDER_SUCCESSFUL:
      return {
        ...state,
        isLoading:false,
        orders : state.orders.filter(item => item._id !== action.payload)
      }
    default:
      return state;
  }
};

import React from 'react';

const emptyCart = {
  items: [],
};
const initialState = {
  cartItems: emptyCart,
  isLoading: false,
};

export const cartReducer = (state = initialState, action) => {
  switch(action.type){
    default: 
      return state
  }
}
import React from 'react';

const initialState = {
  user: {},
  notification: {},
  isLoading: false,
  error: false,
};

export const authReducer = (state = initialState,action) => {
  switch(action.type){
    default:
      return state;
  }

}
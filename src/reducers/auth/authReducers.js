import React from 'react';

//types
import {FIRST_OPEN} from '../../types/AuthTypes'

const initialState = {
  user: {},
  notification: {},
  isLoading: false,
  error: false,
  isFirstTime: false
};

export const authReducer = (state = initialState,action) => {
  switch(action.type){
    case FIRST_OPEN:
      return {...initialState, isFirstTime: true}
    default:
      return state;
  }

}
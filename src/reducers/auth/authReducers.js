import React from 'react';

import UserMessages from "../../messages/user";


//types
import {FIRST_OPEN} from '../../@types/firstTimeOpenActionTypes'

// const initialState = {
//   user: {},
//   notification: {},
//   isLoading: false,
//   error: false,
//   isFirstTime: false
// };



const initialState = {
  user : {  
    "userid": "6081a65c13f3e21db7724b3a",
    "name": "Vudang",
    "password": "$2a$10$EIL.gyeDLUlrcV7fqBbOOeq0UHa/dKxQsl8nygmPw3V10wiE7jOle",
    "email": "vudang@gmail.com",
    "phone": "",
    "address": "",
    "profilePicture": "",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDgxYTY1YzEzZjNlMjFkYjc3MjRiM2EiLCJpYXQiOjE2MTk1MTE2NjAsImV4cCI6MTYyMDExNjQ2MH0.CUPn3j76NBZ1vd1QclaOA-2NdcCp84hbNBSGhbS7n3U",
    "loginAt": 1619511660945,
    "expireTime": 1620116460945
  },
  notification : UserMessages["user.login.success"],
  isLoading:false,
  error:false

}

export const authReducer = (state = initialState,action) => {
  switch(action.type){
    case FIRST_OPEN:
      return {...initialState, isFirstTime: true}
    default:
      return state;
  }

}
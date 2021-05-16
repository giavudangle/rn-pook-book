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
  user:{
    "userid": "6081a65c13f3e21db7724b3a",
    "name": "Vudang",
    "password": "$2a$10$EIL.gyeDLUlrcV7fqBbOOeq0UHa/dKxQsl8nygmPw3V10wiE7jOle",
    "email": "vudang@gmail.com",
    "phone": "",
    "address": "",
    "profilePicture": "",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDgxYTY1YzEzZjNlMjFkYjc3MjRiM2EiLCJpYXQiOjE2MjExNTA2MTgsImV4cCI6MTYyMTc1NTQxOH0.87qcEcJu6kB5atsX6KzTyjSK7aPV40nuliMngCLb_vE",
    "loginAt": 1621150618978,
    "expireTime": 1621755418978
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
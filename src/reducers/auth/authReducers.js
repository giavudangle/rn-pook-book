import React from 'react';

import UserMessages from "../../messages/user";

import {AUTH_LOADING,
  LOGIN,
  LOGOUT,
  EDIT_INFO,
  UPLOAD_PROFILEPIC,
  SIGN_UP,
  AUTH_FAILURE,
  FORGET_PASSWORD,
  RESET_PASSWORD,} from '../../actions/auth/authActions'
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
    "name": "Đặng Lê Gia Vũ",
    "password": "$2a$10$EIL.gyeDLUlrcV7fqBbOOeq0UHa/dKxQsl8nygmPw3V10wiE7jOle",
    "email": "vudang@gmail.com",
    "phone": "0967781273",
    "address": "67 Huỳnh Thiện Lộc",
    "profilePicture": "",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDgxYTY1YzEzZjNlMjFkYjc3MjRiM2EiLCJpYXQiOjE2MjE1Njg4NTgsImV4cCI6MTYyMjE3MzY1OH0.Ai_T3mNN9l5tgHBDkuQHwJe7OO_FmcTOZqSBH6aR9QQ",
    "loginAt": 1621568858063,
    "expireTime": 1622173658063
  },
  notification : UserMessages["user.login.success"],
  isLoading:false,
  error:false,
  isFirstTime:false

}


export const authReducer = (state = initialState,action) => {
  switch(action.type){
    case FIRST_OPEN:
      return {...initialState, isFirstTime: true}
    case SIGN_UP:
      return{...state,isLoading:false}
    default:
      return state;
    

  }

}
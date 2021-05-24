import {
  AUTH_LOADING,
  LOGIN,
  LOGOUT,
  EDIT_INFO,
  UPLOAD_PROFILEPIC,
  SIGN_UP,
  AUTH_FAILURE,
  FORGET_PASSWORD,
  RESET_PASSWORD,
} from "../../@types/authActionTypes";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import UserMessages from "../../messages/user";

// const initialState = {
//   user: {},
//   notification: {},
//   isLoading: false,
//   error: false,
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


export const authReducer = (state = initialState, action) => {
  //set user if token doesn't expire yet
  // const userInformation = async () => {
  //   const getUser = await AsyncStorage.getItem("user");
  //   if (!getUser) {
  //     return initialState;
  //   }
  //   const parsedUser = await JSON.parse(getUser);
  //   return (initialState.user = parsedUser.data);
  // };
  // userInformation();

  switch (action.type) {
    case AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
        // error: false,
      };
    }
    case LOGIN:
      return {
        user: action.user,
        notification: UserMessages["user.login.success"],
        isLoading: false,
      };
    case SIGN_UP: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        user: {},
        notification: UserMessages["user.logout.sucesss"],
        isLoading: false,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        isLoading: false,
      };
    case EDIT_INFO:
      state.user.phone = action.phone;
      state.user.address = action.address;
      //Return ...state.user make the comp rerender
      return {
        ...state,
        user: {
          ...state.user,
        },
        isLoading: false,
      };
    case UPLOAD_PROFILEPIC:
      state.user.profilePicture = action.profilePic;
      return {
        ...state,
        user: {
          ...state.user,
        },
        isLoading: false,
      };
    default:
      return state;
  }
};

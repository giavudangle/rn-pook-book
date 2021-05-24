import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../utils/Config';
import { predictTimeoutPromise } from '../../utils/Tools';

import axios from 'axios'

import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOADING, LOGIN, LOGOUT, RESET_ERROR, RESET_PASSWORD, UPLOAD_PROFILEPIC } from '../../@types/authActionTypes'


import AskingExpoToken from '../../components/Notification/AskingNotificationPermisson';
import * as SecureStore from 'expo-secure-store';


export const SignUp = (name, email, password) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_LOADING,
    });
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/user/register`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }),
      );
      if (!response.ok) {
        const errorResData = await response.json();
        dispatch({
          type: AUTH_FAILURE,
        });
        throw new Error(errorResData.err);
      }
      dispatch({
        type: SIGN_UP,
      });
    } catch (err) {
      throw err;
    }
  };
};



//Login
export const Login = (email, password) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_LOADING,
    });
    const pushToken = await AskingExpoToken();
    try {
      const response = await predictTimeoutPromise(
        axios.post(`${API_URL}/users/login`, {
          email,
          password,
          pushTokens: [pushToken],
        },{
          headers:{
            "Access-Control-Allow-Origin": "*",
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        }),
      );
      if (response.status !== 200) {
        dispatch({
          type: AUTH_FAILURE,
        });
        alert('Failed in authentication');
      }
      const resData = response.data
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          resData
        }),
      );
    
      /**
      |--------------------------------------------------
      | AUTO LOGOUT
      |--------------------------------------------------
      */
      //dispatch(setLogoutTimer(15000)); // 15 seconds for testing
      dispatch(setLogoutTimer(60 * 60 * 1000)); // 1h = 60m * 60s
      dispatch({
        type: LOGIN,
        user: resData,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const EditInfo = (phone, address) => {
  return async (dispatch, getState) => {
    const user = getState().auth.user;
    dispatch({
      type: AUTH_LOADING,
    });
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/user/${user.userid}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'auth-token': user.token,
          },
          method: 'PATCH',
          body: JSON.stringify({
            phone,
            address,
          }),
        }),
      );
      if (!response.ok) {
        const errorResData = await response.json();
        dispatch({
          type: AUTH_FAILURE,
        });
        Error(errorResData.err);
      }

      dispatch({
        type: EDIT_INFO,
        phone,
        address,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const UploadProfilePic = (imageUri, filename, type) => {
  return async (dispatch, getState) => {
    dispatch({
      type: AUTH_LOADING,
    });
    const user = getState().auth.user;
    let formData = new FormData();
    // Infer the type of the image
    formData.append('profilePic', {
      uri: imageUri,
      name: filename,
      type,
    });
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/user/photo/${user.userid}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            'auth-token': user.token,
          },
          method: 'PATCH',
          body: formData,
        }),
      );
      if (!response.ok) {
        const errorResData = await response.json();
        dispatch({
          type: AUTH_FAILURE,
        });
        throw new Error(errorResData.err);
      }

      dispatch({
        type: UPLOAD_PROFILEPIC,
        profilePic: imageUri,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const ForgetPassword = (email) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_LOADING,
    });
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/user/reset_pw`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            email,
          }),
        }),
      );
      if (!response.ok) {
        const errorResData = await response.json();
        dispatch({
          type: AUTH_FAILURE,
        });
        throw new Error(errorResData.err);
      }
      dispatch({
        type: FORGET_PASSWORD,
      });
    } catch (err) {
      throw err;
    }
  };
};
export const ResetPassword = (password, url) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_LOADING,
    });
    try {
      const response = await predictTimeoutPromise(
        fetch(
          `${API_URL}/user/receive_new_password/${url.userid}/${url.token}`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
              password,
            }),
          },
        ),
      );
      if (!response.ok) {
        const errorResData = await response.json();
        dispatch({
          type: AUTH_FAILURE,
        });
        throw new Error(errorResData.err);
      }
      dispatch({
        type: RESET_PASSWORD,
      });
    } catch (err) {
      throw err;
    }
  };
};

//Logout
export const Logout = () => {
  return (dispatch) => {
    clearLogoutTimer(); //clear setTimeout when logout
    AsyncStorage.removeItem('user'); //  Lưu thông tin này vô Store có bảo mật 
    dispatch({
      type: LOGOUT,
      user: {},
    });
  };
};

//Auto log out
let timer;
const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};
export const setLogoutTimer = (expirationTime) => {
  return (dispatch) => {
    timer = setTimeout(async () => {
      await dispatch(Logout());
      alert('Logout section expired');
    }, expirationTime);
  };
};

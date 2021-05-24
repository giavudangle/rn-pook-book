import React, { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { DrawerNavigator, IntroStackScreen } from './PookNavigator';
import { useDispatch } from 'react-redux';
import { Login, Logout } from '../actions/auth/authActions';
import * as SecureStore from 'expo-secure-store'
//Modalize
import { Host } from 'react-native-portalize';
//Deep Link
import { urlRedirect } from '../utils/Tools';
import * as Linking from 'expo-linking';


//Types
import {IS_FIRST_TIME} from '../@types/firstTimeOpenActionTypes'
import { secretKey } from '../utils/Config';


export const AppNavigator = () => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
    // Get Value connection is first time from store
  const isFirstOpen = useSelector((state) => state.auth.isFirstTime);


  /**
  |--------------------------------------------------
  | Deep linking event listener
  | Listening all new url events coming from Expo
  |--------------------------------------------------
  */
  useEffect(() => {
    // listen for new url events coming from Expo
    Linking.addEventListener(
      'url',
      (event) => {
        urlRedirect(event.url);
      },
      [urlRedirect],
    );
    Linking.getInitialURL().then(urlRedirect);
    Linking.removeEventListener(
      'url',
      (event) => {
        urlRedirect(event.url);
      },
      [urlRedirect],
    );
  }, [urlRedirect]);

  const unmounted = useRef(true);

  /**
  |--------------------------------------------------
  | CHECK IS FIRST TIME OPEN APP & AUTO LOGOUT
  |--------------------------------------------------
  */

  const clearStorageDataForTesting = async () => {
    await AsyncStorage.clear(); // use this for testing
    await SecureStore.deleteItemAsync(secretKey)
  }


  const isUserHaveYet = async () => {
    const user = await AsyncStorage.getItem('user');
    if(user !== null ) {
      const parsedUser = JSON.parse(user);
      const {email,rawPassword,expireTime} = parsedUser.resData;
      if (expireTime - Date.now() < 0) {
        dispatch(Logout());
      } else {
        dispatch(Login(email,rawPassword))
      }
    }
    if(!unmounted.current) return null;
  }  
  
  const isFirstTime = async () => {
    const firstOpen = await AsyncStorage.getItem(IS_FIRST_TIME);
    setValue(firstOpen);
    if(!unmounted.current) return null;

  };

  useEffect(() => {
    //clearStorageDataForTesting();
    isFirstTime();
    isUserHaveYet()
    return () => unmounted.current = false

  },[])

  /**
  |--------------------------------------------------
  | AUTO LOGOUT SUBSCRIPTION
  |--------------------------------------------------
  */

  return (
    <NavigationContainer ref={navigationRef}>
      <Host>  
        {
          (!isFirstOpen && value === null) 
          ? <IntroStackScreen />
          : <DrawerNavigator/>
        }
      </Host>
    </NavigationContainer>
  );
};

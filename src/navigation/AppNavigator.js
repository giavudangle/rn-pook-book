import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { DrawerNavigator, IntroStackScreen } from './PookNavigator';
import { useDispatch } from 'react-redux';
import { Logout } from '../reducers';
//Modalize
import { Host } from 'react-native-portalize';
//Deep Link
import { urlRedirect } from '../utils/Tools';
import * as Linking from 'expo-linking';

//Types
import {IS_FIRST_TIME} from '../types/AuthTypes'


export const AppNavigator = () => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  
  // Get Value connection is first time from store
  const isFirstOpen = useSelector((state) => state.auth.isFirstTime);
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

  useEffect(() => {

    const isFirstTime = async () => {
      await AsyncStorage.clear();
      const firstOpen = await AsyncStorage.getItem(IS_FIRST_TIME);
      console.log(firstOpen)
      setValue(firstOpen);
    };
    isFirstTime();
    const autoLogout = async () => {
      const getUser = await AsyncStorage.getItem('user');
      if (getUser) {
        const user = await JSON.parse(getUser);
        if (user.data.expireTime - Date.now() < 0) {
          dispatch(Logout());
        }
      }
      return;
    };
    autoLogout();
  }, []);
  useEffect(() => {
    const autoLogout = async () => {
      const getUser = await AsyncStorage.getItem('user');
      if (getUser) {
        const user = await JSON.parse(getUser);
        if (user.data.expireTime - Date.now() < 0) {
          dispatch(Logout());
        }
      }
      return;
    };
    autoLogout();
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Host>
        
        {(isFirstOpen || value !== null) && <DrawerNavigator />}
        {(!isFirstOpen && value === null) && <IntroStackScreen />}
      </Host>
    </NavigationContainer>
  );
};

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, } from 'react-native';

import IntroScreen from './src/screens/IntroScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import {SignUpScreen} from './src/screens/SignUpScreen'
import {ForgetPasswordScreen} from './src/screens/ForgetPasswordScreen'
const { width, height } = Dimensions.get('screen')

export default function App() {
  return (
   <ForgetPasswordScreen/>
  );
}


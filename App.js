import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView,  } from 'react-native';

// import IntroScreen from './src/screens/IntroScreen/index';
import HomeScreen from './src/screens/HomeScreen/index';
import LoginScreen from './src/screens/LoginScreen/index';

const {width, height} = Dimensions.get('screen')

export default function App() {
  return (
      <LoginScreen/>
  );
}


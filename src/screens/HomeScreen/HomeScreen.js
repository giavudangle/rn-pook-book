import React from 'react'
import { View, Text } from 'react-native'

//Components
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation}/>
      <Body navigation={navigation}/>
      <Footer navigation={navigation}/>
    </View>
  )
}


import React from 'react'
import { View, Text } from 'react-native'
import {AuthBody} from './components'
export const AuthScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <AuthBody navigation={navigation}/>
      </View>
    </View>
  )
}



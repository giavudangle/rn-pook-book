import React from 'react'
import { View, Text,Button } from 'react-native'
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



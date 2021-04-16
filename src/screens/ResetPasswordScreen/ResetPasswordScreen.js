import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors'

import styles from './styles'

//Component
import TextInputCustom from './components/TextInputCustom';
import Header from './components/Header';
import ButtonSubmit from './components/ButtonSubmit';

//react-native-paper hook
import {useTheme} from 'react-native-paper';


export const ResetPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Text style={[styles.title, {color: Colors.lighter_green}]}>Reset password</Text>
      <TextInputCustom label='Enter password'/>
      <TextInputCustom label='Confirm password'/>
      <ButtonSubmit/>
    </View>
  )
}



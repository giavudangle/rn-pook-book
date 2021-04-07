import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import {Header,CartBody,TotalButton} from './components'
import Colors from '../../utils/Colors';


const { height } = Dimensions.get('window');


export const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <CartBody/>
      <TotalButton/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  centerLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
  },
});

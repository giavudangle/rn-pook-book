import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

export default function header({title,titleColor}) {
  return (
    <View>
      <Text style={[styles.title,{color:`${titleColor}`}]}>{title}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily:'Roboto-Bold'
  }
})

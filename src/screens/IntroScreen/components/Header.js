import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

export default function header({title}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

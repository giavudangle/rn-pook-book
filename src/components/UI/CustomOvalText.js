import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import Colors from '../../utils/Colors'

const CustomOvalText = (props) => {
  return (
    <View style={{...styles.container,...props.style}}>
      <Text
        allowFontScaling={false}
        selectable={props.selectable}
        style={{ ...styles.text, ...props.style }}
      >
        {props.children}
      </Text>
    </View>

  )
}

export default CustomOvalText

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.primary,
    borderRadius:300,
    width:'50%',
    paddingVertical:4,
    paddingHorizontal:2,
    justifyContent:'center',
    alignItems:'center',
    height:23
  },
  text: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
})

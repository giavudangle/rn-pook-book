import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import Colors from '../../utils/Colors'

const CustomBorderText = (props) => {
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

export default CustomBorderText

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.red,
    borderRadius:0,
    borderWidth:1,
    borderColor:Colors.primary,
    width:'100%',
    paddingVertical:4,
    paddingHorizontal:2,
    justifyContent:'center',
    alignItems:'center',
    height:30,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
})

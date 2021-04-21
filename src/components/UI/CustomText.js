import React from 'react'
import { StyleSheet, Text } from 'react-native'

const CustomText = (props) => {
    return (
        <Text
            allowFontScaling={false}
            selectable={props.selectable}
            style={{ ...styles.text, ...props.style }}
        >
            {props.children}
        </Text>
    )
}

export default CustomText

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
    },
})

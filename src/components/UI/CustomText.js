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
<<<<<<< HEAD
        fontSize: 18,
        fontFamily: 'Roboto-Bold'
=======
        fontSize: 14,
        fontFamily: 'Roboto-Regular'

>>>>>>> f3359442e103e5e3836a90a41f7045ebab205336
    },
})

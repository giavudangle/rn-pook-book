import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native'

const {width, height} = Dimensions.get('screen')

export default function SubSlide({title, content, last, nextSlide, scrollX}) {

    const backgroundColor = scrollX.interpolate({
        inputRange: [0, width, width * 2],
        outputRange: ["#7EFFB1", "#5BFF9C", "#4DFF94"],
        extrapolate: 'clamp' 
      })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>

            <TouchableOpacity onPress={nextSlide}>
                <Animated.View style={[styles.scrollButton,{backgroundColor: backgroundColor}]}>
                    <Text style={{color:'#00806C',fontSize:18,fontWeight:'bold'}}>
                        {last ? "Bắt đầu" : "Tiếp theo"}
                    </Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        marginBottom: 30
    },
    title: {
        fontSize: 25,
        marginBottom: 10,
        fontFamily:'Roboto-Medium'

    },
    content: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'200',
        fontFamily:'Roboto-LightItalic'

    },
    scrollButton: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15,
        marginTop: 40,
        marginLeft:200,
    }
})

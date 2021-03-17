import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native'

const {width, height} = Dimensions.get('screen')

export default function SubSlide({title, content, last, nextSlide, scrollX}) {

    const backgroundColor = scrollX.interpolate({
        inputRange: [0, width, width * 2],
        outputRange: ["#017fff", "#1ba8ff", "#45b3f7"],
        extrapolate: 'clamp' 
      })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>

            <TouchableOpacity onPress={nextSlide}>
                <Animated.View style={[styles.scrollButton,{backgroundColor: backgroundColor}]}>
                    <Text>
                        {last ? "let's start" : "Next"}
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
        marginBottom: 10
    },
    content: {
        fontSize: 18,
        textAlign: 'center'
    },
    scrollButton: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15,
        marginTop: 20
    }
})

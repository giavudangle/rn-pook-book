import React from 'react'
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { SignUpForm } from './components'

const { width, height } = Dimensions.get('screen');
export const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1, position: 'absolute', height,width}}
                source={require("../../assets/Forest.jpg")}
                blurRadius={3}
            />
            <SignUpForm navigation={navigation} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        position: 'absolute',
        width: width,
        height: height

    }
})
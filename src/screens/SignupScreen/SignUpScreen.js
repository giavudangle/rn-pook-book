import React from 'react'
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { SignUpForm } from './components'
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen');
export const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(116,185,255,0.9)', 'rgba(116,185,255,0.8)', 'rgba(116,185,255,0.6)', 'rgba(116,185,255,0.4)', 'rgba(116,185,255,0.2)', 'transparent',]}
                style={{ flex: 1, position: 'absolute', height, width }}
            >
            <SignUpForm navigation={navigation} />
            </LinearGradient>

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
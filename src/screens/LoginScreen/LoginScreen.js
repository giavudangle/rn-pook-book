import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions
} from 'react-native'

import { LoginForm } from './components';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen');

export const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(116,185,255,0.9)', 'rgba(116,185,255,0.8)', 'rgba(116,185,255,0.6)', 'rgba(116,185,255,0.4)', 'rgba(116,185,255,0.2)', 'transparent',]}
                style={{ flex: 1, position: 'absolute', height, width }}
            >
                <LoginForm navigation={navigation} />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

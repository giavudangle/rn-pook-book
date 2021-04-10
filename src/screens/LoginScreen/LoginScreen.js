import React from 'react'
import {
    View, 
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions
} from 'react-native'

import {LoginForm} from './components';

const {width,height}=Dimensions.get('screen');
export const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{flex:1,position:'absolute',height,width}}
                source={require('../../assets/Images/Forest.jpg')}
            >
            </ImageBackground>
            <LoginForm />
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

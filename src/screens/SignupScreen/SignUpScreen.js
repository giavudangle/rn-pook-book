import React from 'react'
import { View,ImageBackground,StyleSheet, Dimensions } from 'react-native'
import {SignUpForm} from './components'

const {width, height} = Dimensions.get('screen');
export const SignUpScreen=({navigation})=> {
    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.image} 
                blurRadius={1.5}
                source={require('../../assets/background.jpg')}
            >
                <SignUpForm navigation={navigation}/>

            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:1,
        position:'absolute',
        width: width,
        height: height

    }
})
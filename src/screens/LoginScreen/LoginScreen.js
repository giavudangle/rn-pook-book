import React from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'

import Header from './components/Header';
import TextInput from './components/TextInputCustom';

export const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>Welcome</Text>
            <TextInput/>

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

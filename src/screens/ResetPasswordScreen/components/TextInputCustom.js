import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {TextInput} from 'react-native-paper';

export default function TextInputCustom() {
    return (
        <View>
            <TextInput style={styles}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {

    }
})

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../../utils/Colors'

export default function RenderCarouselItem({item}) {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 30}}>{item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lighter_green,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

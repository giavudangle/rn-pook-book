import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Header({navigation}) {
    return (
        <View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <FontAwesome name="chevron-left" size={24} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        color: '#00806C',
        fontWeight: 'bold',
        padding: 10,
        marginLeft: 8
    }
})
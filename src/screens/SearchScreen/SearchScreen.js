import React from 'react'
import { View, Text } from 'react-native'

//styles
import styles from './styles'

//Components
import Header from './components/Header'
import Body from './components/Body'

export function SearchScreen() {
    return (
        <View style={styles.container}>
            <Header/>
            <Body/>
        </View>
    )
}

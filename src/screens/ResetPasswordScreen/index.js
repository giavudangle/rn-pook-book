import React from 'react'
import { 
    View, 
    Text 
} from 'react-native'

import styles from './styles';

import TextInputCustom from './components/TextInputCustom'

export default function ResetPasswordScreen() {
    return (
        <View style={styles.container}>
            <TextInputCustom/>
        </View>
    )
}

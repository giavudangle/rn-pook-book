import React from 'react'
import { 
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

//Colors
import Colors from '../../../utils/Colors'

export default function SearchBar() {
    return (
        <TextInput
            style={styles.textInput}
            placeholder="Tìm kiếm sản phẩm"
            placeholderTextColor={Colors.lighter_green}
            onChangeText={text => console.log(text)}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        height: 35,
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    }
})

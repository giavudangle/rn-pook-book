import React from 'react'
import {
    TextInput,
    Dimensions 
} from 'react-native'

//Colos
import Colors from '../../../utils/Colors'

const {width} = Dimensions.get('screen')

export default function SearchBar() {
    return (
        <TextInput 
            placeholder='Tìm kiếm sản phẩm'
            placeholderTextColor={Colors.lighter_green}
            style={{
                backgroundColor: 'rgba(0, 128, 108, 0.11)',
                width: width/1.2,
                borderRadius: 15,
                paddingLeft: 15,
                paddingTop: 5,
                paddingBottom: 5,
                marginRight: 20
            }}
        />
    )
}

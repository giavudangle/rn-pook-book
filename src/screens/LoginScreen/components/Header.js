import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Header() {
    return (
        <View>
            <Image style={{width: 200, height: 100}} source={{uri: 'https://prices.vn/photos/7/store/ma-giam-gia-tiki.png'}}/>
        </View>
    )
}

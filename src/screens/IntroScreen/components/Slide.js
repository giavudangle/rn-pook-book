import React from 'react'
import { 
    View,
    Text,
    StyleSheet, 
    Dimensions,
    Image
} from 'react-native'

import Header from './Header';

const {width, height} = Dimensions.get('screen');

//const imageUri = 'httpsrt-book-cartoon-portable-network-graphics-co-5ba3401acb5459.2332714215374254348328.jpg'
const imageUri = 'https://prices.vn/photos/7/store/ma-giam-gia-tiki.png'
export default function Slide({name}) {
    return (
    <View style={{flex: 1}}>
        <View style={styles.background}>
            <View style={styles.wrapContent}>
                <Header title={name}/>
                <Image resizeMode='center' style={{width: 200, height: 200, marginTop: 30}} source={{uri: imageUri}}/>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: width,        
      },
      wrapContent: {
        alignItems: 'center',
        paddingTop: 60,
      },
     
})

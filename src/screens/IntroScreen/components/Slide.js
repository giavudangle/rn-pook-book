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




export default function Slide({name,imageUrl}) {
    return (
    <View style={{flex: 1}}>
        <View style={styles.background}>
            <View style={styles.wrapContent}>
                <Header title={name} titleColor='#00806C'/>
                <Image
                resizeMode='stretch'
                style={{width:200,height:200,marginTop:40}}
                source={imageUrl}/>
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
        paddingTop: 50,
      },
     
})

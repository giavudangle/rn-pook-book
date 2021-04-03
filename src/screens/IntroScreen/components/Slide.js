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




export default function Slide({name}) {
    return (
    <View style={{flex: 1}}>
        <View style={styles.background}>
            <View style={styles.wrapContent}>
                <Header title={name} titleColor='#00806C'/>

                <Image
                resizeMode='contain' 
                source={require('../../../assets/book3.png')}/>
                
                
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

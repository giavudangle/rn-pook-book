import React from 'react'
import { 
    View,
    Text,
    StyleSheet, 
    Dimensions,
    Image
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Header from './Header';

const {width, height} = Dimensions.get('screen');




export default function Slide({name,imageUrl}) {
    return (
    <View style={{flex: 1}}>
        <View style={styles.background}>
            <View style={styles.wrapContent}>
                <Header title={name} titleColor={Colors.white}/>
                <Image
                resizeMode='stretch'
                style={{width:250,height:220,marginTop:40,borderRadius:50}}
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

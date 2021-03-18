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
                <Header title={name}/>
                <Image style={{width: 200, height: 200, marginTop: 30}} source={{uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/17021649_2041022529457954_2850228655665691898_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AQyXHJC-86EAX_Rb8oe&_nc_ht=scontent.fsgn2-5.fna&oh=f6b14a8b7d658f99210890d001e609bb&oe=606F21C7'}}/>
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

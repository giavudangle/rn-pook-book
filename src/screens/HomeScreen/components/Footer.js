import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Dimensions 
} from 'react-native'
import { navigationRef } from '../../../navigation/RootNavigation'

//Colors
import Colors from '../../../utils/Colors'

const {width, height} = Dimensions.get('screen')

export default function Footer({navigation}) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Product')}>
            <Text style={styles.buttonTitle}>Xem thêm</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 128, 108, 0.1)',
        width: width/1.1,
        alignSelf: 'center',
        height: 30,
        borderRadius: 10
        
    },
    buttonTitle: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: Colors.lighter_green,

    }
})

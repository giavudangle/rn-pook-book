import React from 'react'
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet,
    Dimensions 
} from 'react-native'
import Colors from '../../../utils/Colors'

//react-native-paper hook

const {width, height} = Dimensions.get('screen');
export default function ButtonSubmit() {
    return (
        <TouchableOpacity>
            <View style={[styles.container, {backgroundColor: Colors.lighter_green}]}>
                <Text style={styles.text}>Reset your password</Text>
            </View>
        </TouchableOpacity>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: width/1.1,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },
    text: {
        alignSelf:'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})

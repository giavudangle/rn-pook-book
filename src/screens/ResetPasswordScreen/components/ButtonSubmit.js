import React from 'react'
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet,
    Dimensions 
} from 'react-native'

//react-native-paper hook
import {useTheme} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');
export default function ButtonSubmit() {
    const {colors} = useTheme();
    return (
        <TouchableOpacity>
            <View style={[styles.container, {backgroundColor: colors.primary}]}>
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

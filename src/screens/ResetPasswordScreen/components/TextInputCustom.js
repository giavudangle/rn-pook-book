import React, {useState} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions 
} from 'react-native'
import {TextInput} from 'react-native-paper';

import Colors from '../../../utils/Colors';
//react-native-paper hook
import {useTheme} from 'react-native-paper'

const {width, height} = Dimensions.get('screen');

export default function TextInputCustom({label}) {
    const [hide, setHide] = useState(true);
    return (
        <View>
            <TextInput 
                style={styles.textInput} 
                placeholder={label}
                theme={{colors: {primary: Colors.lighter_green}}}
                left={
                    <TextInput.Icon 
                        name="lock" 
                        color={Colors.lighter_green}
                    />
                }
                right={
                    <TextInput.Icon 
                        name={hide ? "eye-off" : "eye"} 
                        onPress={() => setHide(!hide)}
                        color={Colors.lighter_green}
                    />
                }
                secureTextEntry={hide}
                onChangeText={text => console.log(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        width: width/1.1,
        alignSelf: 'center',
        marginTop: 15,
    }
})

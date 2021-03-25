import React from 'react';
import { View} from 'react-native';
import {TextInput} from 'react-native-paper';
//Colors
import Colors from '../../../utils/Colors';
export default function ForgetRenderField({
        label,
        iconLeft,
        iconRight,
        secureTextEntry
    }) {
    return (
        <View style={{marginTop:50}}> 
            <TextInput
                placeholder={label}
                left={<TextInput.Icon 
                    name={iconLeft}
                    size={24}
                    color={Colors.light_green}
                    style={{paddingLeft:10}}
                />}
                theme={{colors:{primary:Colors.leave_green}}}
                right={<TextInput.Icon 
                    name={iconRight}
                    size={24}
                    color={Colors.light_green}
                    style={{paddingLeft:10}}
                />}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

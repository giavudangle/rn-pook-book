import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomText from '../../../components/UI/CustomText';
//Colors
import Colors from '../../../utils/Colors';
export default function ForgetRenderField({
    label,
    keyboardType,
    icon,
    secureTextEntry,
    meta: { touched, error, warning },
    input: { onChange, ...restInput }
}) {
    return (
        <View>
            <TextInput
                placeholder={label}
                style={{ backgroundColor: '#fff' }}
                mode='flat'
                keyboardType={keyboardType}
                left={<TextInput.Icon
                    name={icon}
                    size={24}
                    color={Colors.light_green}
                    style={{ paddingLeft: 10 }}
                />}
                theme={{ colors: { primary: Colors.leave_green } }}
                secureTextEntry={secureTextEntry}
                {...restInput}
            />
            {touched && ((error && (
                <CustomText style={{ color: Colors.red }}>{error}</CustomText>
            )) || (warning && (
                <CustomText style={{ color: Colors.red }}>{warning}</CustomText>
            ))
            )}
        </View>
    )
}

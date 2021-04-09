import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
//Colors
import Colors from '../../../utils/Colors';

export default function RenderField({
    label,
    iconLeft,
    keyBoardType,
    autoCapitalize,
    hide,
    right,
}) {

    return (
        <View>
            <TextInput
                style={{
                    marginBottom: 10,
                    backgroundColor: '#fff',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    width: 340,
                    height: 61,
                    alignSelf: 'center',
                    overflow: 'hidden',
                }}
                secureTextEntry={hide}
                placeholder={label}
                keyboardType={keyBoardType}
                autoCapitalize={autoCapitalize}
                mode='flat'
                theme={{ colors: { primary: Colors.leave_green } }}
                right={right}
                left={<TextInput.Icon
                    name={iconLeft}
                    size={24}
                    color={Colors.lighter_green}
                    style={{ paddingLeft: 10 }}
                />}
                onChangeText={text=>console.log(text)}
            />
        </View>
    )
}

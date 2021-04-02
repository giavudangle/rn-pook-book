import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
//Colors
import Colors from '../../../utils/Colors';

export default function RenderField({ label, secureTextEntry, iconRight, iconLeft }) {
    return (
        <View>
            <TextInput
                style={{ marginBottom: 10 }}
                placeholder={label}
                secureTextEntry={secureTextEntry}
                mode='outlined'
                right={<TextInput.Icon

                    name={iconRight}
                    size={24}
                    color={Colors.lighter_green}
                    style={{ paddingLeft: 10 }}
                />}
                left={<TextInput.Icon
                    name={iconLeft}
                    size={24}
                    color={Colors.lighter_green}
                    style={{ paddingLeft: 10 }}
                />}
            />
        </View>
    )
}

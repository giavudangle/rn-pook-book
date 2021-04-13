import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

//Colors
import Colors from '../../../utils/Colors'
//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function RenderField({ label, icon, right, hide }) {
    return (
        <View>
            <TextInput
                placeholder={label}
                mode='flat'
                secureTextEntry={hide}
                style={{
                    overflow: 'hidden',
                    alignSelf:'center',
                    width:320,
                    height:60,
                    justifyContent:'center',
                    backgroundColor:'#fff',
                    marginBottom:20,
                    borderTopRightRadius:15,
                    borderTopLeftRadius:15,
                    borderBottomRightRadius:15,
                    borderBottomLeftRadius:15,
                }}
                theme={{ colors: { primary: Colors.leave_green } }}
                left={<TextInput.Icon
                    size={24}
                    color={Colors.light_green}
                    name={icon}
                    style={{ paddingRight: 10 }}
                />}
                right={right}
            />
        </View>
    )
}

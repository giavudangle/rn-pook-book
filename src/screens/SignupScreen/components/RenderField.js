import React,{useState} from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
//Colors
import Colors from '../../../utils/Colors';

export default function RenderField({ 
    label, 
     iconRight, 
     iconLeft,
     keyBoardType,
     autoCapitalize,
     hide,
     right,
     }) {
         
    return (
        <View>
            <TextInput
                style={{ marginBottom: 10,
                    backgroundColor:'#fff',
                 borderTopRightRadius:15,
                    borderTopLeftRadius:15,
                    borderBottomStartRadius:15,
                    borderBottomEndRadius:15,
                    width:340,
                    height:61,
                    alignSelf:'center',
                    overflow:'hidden',
                 }}
                secureTextEntry={hide}
                placeholder={label}
                keyboardType={keyBoardType}
                autoCapitalize={autoCapitalize}
                 mode='flat'
                theme={{colors:{primary:Colors.leave_green}}}
                right={right}
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

import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

//icon
import {MaterialCommunityIcons} from '@expo/vector-icons';

//Colors
import Colors from '../../../utils/Colors'

import CustomText from '../../../components/UI/CustomText';
export default function RenderField({
    label,
    icon,
    secureTextEntry,
    passIcon,
    meta:{touched,error,warning},
    input:{onChange,...restInput},
}) {
    return (
        <View>
            <TextInput
                placeholder={label}
                mode='flat'
                secureTextEntry={secureTextEntry}
                left={
                    <TextInput.Icon 
                        name={icon}
                        size={24}
                        color={Colors.green}
                        style={{paddingRight:10}}
                    />
                }
                style={{
                    overflow: 'hidden',
                    alignSelf: 'center',
                    width: 320,
                    height: 60,
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    marginBottom: 20,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderBottomLeftRadius: 15,
                }}
                theme={{ colors: { primary: Colors.leave_green } }}
                onChangeText={onChange}
                {...restInput}
                right={passIcon}
            />
            {touched && error && (
                <CustomText style={{color:'red',marginHorizontal:15,marginTop:5}}>{error}</CustomText>
            )}
        </View>
    )
}

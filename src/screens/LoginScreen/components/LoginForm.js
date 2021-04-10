import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

//Fonts

//Text Input in lib react-native-paper
import { TextInput } from 'react-native-paper'
//Custom Text
import CustomText from '../../../components/UI/CustomText';

import RenderField from './RenderField';

//Colors
import Colors from '../../../utils/Colors'

const { width, heigth } = Dimensions.get('screen');

export const LoginForm = () => {
    const [hide, setHide] = useState(true);
    return (
        <View style={styles.container}>
            <View>
                <CustomText style={styles.title}>LOGIN</CustomText>
            </View>

            <View >
                <RenderField
                    label='Your Email'
                    icon='email'
                />
                <RenderField
                    label='Your Password'
                    icon='lock'
                    hide={hide}
                    right={<TextInput.Icon
                        name={hide ? 'eye-off' : 'eye'}
                        size={24}
                        color={Colors.lighter_green}
                        onPress={() => setHide(!hide)}
                    />}
                />
            </View>

            <TouchableOpacity style={styles.textSign}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '700'
                    }}>LOGIN</Text>
            </TouchableOpacity>

          

            <TouchableOpacity style={{ marginTop: 50 }}>
                <Text style={styles.forget}>Quên mật khẩu?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200,
        flexDirection:'column',
    },

    title: {
        color: Colors.light_green,
        fontWeight: '900',
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 100,
        fontStyle: 'normal',
    },

    forget: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Roboto-LightItalic',
        textAlign: 'center',
    },

    textSign: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: Colors.lighter_green,
        width: 150,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
    }
})


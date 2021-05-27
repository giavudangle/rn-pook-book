
import React from 'react'
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

//Colors
import Colors from '../../../utils/Colors'

import CustomText from '../../../components/UI/CustomText'
//Icon 
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get('screen')
export const AuthBody = ({ navigation }) => {
    return (
        <View>
            <LinearGradient
                colors={['rgba(116,185,255,0.9)','rgba(116,185,255,0.8)','rgba(116,185,255,0.6)','rgba(116,185,255,0.4)','rgba(116,185,255,0.2)', 'transparent',]}
            >
            <LottieView
                source={require('../../../../src/components/IconAnimation/book.json')}
                autoPlay
                loop
                resizeMode='contain'
                style={{
                    marginBottom: 100,
                }}
            />

            <View style={styles.container}>
                <CustomText style={styles.title}>POOK BOOK</CustomText>
                <View>
                    <TouchableOpacity style={styles.login}
                        onPress={() => navigation.navigate('LoginScreen')}
                    >
                        <Text style={{
                            color: Colors.light_green,
                            fontWeight: 'bold',
                            fontSize: 20,

                        }}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.signup}
                        onPress={() => navigation.navigate('SignupScreen')}
                    >
                        <Text style={{
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}
                        >SIGNUP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>

        </View>
    )
}
const styles = StyleSheet.create({
    login: {
        borderRadius: 30,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        alignSelf: 'center',
        width: 280,
        height: 65,
        justifyContent: 'center',

    },
    container: {
        marginTop: 150,
    },
    title: {
        color: Colors.white,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 150,
    },
    signup: {
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.lighter_green,
        width: 280,
        height: 65,
        justifyContent: 'center',
        marginTop: 30,
    }
})


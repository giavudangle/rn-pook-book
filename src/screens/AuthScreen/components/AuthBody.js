import React from 'react'
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native'

//Colors
import Colors from '../../../utils/Colors'

import CustomText from '../../../components/UI/CustomText'

//Icon 
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get('screen')
export const AuthBody = ({ navigation }) => {
    return (
        <View>
            <ImageBackground
                source={require('../../../assets/Images/Forest.jpg')}
                style={{ flex: 1, width, height }}
                blurRadius={3}
            />
            <LottieView
                source={require('../../../../src/components/IconAnimation/book.json')}
                autoPlay
                loop
                resizeMode='contain'
                style={{
                    marginBottom: 50,
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
        marginTop: 200,
    },
    title: {
        color: Colors.light_green,
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


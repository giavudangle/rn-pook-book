import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Text
} from 'react-native';
//Colors
import Colors from '../../../utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../../../components/UI/CustomText';
import RenderField from './RenderField';

export const SignUpForm = (props) => {
    const { handleSubmit, reset } = props;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'position' : 'height'}
            keyboardVerticalOffset={40} //adjust the value here if you need more padding
            style={{ flex: 1 }}
        >
            <View style={styles.header}></View>
            <ScrollView>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginHorizontal: 10,
                            zIndex: 0,
                        }}
                    >
                        <View>
                            <CustomText style={styles.title}>REGISTER</CustomText>
                        </View>
                        <View>
                            <RenderField
                                label='Your name'
                                iconLeft='id-card'
                            />
                            <RenderField
                                label='Your email'
                                iconLeft='email'
                            />
                            <RenderField
                                label='Password'
                                secureTextEntry={true}
                                iconRight='eye'
                                iconLeft='lock'
                            />
                            <RenderField
                                label='Confirm password'
                                secureTextEntry={true}
                                iconRight='eye-off'
                                iconLeft='lock'
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.signIn}>
                                <Text style={{ color: 'white' }}>REGISTER</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop:150,
        marginBottom: 50,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    title: {
        color: Colors.light_green,
        fontSize: 40,
        letterSpacing: 5,
        fontWeight: 'bold',
        marginBottom:30,
        textAlign: 'center',
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "row",
        backgroundColor: Colors.lighter_green,
        marginTop: 20,
    }
})
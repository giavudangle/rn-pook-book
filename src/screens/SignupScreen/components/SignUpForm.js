import React,{useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Text,
    Dimensions
} from 'react-native';
import {TextInput} from 'react-native-paper';
//Colors
import Colors from '../../../utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../../../components/UI/CustomText';
import RenderField from './RenderField';

const {width,height}=Dimensions.get('screen')
export const SignUpForm = (props) => {
    const { handleSubmit, reset } = props;

    const [hidePass,setHidePass]=useState(true);
    const [hideConfirm,setHideConfirm]=useState(true);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'position' : 'height'}
            keyboardVerticalOffset={40} //adjust the value here if you need more padding
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
            <CustomText style={styles.title}>REGISTER</CustomText>
            </View>
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
                            <RenderField
                                label='Your name'
                                iconLeft='id-card'
                                autoCapitalize={true}
                            />
                            <RenderField
                                label='Your email'
                                iconLeft='email'
                                keyBoardType='email-address'
                            />
                            <RenderField
                                label='Password'
                                right={<TextInput.Icon
                                    name={hidePass ? 'eye-off' : 'eye' }
                                    size={24}
                                    color={Colors.lighter_green}
                                    style={{ paddingLeft: 10 }}
                                    onPress={()=>setHidePass(!hidePass)}
                                    
                                />}
                                hide={hidePass}
                                iconLeft='lock' 
                            />

                            <RenderField
                                label='Confirm Password'
                                right={<TextInput.Icon
                                    name={hideConfirm ? 'eye-off' : 'eye' }
                                    size={24}
                                    color={Colors.lighter_green}
                                    style={{ paddingLeft: 10 }}
                                    onPress={()=>setHideConfirm(!hideConfirm)}  
                                />}
                                hide={hideConfirm}
                                iconLeft='lock'
                                
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.signIn}>
                                <Text style={{ color: 'white',fontWeight:'bold',fontSize:18 }}>REGISTER</Text>
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
    container: {
        marginTop:200,
        marginBottom: 10,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    title: {
        color: '#00806C',
        fontSize: 48,
        letterSpacing: 5,
        fontWeight: 'bold',
        marginBottom:30,
        textAlign: 'center',
    },
    signIn: {
        width: 151,
        height: 52,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: Colors.light_green,
        marginTop: 20,
        alignSelf:'center',
        
    }
})
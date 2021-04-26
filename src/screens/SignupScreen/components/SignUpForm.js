import React, { useState,useRef,useEffect } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Text,
    Dimensions,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-paper';
//Colors
import Colors from '../../../utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../../../components/UI/CustomText';
import RenderField from './RenderField';

//redux
import { useDispatch, useSelector } from 'react-redux';

//Aciton
import {SignUp as SignUpAct} from '../../../reducers'
import { Field, reduxForm } from 'redux-form'

const { width, height } = Dimensions.get('screen')

//Validation
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email không được bỏ trống";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Email không hơp lệ";
    }
    if (!values.password) {
        errors.password = "Mật khẩu không được bỏ trống";
    } else if (values.password.length < 6) {
        errors.password = "Mật khẩu phải nhiều hơn hoặc bằng 6 ký tự";
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = "Mật khẩu không được bỏ trống";
    } else if (values.confirmpassword !== values.password) {
        errors.confirmpassword = "Mật khẩu xác nhận không trùng khớp";
    }
    if (!values.username) {
        errors.username = "Tên không được bỏ trống";
    } else if (values.username.length > 20) {
        errors.username = "Tên không vượt quá 20 ký tự";
    } else if (values.username.length < 6) {
        errors.username = "Tên phải nhiều hơn 6 ký tự";
    }

    return errors;
};

const Signup = (props) => {
    const { handleSubmit, reset } = props;
    const dispacth=useDispatch();
    const loading=useSelector((state)=>state.auth.isLoading)
    const [hidePass, setHidePass] = useState(true);
    const [hideConfirm, setHideConfirm] = useState(true);
    const unmounted=useRef(false);
    useEffect(()=>{
        return()=>{
            unmounted.current=true;
        };
    })
    const submit=async(values)=>{
        try{
            await dispacth(SignUpAct(values.username,values.email,values.password));
            reset();
            if(!unmounted.current){
                Alert.alert("Signup Successfully","You can login now",[
                    {
                        text:'OK',
                        onPress:()=>{
                            props.navigation.goBack();
                        }
                    }
                ])
            }
        }catch(err){
            alert(err);
        }
    }
    return (
        <View>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    left:15,
                    top:30,
                }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name='ios-arrow-back' size={50} color={Colors.light_green} />
            </TouchableOpacity>
            <View style={styles.container}>

                <CustomText style={styles.title}>REGISTER</CustomText>
            </View>
            <ScrollView>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginHorizontal: 10,
                        }}
                    >
                        <View>
                            <Field
                                name='username'
                                component={RenderField}
                                label='Your email'
                                iconLeft='id-card'
                            />
                            <Field
                                name='username'
                                component={RenderField}
                                label='Your name'
                                iconLeft='email'
                            />
                            <Field
                                name='username'
                                component={RenderField}
                                label='Your password'
                                iconLeft='lock'
                                right={<TextInput.Icon
                                    name={hidePass ? 'eye-off' : 'eye'}
                                    size={24}
                                    color={Colors.lighter_green}
                                    style={{ paddingLeft: 10 }}
                                    onPress={() => setHidePass(!hidePass)}

                                />}
                                hide={hidePass}
                            />
                            <Field
                                name='username'
                                component={RenderField}
                                label='Confirm password'
                                iconLeft='lock'
                                right={<TextInput.Icon
                                    name={hideConfirm ? 'eye-off' : 'eye'}
                                    size={24}
                                    color={Colors.lighter_green}
                                    style={{ paddingLeft: 10 }}
                                    onPress={() => setHideConfirm(!hideConfirm)}
                                />}
                                hide={hideConfirm}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                            <View style={styles.signIn}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>REGISTER</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}

export const SignUpForm = reduxForm({
    form: 'signup', //a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(Signup)

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    title: {
        color: '#00806C',
        fontSize: 48,
        letterSpacing: 10,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    signIn: {
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: Colors.light_green,
        marginTop: 20,
        alignSelf: 'center',

    }
})
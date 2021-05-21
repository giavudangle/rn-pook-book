import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

//Icon
import Ionicons from 'react-native-vector-icons/Ionicons'

//Text Input in lib react-native-paper
import { TextInput } from 'react-native-paper'
//Custom Text
import CustomText from '../../../components/UI/CustomText';

import RenderField from './RenderField';

//Colors
import Colors from '../../../utils/Colors'

//PropTypes Check
import PropTypes from 'prop-types';

//redux
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

//reducers
import { Login as LoginAction } from '../../../actions/auth';
const { width, heigth } = Dimensions.get('screen');

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
    return errors;
}


const Login = (props) => {
    const dispatch = useDispatch();
    const { handleSubmit } = props;
    const [showPass, setShowPass] = useState(true);
    const auth = useSelector((state) => state.auth);
    const unmounted = useRef(false);

    const submit = async (values) => {
        try {
            await dispatch(LoginAction(values.email, values.password));
            props.navigation.navigate("Home");
        } catch (err) {
            alert(err);
        }
    };
    useEffect(() => {
        return () => {
            unmounted.current = true;
        }
    })
    return (
        <View>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: 30,
                    left: -30,

                }}
                onPress={() => props.navigation.goBack()}
            >
                <Ionicons name='ios-arrow-back' size={40} color={Colors.light_green} />
            </TouchableOpacity>

            <View style={styles.container}>

                <View>
                    <CustomText style={styles.title}>LOGIN</CustomText>
                </View>

                <View >
                    <Field
                        component={RenderField}
                        label='Your email'
                        icon='email'
                        keyBoardType='email-address'
                    />
                    <Field
                        component={RenderField}
                        label='Your password'
                        icon='lock'
                        keyBoardType='default'
                        passIcon={
                            <TextInput.Icon
                                name={showPass ? 'eye-off' : 'eye'}
                                color={Colors.green}
                                onPress={() => setShowPass(!showPass)}
                            />
                        }
                        secureTextEntry={showPass}
                    />
                </View>

                <TouchableOpacity
                    style={styles.textSign}
                    onPress={(handleSubmit(submit))}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '700'
                    }}>LOGIN</Text>
                </TouchableOpacity>



                <TouchableOpacity
                    style={{ marginTop: 50 }}
                    onPress={() => props.navigation.navigate('ForgetPasswordScreen')}
                >
                    <Text style={styles.forget}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export const LoginForm = reduxForm({
    form: 'login',//a unique identifier for this form 
    validate, //<---------validation func given to redux-form
})(Login)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150,
        flexDirection: 'column',
    },

    title: {
        color: Colors.light_green,
        fontWeight: '900',
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 30,
        fontStyle: 'normal',
        letterSpacing: 10,
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
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})


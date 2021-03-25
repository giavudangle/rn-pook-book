import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet

 } from 'react-native';
import CustomText from '../../components/UI/CustomText';
//Colors
import Colors from '../../utils/Colors';
import ForgetRenderField from './components/ForgetRenderField'

export const ForgetPasswordScreen = (props) =>{
    return(
        <View>
            <View style={styles.header}/>
            <View>
                <CustomText style={styles.title}>Forget Password</CustomText>
                <View>
                    <ForgetRenderField 
                        label='Your email'
                        iconLeft='email'
                    />
                </View>
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        marginTop:100,
        marginBottom: 50,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    title:{
        color: Colors.light_green,
        fontSize: 40,
        letterSpacing: 5,
        fontWeight: 'bold',
        marginBottom:30,
        textAlign: 'center',
    },
    btn:{
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
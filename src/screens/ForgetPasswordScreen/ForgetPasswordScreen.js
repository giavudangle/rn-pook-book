import { Ionicons } from '@expo/vector-icons';
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

export const ForgetPasswordScreen = ({navigation}) => {
    return (
        <View>
            <View style={styles.container} />
            <View>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        zIndex:10,
                        left:10,
                        top:40,
                    }}
                    onPress={()=>navigation.goBack()}
                    >
                    <Ionicons name='ios-arrow-back' size={40} color={Colors.light_green} />
                </TouchableOpacity>
                
                <View style={styles.content}>
                    <CustomText style={styles.title}>Forget Password</CustomText>
                    <ForgetRenderField
                        label='Your email'
                        iconLeft='email'
                    />
                </View>

                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={{
                            color:'#FFFFFF',
                            fontWeight:'bold',                       
                            }}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    content:{
        paddingHorizontal:20,
        marginTop:'20%',
    },
    title: {
        color: Colors.light_green,
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom:24,
    },
    btn: {
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "row",
        backgroundColor: '#00806C',
        marginTop: 20,
        alignSelf:'center',
    }
})
import React,{useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
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
export const SignUpForm = ({navigation}) => {


    const [hidePass,setHidePass]=useState(true);
    const [hideConfirm,setHideConfirm]=useState(true);
    return (
        <View>
            <TouchableOpacity
                style={{
                    position:'absolute',
                    zIndex: 1,
                    top:30,
                    left:5,
                }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name='ios-arrow-back' size={40} color={Colors.light_green} />
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
                        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                            <View style={styles.signIn}>
                                <Text style={{ color: 'white',fontWeight:'bold',fontSize:18 }}>REGISTER</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:150,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    title: {
        color: '#00806C',
        fontSize: 48,
        letterSpacing: 10,
        fontWeight: 'bold',
        marginBottom:30,
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
        alignSelf:'center',
        
    }
})
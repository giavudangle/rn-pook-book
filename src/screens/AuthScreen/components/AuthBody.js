import React from 'react'
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native'

//Colors
import Colors from '../../../utils/Colors'
import CustomText from '../../../components/UI/CustomText'

const { width, height } = Dimensions.get('screen')
export const AuthBody = ({ navigation }) => {
    return (
        <View>
            <ImageBackground
                source={require('../../../assets/Images/Forest.jpg')}
                style={{ flex: 1, width, height }}
                blurRadius={3}
            />
            <View style={styles.container}>
                <CustomText style={styles.title}>POOKBOOK</CustomText>
                
            </View>
            <View style={{ marginTop: 100 }}>
                <TouchableOpacity style={styles.login}>
                    <Text style={{
                        color: '#00AA88',
                        fontWeight: 'bold',
                        fontSize: 18,
                        
                    }}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signup}>
                    <Text style={{
                        color:'#FFFFFF',
                        fontSize:18,
                        fontWeight:'bold',
                    }}
                    >SIGNUP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    login: {
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
        width: 241,
        height: 65,
        justifyContent: 'center',

    },
    container: {
        marginTop: 164,
    },
    title: {
        color: '#00806C',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signup:{
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'#00AA88',
        width: 241,
        height: 65,
        justifyContent:'center',
        marginTop:30,

    }
})


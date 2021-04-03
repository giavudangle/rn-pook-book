import React from 'react'
import { View,ImageBackground,Dimensions,TouchableOpacity, Text,StyleSheet } from 'react-native'

const {width,height}=Dimensions.get('screen')
export const AuthBody = ({navigation}) => {
    return (
        <View>
            <ImageBackground
                source={require('../../../assets/Images/Forest.jpg')}
                style={{flex:1,width,height}}
                blurRadius={3}
            />
            <TouchableOpacity
                style={styles.login}
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    login:{
        
    }
})


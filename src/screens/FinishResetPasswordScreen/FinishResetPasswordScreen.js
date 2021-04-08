import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import CustomText from '../../components/UI/CustomText';
import Colors from '../../utils/Colors';


const { width, height } = Dimensions.get('screen');

export const FinishResetPasswordScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>

      <View style={styles.info}>
        <LottieView
          source={require('../../components/IconAnimation/mail-done.json')}
          autoPlay
          loop={true}
          resizeMode='cover'
          style={{ height: 130 }}
        />
        <View style={{marginVertical:20}}>
        <CustomText
            style={{
              fontSize:16,
              color:Colors.blue,
              textDecorationLine:'underline'
            }}
          >
            tuananh.61779@gmail.com
          </CustomText>
        </View>
      </View>

      <View style={styles.id}>
        <CustomText style={styles.title}>
          Vui lòng kiểm tra hòm thư của bạn.
        </CustomText>
      </View>

      <TouchableOpacity>
        <View style={styles.button}>
          <CustomText style={{...styles.title,color:'#fff'}}>
            LOGIN
        </CustomText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  info: {
    marginTop: height / 4,
    alignItems: 'center',
  },
  id: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: '500',
  },
  button: {
    marginTop:20,
    backgroundColor:Colors.light_green,
    borderRadius:10,
    width:200,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    
  }
})

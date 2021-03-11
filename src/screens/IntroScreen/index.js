import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView,  Image } from 'react-native';

import Header from './components/Header';

const {width, height} = Dimensions.get('screen')

export default function IntroScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.wrapContent}>
            <Header title='Mang tri thuc'/>
            <Image style={{width: 300, height: 300, marginTop: 30}} source={{uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/17021649_2041022529457954_2850228655665691898_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AQyXHJC-86EAX_Rb8oe&_nc_ht=scontent.fsgn2-5.fna&oh=f6b14a8b7d658f99210890d001e609bb&oe=606F21C7'}}/>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    flex: 6,
    backgroundColor: 'red',
    width: width,
    borderBottomRightRadius: 60
  },
  wrapContent: {
    alignItems: 'center',
    paddingTop: 60
  },

  footer: {
    flex: 4,
    backgroundColor: 'red',
    width: width,
    zIndex: 1
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 60
  }
});

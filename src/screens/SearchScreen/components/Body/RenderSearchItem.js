import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

//Colors
import Colors from '../../../../utils/Colors'

//Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const RenderSearchItem = ({item}) => {

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('search_history', jsonValue)
        } catch (e) {
          console.log(e)
        }
      }
      
    return (
       <TouchableOpacity onPress={() => {

           //add navigation
       }}>
            <View style={styles.container}>
                <Image source={{uri: item.url}} style={{width: 100, height: 100}}/>
                <Text style={styles.title}>{item.title}</Text>
                <FontAwesome name='search' size={25} style={styles.icon}/>
            </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        flex: 1,
        color: Colors.lighter_green,
        fontSize: 18,
        fontWeight: '700'
    },
    icon: {
        marginRight: 20,
        color: Colors.lighter_green
    }
})

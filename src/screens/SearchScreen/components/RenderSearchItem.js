import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

//Colors

//Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from '../../../utils/Colors'

export default function RenderSearchItem({item}) {
    return (
       <TouchableOpacity>
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

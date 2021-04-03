import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    StatusBar
} from 'react-native'

//react-native-paper hook
import {useTheme} from 'react-native-paper';

//Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Header() {
    const {colors} = useTheme();

    return (
        <View style={styles.container}>
            <Entypo 
                name="menu" 
                size={36}
                style={[styles.menuIcon, {color: colors.primary}]}
            />
            <Text 
                style={[styles.title, {color: colors.primary}]}
            >
                POOKBOOK
            </Text>
            <FontAwesome 
                name="search" 
                size={25} 
                style={[styles.searchIcon, {color: colors.primary}]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    searchIcon: {
        marginRight: 10
    },
    menuIcon: {
        marginLeft: 10
    }
})

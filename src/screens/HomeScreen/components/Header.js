import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import Colors from '../../../utils/Colors'


//Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Header({navigation}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Entypo 
                    name="menu" 
                    size={36}
                    style={styles.menuIcon}
                />
            </TouchableOpacity>
            <Text 
                style={styles.title}
            >
                POOKBOOK
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
            >
                <FontAwesome 
                    name="search" 
                    size={25} 
                    style={styles.searchIcon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: Colors.lighter_green,
        paddingBottom: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.lighter_green
    },
    searchIcon: {
        marginRight: 10,
        color: Colors.lighter_green
    },
    menuIcon: {
        marginLeft: 10,
        color: Colors.lighter_green
    }
})

import React from 'react'
import { 
    View, 
    Text, 
    StatusBar, 
    StyleSheet,
    TouchableOpacity 
} from 'react-native'

//Colors
import Colors from '../../../utils/Colors';

//Icon 
import Entypo from 'react-native-vector-icons/Entypo'

//Components
import SearchBar from './SearchBar'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Entypo name="chevron-left" size={30} color='white'/>
                </TouchableOpacity>
                <Text style={styles.title}>Tất cả sản phẩm</Text>
                <TouchableOpacity>
                    <Entypo name='share-alternative' size={25} color='white'/>
                </TouchableOpacity>
            </View>
            <SearchBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: Colors.lighter_green
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    }
})

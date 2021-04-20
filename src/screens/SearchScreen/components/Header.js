import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native'

//Colors
import Colors from '../../../utils/Colors'

//Icon
import Entypo from 'react-native-vector-icons/Entypo'

//Components
import SearchBar from './SearchBar'

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Entypo 
                    name="chevron-left" 
                    size={30}
                    style={{marginLeft: 5}}
                    color={Colors.lighter_green}
                />
            </TouchableOpacity>
            <SearchBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native'

//Colors
import Colors from '../../../../utils/Colors'

//Icon
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

//Components
import {SearchBar} from './SearchBar'

export const Header = ({filterData, setSearchData}) => {
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

            <SearchBar 
                filterData={filterData}
                setSearchData={setSearchData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
})

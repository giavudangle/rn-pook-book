import React, {useState} from 'react'
import {
    TextInput,
    Dimensions , View, StyleSheet, StatusBar, TouchableOpacity
} from 'react-native'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

//Colos
import Colors from '../../../utils/Colors'

const {width} = Dimensions.get('screen')

export default function SearchBar({filterData, setSearchData}) {
    const [searchValue, setSearchValue] = useState('');
    return (
      <View>
        <TextInput 
            placeholder='Tìm kiếm sản phẩm'
            placeholderTextColor={Colors.lighter_green}
            style={{
                backgroundColor: 'rgba(0, 128, 108, 0.11)',
                width: width/1.2,
                borderRadius: 15,
                paddingLeft: 15,
                paddingTop: 5,
                paddingBottom: 5,
                marginRight: 15
            }}
            value={searchValue}
            onChangeText={(text) => {
                if(text === '') {
                    setSearchData([])
                    setSearchValue(text)
                } else {
                    setSearchValue(text)
                    setSearchData(filterData(text))
                }
            }}
        />
        {
            searchValue === '' ? 
            null 
            : 
            <TouchableOpacity 
                style={styles.closeIcon}
                onPress={() => {
                    setSearchValue('')
                    setSearchData([])
                }}
            >
                <AntDesign
                    name="closecircle"
                    size={20}
                    color="#DDD"
                />
            </TouchableOpacity>
        }
      </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        right: 30,
        top: 8
    }
})

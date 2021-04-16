import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'
import { navigationRef } from '../../../navigation/RootNavigation';

//Colors
import Colors from '../../../utils/Colors'

const {width, height} = Dimensions.get('screen');

export default function RenderGirdItem({item, navigation}) {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: item.url}} 
                style={styles.imageItem}
            />
            <View style={{marginLeft: 10, marginRight: 10}}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.price}>{item.price} VND</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.detailButton} onPress={() => navigation.navigate('Detail')}>
                <Text style={{color: Colors.lighter_green}}>Xem chi tiết</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width/2.3,
        height: 170,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    imageItem: {
        width: 100, 
        height: 100,
        alignSelf: 'center'
    },
    title: {
        color: Colors.lighter_green,
        fontSize: 16
    },
    type: {
        color: Colors.lighter_green
    },
    price: {
        color: Colors.lighter_green
    },
    detailButton: {
        alignItems: 'center',
        backgroundColor: 'rgba(196, 196, 196, 0.39)',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10
    }
})

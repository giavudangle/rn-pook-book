import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'

//Colors
import Colors from '../../../utils/Colors'


const {width, height} = Dimensions.get('screen');
export default function RenderItem({item}) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={{uri: item.url}} style={styles.image}/>
                <View style={styles.wrapContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.origin}>{item.origin}</Text>
                    <Text>{item.type}</Text>
                    <Text style={styles.price}>{item.price} VND</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width/1.08,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#00806c20',
        marginTop: 10,
        borderRadius: 10
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 5
    },
    wrapContent: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20,
        color: Colors.lighter_green
    },
    origin: {
        fontSize: 14,
        color: "#AAA"
    },
    price: {
        color: 'red',
        marginTop: 10,
        alignSelf: 'flex-end',
        marginRight: 15,
        fontWeight: '700',
        fontSize: 16
    }
})
import React from 'react'
import { 
    View, 
    Text,
    Image,
    StyleSheet 
} from 'react-native'

//Colors
import Colors from '../../../utils/Colors'


export default function RenderEmptyBody() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/Splash-rmbg.png')} 
                style={{width: 250, height: 250}}
            />
            <Text style={{color: "#AAA"}}>Nhập từ khóa để tìm kiếm</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

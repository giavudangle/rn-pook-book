import React from 'react'
import {
    View, 
    StyleSheet,
    Animated,
    Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('screen')

export default function Pagination({slides, scrollX}) {
    const translateX = scrollX.interpolate({
        inputRange: [0, width, width * 2],
        outputRange: [-25, -5, 15]
    })
    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    width: 13,
                    height: 13,
                    position: 'absolute',
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: '#5BFF9C',
                    top: 1,
                    transform: [{translateX}]
                }}
            />
            {
                slides.map((item,index) => {
                    return <View key={index} style={styles.dot}></View>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        alignSelf: 'center',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        backgroundColor: '#5BFF9C',
        width: 10,
        height: 10,
        borderRadius: 100,
        marginTop: 2,
        marginRight: 10
    }
})

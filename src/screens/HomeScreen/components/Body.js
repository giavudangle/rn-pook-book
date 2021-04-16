import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Carousel from 'react-native-snap-carousel'

//Component
import RenderCarouselItem from './RenderCarouselItem'

const data = [
    'haha',
    'hihi',
    'hoho'
]

export default function Body() {
    let carousel = 0;
    return (
        <View style={styles.container}>
            <Carousel
                ref={c => carousel = c}
                data={data}
                renderItem={({item}) => <RenderCarouselItem item={item}/>}
                sliderWidth={400}
                itemWidth={350}
                loop
                layout='tinder'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

import React from 'react'
import { View, Text, FlatList } from 'react-native'

import RenderSearchItem from './RenderSearchItem'

export default function RenderBody({searchData}) {
    return (
        <View>
            <FlatList
                data={searchData}
                key={item => item._id}
                renderItem={({item}) => <RenderSearchItem item={item}/>}
            />
        </View>
    )
}

import React from 'react'
import { View, Text, FlatList, ScrollView, Button } from 'react-native'
import RenderItem from './RenderItem'

//Colors
import Colors from '../../../utils/Colors'

export default function Body({data, types}) {
    let renderList = [];
    for(let x of types) {
        renderList.push(
            <FlatList 
                ListHeaderComponent={
                    <Text 
                        style={{
                            color: Colors.lighter_green,
                            fontSize: 20,
                            marginLeft: 10,
                            marginTop: 5,
                            fontWeight: '700'
                        }}
                    >
                        {x}
                    </Text>
                }
                key={x} 
                data={data}
                keyExtractor={item => item._id}
                renderItem={({item}) => item.type == x ? <RenderItem item={item}/> : null}
            />
        )
    }

    return (
        <View style={{marginBottom: 10}}>
            {renderList}
        </View>
    )
}

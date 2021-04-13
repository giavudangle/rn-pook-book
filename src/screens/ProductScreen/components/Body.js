import React from 'react'
import { View, Text, FlatList, ScrollView, Button } from 'react-native'
import RenderItem from './RenderItem'

//Colors
import Colors from '../../../utils/Colors'

export default function Body({data, types}) {

    let renderList = [];
    for(var x of types) {
        // console.log(data[0])
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
                data={() => {
                        const abc =  data.filter(a => a.type == "Sex")
                        console.log(abc)
                        return abc
                    }
                }
                keyExtractor={item => item._id}
                renderItem={({item}) => <RenderItem item={item}/>}
            />
        )
    }

    const a = () => {
        for(var x of renderList) {
            console.log(x)
        }
    }
    return (
        <View style={{marginBottom: 10}}>
            {/* <Button title="haha" onPress={() => console.log(renderList[0])}/> */}
            {renderList}
        </View>
    )
}

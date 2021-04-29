import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    Button
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';



//Colors
import Colors from '../../../../utils/Colors'


export const RenderHistoryBody = () => {
    const [historyData, setHistoryData] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('search_history')
          if(value === null) {
            const temp = [1,2,3];
            
            await AsyncStorage.setItem('search_history', JSON.stringify(temp))
          }
          setHistoryData(value)
        } catch(e) {
          // error reading value
          console.log(e);
        }
      }
      
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../../../assets/Splash-rmbg.png')} 
                style={{width: 250, height: 250}}
            />
            <Text style={{color: "#AAA"}}>Nhập từ khóa để tìm kiếm</Text>
            <Button title="haha" onPress={() => console.log(historyData)}/>
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

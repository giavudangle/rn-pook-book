import React, { forwardRef, useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Colors from '../../../utils/Colors'
import { Button } from 'react-native-paper'
import PromotionItem from './PromotionItem'
import axios from "axios";
import { API_URL } from "../../../utils/Config";
import CustomLoader from '../../../components/Loaders/CustomLoader'
import moment from "moment";

const { width, height } = Dimensions.get('screen')



const PromotionList = (props, ref) => {
  const [check, setCheck] = useState(null);

  const [promotionData, setPromotionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    const getPromotions = async () => {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/promotions`);
      setPromotionData(response.data.data)
      setIsLoading(false);
    }
    getPromotions()
  }, []);


  const isExpired = (item) => {
    return moment(item.expiredAt).isAfter(moment.now());
  }

  const _onCheck = (item, idx) => {
    if(!isExpired(item)) {
      Alert.alert('Promotion is out of date')
    } else {
      if (check === item._id) {
        setCheck(null)
        props.setPromotion({})
      } else {
        setCheck(item._id)
        props.setPromotion(item)
  
      }
    }
    
  }
  return (
    <View>
      <Text style={{
        textAlign: 'center',
        marginVertical: 10,
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 20
      }}>Chọn khuyến mãi </Text>
      {
        isLoading ? (
          <CustomLoader />
        ) : 
          (
            <>
              <FlatList
                data={promotionData}
                keyExtractor={item => item.id}
                renderItem={({ item, idx }) => {
                  return (
                    <PromotionItem
                      checkable={check === item._id}
                      promotion={item}
                      setPromotion={props.setPromotion}
                      onCheck={() => _onCheck(item, idx)}
                    />
                  )
                }}
              />
              <Button
                style={{
                  width: width / 1.5,
                  height: height / 15,
                  alignSelf: 'center',
                  backgroundColor: Colors.primary,
                  textAlign: 'center',
                  justifyContent: 'center',
                  marginVertical:20
                }}
                mode='contained'
                onPress={() => ref.current?.close()}>ÁP DỤNG</Button>          
            </>
          ) 
      }

    </View>
  )
}
export default forwardRef(PromotionList)


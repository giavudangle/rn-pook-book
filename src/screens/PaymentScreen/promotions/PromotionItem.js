import React, { forwardRef, useRef } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colors from '../../../utils/Colors'
import { Checkbox } from "react-native-paper";
import moment from 'moment';

const PromotionItem = ({ checkable, onCheck, promotion }) => {
  const mappingMoment = moment(promotion.expiredAt).format('DD-MM-YYYY')
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 10,
      paddingHorizontal: 10,
      borderColor: Colors.primary,
      borderWidth: 2,
      borderStyle: 'dashed',
      borderRadius: 10,
    }}>
      <View style={styles.leftContent}>
        <Image style={styles.image} source={promotion.imageUrl ? { uri: promotion.imageUrl } : require('../../../assets/Images/icon.png')} />
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.name}>{promotion.name}</Text>
        <Text style={styles.code}>{promotion.code}</Text>
        <Text style={styles.value}>Giảm giá {promotion.value}k</Text>
        <Text style={styles.expired}>Hết hạn : {mappingMoment}</Text>
      </View>

      <View style=
        {{
          backgroundColor: checkable ? Colors.primary : Colors.white,
          borderWidth: 1,
          borderColor: Colors.primary,
          borderRadius: 300,
        }}>
        <Checkbox
          status={checkable ? 'checked' : 'unchecked'}
          color={checkable ? Colors.white : Colors.primary}
          onPress={onCheck}
        />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  leftContent: {
    flex: 4 / 10
  },
  centerContent: {
    flex: 6 / 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 20,
    flexDirection: 'column',
    padding: 10
  },
  rightContent: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 300,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 900
  },
  name: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  code: {
    color: Colors.white,
    fontWeight: 'bold',
    backgroundColor: Colors.primary,
    marginVertical: 2
  },
  value: {
    fontSize:12,
    color:Colors.carrot,
    fontWeight:'100'
  },
  expired: {
    color: Colors.red,
    fontWeight: 'bold',
  }

})
export default forwardRef(PromotionItem)

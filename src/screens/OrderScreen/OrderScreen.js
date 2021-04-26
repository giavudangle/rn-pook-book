import React,{useState} from 'react'
import { View, Text ,StyleSheet,Dimensions} from 'react-native'

import {useSelector} from 'react-redux'

import {Header,OrderBody} from './components'


// Mock DB
const user = {
  name:"Vudang"
}

const orders = [
  {
    "status": "waiting",
    "_id": "60544c1161d79712005f47e2",
    "totalAmount": "1000000",
    "name": "Test payment",
    "paymentMethod": "MasterCard",
    "phone": "0967781273",
    "address": "67 huynh thien loc",
    "userId": null,
    "items": [
        {
            "item": {
                "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
                "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
                "_id": "605449411d6e5b1185c9d2de",
                "filename": "imageUrl-1616136513560.jpg",
                "price": "100000",
                "color": "red",
                "origin": "USA",
                "standard": "VIP",
                "description": "A Best Book",
                "type": "Sex",
                "title": "Sex of Blow",
                "createdAt": "2021-03-19T06:48:33.695Z",
                "updatedAt": "2021-03-19T06:48:33.695Z",
                "__v": 0
            },
            "quantity": "10"
        }
    ],
    "createdAt": "2021-03-19T07:00:33.767Z",
    "updatedAt": "2021-03-19T07:00:33.767Z",
    "__v": 0
  },
  {
    "status": "done",
    "_id": "60544c1161d79712005f47e1",
    "totalAmount": "100000",
    "name": "Test payment",
    "paymentMethod": "MasterCard",
    "phone": "0967781273",
    "address": "67 huynh thien loc",
    "userId": null,
    "items": [
        {
            "item": {
                "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
                "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
                "_id": "605449411d6e5b1185c9d2de",
                "filename": "imageUrl-1616136513560.jpg",
                "price": "999999",
                "color": "red",
                "origin": "USA",
                "standard": "VIP",
                "description": "A Best Book",
                "type": "Sex",
                "title": "Sex of Blow",
                "createdAt": "2021-03-19T06:48:33.695Z",
                "updatedAt": "2021-03-19T06:48:33.695Z",
                "__v": 0
            },
            "quantity": "10"
        }
    ],
    "createdAt": "2021-03-19T07:00:33.767Z",
    "updatedAt": "2021-03-19T07:00:33.767Z",
    "__v": 0
  },
]

const { height } = Dimensions.get("window");

export const OrderScreen = ({navigation}) => {

  // Connect to redux

  const [isRefreshing,setIsRefreshing] = useState(false)
 

  const loadOrders = async () => {

  }



  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <OrderBody
          user={user}
          orders={orders}
          isRefreshing={isRefreshing}
          loadOrders={loadOrders}
          navigation={navigation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerLoader: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: Platform.OS === "android" ? 70 : height < 668 ? 70 : 90,
  },
});




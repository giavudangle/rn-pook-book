import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import {Header,CartBody,TotalButton} from './components'
import Colors from '../../utils/Colors';


const { height } = Dimensions.get('window');

const carts = {
  items :[
    {
      item: {
        url: "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
        thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616141969/h1zbcnxjmzb7rtuj2ws5.jpg",
        _id: "605449051d6e5b1185c9d2db",
        filename: "imageUrl-1616136453234.jpg",
        price: "5800",
        color: "red",
        origin: "USA",
        standard: "VIP",
        description: "A Best Book",
        type: "Sex",
        title: "Sex of Blow",
        createdAt: "2021-03-19T06:47:33.251Z",
        updatedAt: "2021-03-19T06:47:33.251Z",
        __v: 0
    },
    quantity: "10"
    },
    {
      item: {
        url: "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
        thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616141969/h1zbcnxjmzb7rtuj2ws5.jpg",
        _id: "605449051d6e5b1185c9d2db",
        filename: "imageUrl-1616136453234.jpg",
        price: "999999",
        color: "red",
        origin: "USA",
        standard: "VIP",
        description: "A Best Book",
        type: "Sex",
        title: "Sex of Blow",
        createdAt: "2021-03-19T06:47:33.251Z",
        updatedAt: "2021-03-19T06:47:33.251Z",
        __v: 0
    },
    quantity: "10"
    },
    {
      item: {
        url: "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
        thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616141969/h1zbcnxjmzb7rtuj2ws5.jpg",
        _id: "605449051d6e5b1185c9d2db",
        filename: "imageUrl-1616136453234.jpg",
        price: "999999",
        color: "red",
        origin: "USA",
        standard: "VIP",
        description: "A Best Book",
        type: "Sex",
        title: "Sex of Blow",
        createdAt: "2021-03-19T06:47:33.251Z",
        updatedAt: "2021-03-19T06:47:33.251Z",
        __v: 0
    },
    quantity: "10"
    }
  ],
  _id:"heheheehehidne"
}

export const CartScreen = (props) => {

  const cartItems = carts.items;
  const cartId = carts._id;

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation}/>
      <CartBody/>
      <TotalButton
        navigation={props.navigation}
        cartItems={cartItems}
        cartId={cartId}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  centerLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
  },
});

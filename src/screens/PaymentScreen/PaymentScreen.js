import React,{useState,useEffect} from 'react'
import { View, Text,ScrollView,StyleSheet,TouchableOpacity } from 'react-native'

import {Header,PaymentBody,PaymentFormView} from './components'
import Colors from '../../utils/Colors'
import {SummaryOrder} from '../PreOrderScreen/components'
import CustomText from '../../components/UI/CustomText';

const carts = [
  {
    item: {
      url: "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
      thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
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
      thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
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
      thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616141968/pyb0k0hvlcgeq3qqwdsd.png",
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
      thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616141968/pyb0k0hvlcgeq3qqwdsd.png",
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
      thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616141968/pyb0k0hvlcgeq3qqwdsd.png",
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
      thumb: "https://res.cloudinary.com/daktfdww5/image/upload/v1616141968/pyb0k0hvlcgeq3qqwdsd.png",
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
]

const total = 99999

export const PaymentScreen = (props) => {

  let token = props.route.params.token
  const [payByCard, setPayByCard] = useState(false);
  const paymentMethod = payByCard ? 'Credit Card' : 'Cash';

  const {
    orderItems,
    name,
    phone,
    total,
    cartId,
    fullAddress,
  } = props.route.params;


  const addOrder = async () => {
    try {
   
      props.navigation.navigate('FinishOrder');
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    setPayByCard(token ? true : false)
  
  }, [token]);


  return (
      <ScrollView>
            <Header navigation={props.navigation}/>

            <PaymentBody
              navigation={props.navigation}
              payByCard={payByCard}
              setPayByCard={setPayByCard}
              token={token}
            />
            <SummaryOrder cartItems={carts.items} total={total} />
            <View style={styles.total}>
            <View style={styles.orderButton}>
              <TouchableOpacity onPress={addOrder}>
                <CustomText style={{ color: '#fff', fontSize: 16 }}>
                  Tiến hành đặt hàng
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
          
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  total: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 0,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  orderButton: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top:10
  },
});


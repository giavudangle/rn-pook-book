import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Address from './components/Address'
import { Header, UserForm, TotalButton, SummaryOrder } from './components'

import Colors from '../../utils/Colors'
import Loader from "../../components/Loaders/Loader";




export const PreOrderScreen = (props) => {
  const { cartItems,total, cartId } = props.route.params;

  console.log('==============ROUITE PARAMShehe======================');
  console.log(props.route.params);
  console.log('====================================');

  const carts = cartItems

  // We need to optimize this screen
  // Instead of separate to lots of fields
  // Combines them with single object
  //Can Toi uu lai
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [town, setTown] = useState("");
  const getInfo = (province, town) => {
    setProvince(province);
    setTown(town);
  };
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const getReceiver = (name, phone, address) => {
    setName(name);
    setPhone(phone);
    setAddress(address);
  };
  const checkValidation = (error) => {
    setError(error);
  };

  const fullAddress = `${address}, ${town} ,${province}`;
  let orderItems = [];
  cartItems.map((item) => {
    orderItems.push({ item: item.item._id, quantity: item.quantity });
  });

  const toPayment = async () => {
    try {
      if (error == undefined && province.length !== 0 && town.length !== 0) {
        props.navigation.navigate("Payment", {
          screen: "PaymentScreen",
          params: {
            fullAddress,
            orderItems,
            name,
            phone,
            total,
            cartId,
            carts,
          },
        });
      } else {
        alert("Vui lòng nhập đầy đủ thông tin.");
      }
    } catch (err) {
      throw err;
    }
  }



  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollView>
            <UserForm
              getReceiver={getReceiver}
              checkValidation={checkValidation}
            />
            <Address getInfo={getInfo} />
            <SummaryOrder cartItems={cartItems} total={total} />
          </ScrollView>
          <TotalButton toPayment={toPayment} />
        </>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
});

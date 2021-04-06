import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Address from './components/Address'
import { Header, UserForm, TotalButton,SummaryOrder } from './components'

import Colors from '../../utils/Colors'
import Loader from "../../components/Loaders/Loader";

export const PreOrderScreen = (props) => {

  // We need to optimize this screen
  const [province, setProvince] = useState("");
  const [town, setTown] = useState("");
  const getInfo = (province, town) => {
    setProvince(province);
    setTown(town);
  };
  const [loading, setLoading] = useState(false);

  const total = 9999;
  const [error, setError] = useState("");

  const getReceiver = (name, phone, address) => {
    setName(name);
    setPhone(phone);
    setAddress(address);
  };
  const checkValidation = (error) => {
    setError(error);
  };

  const toPayment = async () => {

  }

  const cartItems =[];


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

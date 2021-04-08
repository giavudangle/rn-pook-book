import React from "react";
import { View, StyleSheet } from "react-native";
//Number
import NumberFormat from "../../../components/UI/NumberFormat";
//PreOrderItem
import PreOrderItem from "./PreOrderItem";
//Text
import CustomText from "../../../components/UI/CustomText";
import Colors from "../../../utils/Colors";
//PropTypes check
import PropTypes from "prop-types";


const cartItems = [
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


const total = 9999999;

export class SummaryOrder extends React.PureComponent {
  render() {
    
    return (
      <View style={styles.container}>
        <CustomText style={{ ...styles.title, marginVertical: 5 }}>
          Tóm tắt đơn hàng
        </CustomText>
        <View style={{ backgroundColor: "#fff", paddingHorizontal: 10 }}>
          {cartItems.map((item) => {
            return (
              <View key={item.item.createdAt}>
                <PreOrderItem item={item} />
              </View>
            );
          })}
        </View>
        <View style={styles.total}>
          <CustomText
            style={{
              fontSize: 15,
              color: Colors.text,
              fontWeight: "500",
            }}
          >
            Thành tiền
          </CustomText>
          <NumberFormat price={total.toString()} />
        </View>
      </View>
    );
  }
}

SummaryOrder.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: -5,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 65,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "500",
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

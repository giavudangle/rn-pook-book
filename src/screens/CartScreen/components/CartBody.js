import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
//Redux
import { useDispatch } from "react-redux";
//Action
import { removeFromCart, addToCart, decCartQuantity } from "../../../reducers";
//Text
import CustomText from "../../../components/UI/CustomText";
//Colors
import Colors from "../../../utils/Colors";
import { CartItem } from "./CartItem";
import Messages from "../../../messages/user";
//PropTypes check
import PropTypes from "prop-types";

export const CartBody = ({
  navigation,
  // user,
  // carts,
  loadCarts,
  isRefreshing,
}) => {
  const dispatch = useDispatch();
  const onRemove = (itemId) => {
    Alert.alert("Bỏ giỏ hàng", "Bạn có chắc bỏ sản phẩm khỏi giỏ hàng?", [
      {
        text: "Hủy",
      },
      {
        text: "Đồng ý",
        onPress: () => {
          dispatch(removeFromCart(carts._id, itemId));
        },
      },
    ]);
  };

  const user = {
    name:"Vudang",
    phone:"0967781273",
    email:"vudangdev@gmail.com",
    address:"67 Huynh Thien Loc"
  };

  const carts = {
    items :[
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
      }
    ]
  }
  return (
    <View style={styles.footer}>
      {Object.keys(user).length === 0 ? (
        <View style={styles.center}>
          <CustomText>{Messages["user.login.require"]}</CustomText>
          <View style={styles.nextButton}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <CustomText style={{ color: "#fff" }}>Tiếp tục</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      ) : carts.items.length === 0 ? (
        <View style={styles.center}>
          <CustomText style={{ fontSize: 16 }}>
            Chưa có sản phẩm nào trong giỏ hàng
          </CustomText>
        </View>
      ) : (
        <View style={{ marginBottom: 80 }}>
          <FlatList
            data={carts.items}
            onRefresh={loadCarts}
            refreshing={isRefreshing}
            keyExtractor={(item) => item.item._id}
            renderItem={({ item }) => {
              return (
                <CartItem
                  item={item}
                  onRemove={() => onRemove(item.item._id)}
                  onAdd={() => {
                    dispatch(addToCart(item.item, user.token));
                  }}
                  onDes={() => {
                    dispatch(decCartQuantity(carts._id, item.item._id));
                  }}
                />
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

CartBody.propTypes = {
  user: PropTypes.object.isRequired,
  carts: PropTypes.object.isRequired,
  loadCarts: PropTypes.func.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};
const styles = StyleSheet.create({
  footer: {
    flex: 1,
  },
  nextButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.lighter_green,
    borderRadius: 5,
    borderColor: Colors.lighter_green,
    marginTop: 10,
  },
  center: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

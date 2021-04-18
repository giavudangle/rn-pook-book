import React from "react";
import { View, StyleSheet,Text } from "react-native";
//Text
import CustomText from "../../../components/UI/CustomText";
import { TextIcon } from "./TextIcon";

export const ContactBody = () => {
  return (
    <View style={styles.footer}>
      <CustomText style={styles.title}>contact us</CustomText>
      <View style={styles.info}>
        <TextIcon
          icon={require("../../../components/IconAnimation/location.json")}
          text='67 Huỳnh Thiện Lộc'
          url='mailto: codingwithvudang@gmail.com'
        />
        <TextIcon
          icon={require("../../../components/IconAnimation/email3.json")}
          text='codingwithvudang@gmail.com'
          url='mailto: codingwithvudang@gmail.com'
        />
        <TextIcon
          icon={require("../../../components/IconAnimation/phone2.json")}
          text='0967781273'
          url='tel:0967781273'
        />
      </View>
      <Text>Them thong tin vo sau</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: -20,
  },
  info: {
    marginTop: 20,
  },
});

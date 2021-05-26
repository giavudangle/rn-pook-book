import React from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
//Text
import CustomText from "../../../components/UI/CustomText";
import LottieView from "lottie-react-native";
import Colors from "../../../utils/Colors";

export const TextIcon = ({ icon, text, url }) => {
  return (
    <View style={styles.detailContainer}>
      <LottieView
        source={icon}
        autoPlay
        loop
        resizeMode='contain'
        style={{ height: 50, marginRight: 20,color:'red' }}
      />
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(url);
        }}
      >
        <CustomText style={styles.text}>{text}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color:Colors.primary
  },
});

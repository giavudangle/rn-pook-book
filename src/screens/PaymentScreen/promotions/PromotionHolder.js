import React, { useRef, useEffect, useState } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
//Text
import CustomText from "../../../components/UI/CustomText";
import Colors from "../../../utils/Colors";
//PropTypes check
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");
import { Modalize } from 'react-native-modalize';
import { Portal } from "react-native-portalize";
import PromotionList from "./PromotionList";



export const PromotionHolder = ({ navigation,promotion,setPromotion }) => {
  const modalizeRef = useRef(null)
 



  const onOpen = () => {
    modalizeRef.current?.open();
  }


  useEffect(() => {
  }, []);


  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Áp dụng khuyến mãi</CustomText>
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <MaterialCommunityIcons
            name='application-import'
            size={38}
            color={Colors.lighter_green}
            style={{ marginLeft: 10 }}
          />
          <CustomText style={styles.optionText}>{Object.keys(promotion).length > 0 ? promotion.name : 'Chưa áp dụng khuyến mãi'}</CustomText>
          <View
            style={{
              borderColor: Colors.primary,
              borderStyle: 'dashed',
              borderWidth: 1,
              borderRadius: 1000
            }}
          >
            <Checkbox
              status={Object.keys(promotion).length>0 ? 'checked' : 'unchecked'}
              color={Colors.lighter_green}
              onPress={onOpen}
            />
            <Portal>
              <Modalize modalHeight={height / 1.1} ref={modalizeRef} snapPoint={height - 200} ref={modalizeRef}>
                <PromotionList setPromotion={setPromotion} navigation={navigation} ref={modalizeRef} />
              </Modalize>
            </Portal>


          </View>
        </View>

      </View>
    </View>
  );
};

PromotionHolder.propTypes = {
  setPayByCard: PropTypes.func.isRequired,
  payByCard: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey,
    top: -10,
  },
  title: {
    fontSize: 15,
    color: Colors.text,
    fontWeight: "500",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  optionContainer: {
    width,
    backgroundColor: "#fff",
    paddingVertical: 0,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    justifyContent: 'space-between',
    marginHorizontal: 35
  },
  optionText: {
    fontSize: 14,
    fontWeight: "400",
    marginHorizontal: 15,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: -30,
    marginBottom: 10
  },
  cardImage: {
    resizeMode: "contain",
    height: 25,
    width: 80,
  },
});

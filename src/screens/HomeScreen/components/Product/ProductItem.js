import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";
//Icon
import { AntDesign } from "@expo/vector-icons";
//Colors
import Colors from "../../../../utils/Colors";
//NumberFormat
import NumberFormat from "../../../../components/UI/NumberFormat";
//Text
import CustomText from "../../../../components/UI/CustomText";
import { BlurView } from "expo-blur";
//PropTypes check
import PropTypes from "prop-types";


export const ProductItem = ({navigation,item}) => {
  const [loading,setLoading] = useState(true)

  const toDetail = () => {
    navigation.navigate("Detail", { item });
  };

  return (
    <View style={{ width: "48%" }}>
      <BlurView tint='light' intensity={70} style={styles.container}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={toDetail}>
            <Image
              source={{ uri: item.url }}
              style={styles.image}
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
            />
          </TouchableOpacity>
          {loading && (
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size='small' color={Colors.grey} />
            </View>
          )}
        </View>
        <View style={styles.center}>
          <CustomText style={styles.name}>{item.title}</CustomText>
        </View>
        <View style={styles.info}>
          <View style={styles.rate}>
            <AntDesign name='star' color='#fed922' size={15} />
            <Text style={styles.score}>5.0</Text>
          </View>
          <NumberFormat price={item.price} />
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <TouchableOpacity style={styles.btn} onPress={toDetail}>
            <CustomText style={styles.detailBtn}>Xem chi tiết</CustomText>
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  );
}



ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Platform.OS === 'android' ?  220 : 200,
    marginBottom: 15,
    borderRadius: 8,
    marginTop:20,
    borderColor:Colors.green,
    borderWidth:2
    
  },
  image: {
    width: "100%",
    borderRadius: 8,
    aspectRatio: 16 / 9
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  name: {
    marginTop: 3,
    color: Colors.leave_green,
    textAlign: "center",
    fontWeight: "300",
    fontSize:15,
    width:'80%',
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  rate: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 2,
  },
  score: {
    fontSize: 12,
    marginLeft: 5,
    color: Colors.text,
  },
  btn: {
    width: "100%",
    height: 35,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  detailBtn: {
    color: Colors.primary,
    marginRight: 5,
  },
});

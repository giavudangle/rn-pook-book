import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
//Colors
import Colors from "../../../utils/Colors";
//NumberFormat
import NumberFormat from "../../../components/UI/NumberFormat";
//Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "../../../components/UI/CustomText";
//PropTypes check
import PropTypes from "prop-types";

export const CartItem = ({item,onAdd,onDes,onRemove}) => {


  /**
  |--------------------------------------------------
  | Action Handlers
  |--------------------------------------------------
  */
  const sum = +item.item.price * +item.quantity;

  const AddItemHandler = async () => {
    if(+item.item.stocks - +item.quantity !==0) {
      await onAdd();
    }else {
        Alert.alert('HẾT HÀNG','Không thể thêm sản phẩm vào giỏ hàng ')
    }

  };
  const checkDesQuantity = async () => {
    if (item.quantity == 1) {
      Alert.alert(
        "Xóa giỏ hàng",
        "Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng?",
        [
          {
            text: "Hủy",
          },
          {
            text: "Đồng ý",
            onPress: onRemove,
          },
        ]
      );
    } else {
      await onDes();
    }
  };

  return(
    <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={{
              width: "100%",
              height: 80,
              resizeMode: 'cover',
              borderRadius: 5,
            }}
            source={{ uri: item.item.thumb }}
          />
        </View>
        <View style={styles.right}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText style={styles.title}>{item.item.title}</CustomText>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity onPress={onRemove}>
                <MaterialCommunityIcons name='close' size={20} color='#000' />
              </TouchableOpacity>
            </View>
          </View>
          <CustomText style={{ color: Colors.grey, fontSize: 12 }}>
            Vận chuyển bởi PookBook
          </CustomText>
          <NumberFormat price={sum.toString()} />
          <View style={styles.box}>
            <TouchableOpacity onPress={checkDesQuantity} style={styles.boxMin}>
              <MaterialCommunityIcons name='minus' size={16} />
            </TouchableOpacity>
            <View>
              <CustomText style={styles.boxText}>{item.quantity}</CustomText>
            </View>
            <TouchableOpacity onPress={AddItemHandler} style={styles.boxMin}>
              <MaterialCommunityIcons name='plus' size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}



CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDes: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    height: 110,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_grey,
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom:10,
    marginVertical:10
    
  },
  left: {
    width: "35%",
    height: "100%",
    alignItems: "center",
  },
  right: {
    width: "60%",
    paddingLeft: 15,
    height: 90,
    // overflow: "hidden",
  },
  title: {
    fontSize: 14,
    width:'70%'
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Platform.OS === "ios" ? 30 : 25,
    backgroundColor: Colors.light_grey,
    width: 90,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  boxMin: {
    width: "30%",
    alignItems: "center",
  },
  boxText: {
    fontSize: 12,
  },
});

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Alert,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
//Redux
import { useDispatch } from "react-redux";
// Action
import { fetchFavorite, removeFavorite } from "../../../../actions/favorite";
import { addToCart } from '../../../../actions/cart'


//Color
import Colors from "../../../../utils/Colors";
//number format
import NumberFormat from "react-number-format";
//Text
import CustomText from "../../../../components/UI/CustomText";
//PropTypes check
import PropTypes from "prop-types";


/**
|--------------------------------------------------
| Render Utils
|--------------------------------------------------
*/
export const renderRightAction = (text, color, action, x, progress) => {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [x, 0],
  });
  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
      <TouchableOpacity
        style={[styles.rightAction, { backgroundColor: color }]}
        onPress={action}
      >
        <Text style={styles.actionText}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

/**
|--------------------------------------------------
| Main Component
|--------------------------------------------------
*/

export const FavoriteItem = ({ navigation, item }) => {

  /**
  |--------------------------------------------------
  | Local State
  |--------------------------------------------------
  */
  const [isLoading, setIsLoading] = useState(true);
  const unmounted = useRef(false);


  /**
 |--------------------------------------------------
 | Action Handlers
 |--------------------------------------------------
 */
  const dispatch = useDispatch();
  const _handleAddToCart = async () => {
    console.log('==============UNMOUNTED======================');
    console.log(unmounted);
    console.log('====================================');
    try {
      await dispatch(addToCart(item));
      if (unmounted.current) {
        Alert.alert("Thêm thành công", "Sản phẩm đã được thêm vào giỏ hàng", [
          {
            text: "OK",
          },
        ]);
      }
    } catch (err) {
      throw err;
    }
  };


  const _handleRemoveFavorite = () => {
    Alert.alert(
      "Bỏ yêu thích",
      "Bạn có muốn bỏ sản phẩm ra khỏi mục yêu thích?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Đồng ý",
          onPress: () => dispatch(removeFavorite(item._id)),

        },
      ]
    );
  };

  const RightActions = (progress) => {
    return (
      <View style={{ width: 170, flexDirection: "row" }}>
        {renderRightAction(
          "Thêm vào giỏ",
          "#ffab00",
          _handleAddToCart,
          140,
          progress
        )}
        {renderRightAction(
          "Bỏ thích",
          Colors.red,
          _handleRemoveFavorite,
          30,
          progress
        )}
      </View>
    );
  };

  /**
  |--------------------------------------------------
  | Side Effects
  |--------------------------------------------------
  */
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);



  /**
  |--------------------------------------------------
  | Render JSX
  |--------------------------------------------------
  */



  return (
    <View>
      <Swipeable
        friction={2}
        rightThreshold={20}
        renderRightActions={RightActions}
      >
        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { item: item })}
            style={{
              marginLeft: 5,
              width: "30%",
              height: "100%",
              marginRight: 10,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                height: 70,
                width: "100%",
                resizeMode: "contain",
                borderRadius: 10,
              }}
              source={{ uri: item.thumb }}
              onLoadStart={() => {
                setIsLoading(true);
              }}
              onLoadEnd={() => setIsLoading(false)}
            />
            {isLoading && (
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
          </TouchableOpacity>
          <View style={styles.info}>
            <CustomText style={styles.title}>{item.title}</CustomText>

            <View style={styles.rateContainer}>
              <NumberFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" VND"}
                renderText={(formattedValue) => (
                  <View style={styles.priceContainer}>
                    <CustomText style={styles.price}>
                      {formattedValue}
                    </CustomText>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

FavoriteItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 90,
    flexDirection: "row",
    backgroundColor: Colors.light_grey,
    marginTop: 5,
    borderRadius: 0,
    alignItems: "center",
  },
  info: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 10,
    width: "75%",

  },
  title: {
    fontSize: 16,
    width: 200
  },
  subText: {
    fontSize: 13,
    paddingVertical: 2,
    color: Colors.grey,
  },
  rateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  rate: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 5,
  },
  score: {
    fontSize: 12,
    marginLeft: 5,
    color: Colors.grey,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    color: Colors.red,
  },
  action: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  rightAction: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
    flexDirection: "row",
    height: 90,
  },
  actionText: {
    color: "white",
    fontSize: 11,
    backgroundColor: "transparent",
    padding: 5,
  },
});

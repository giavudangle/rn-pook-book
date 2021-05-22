import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Dimensions, Platform } from "react-native";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Action
import { fetchOrder } from "../../actions/order";
import { Header, OrderBody } from "./components";

import SkeletonLoadingOrder from "../../components/Loaders/SkeletonLoadingOrder";

const { height } = Dimensions.get("window");

export const OrderScreen = ({navigation}) => {
  /**
  |--------------------------------------------------
  | Global State
  |--------------------------------------------------
  */
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.order.orders);
  const isLoading = useSelector((state) => state.order.isLoading);

  /**
  |--------------------------------------------------
  | Action Handlers
  |--------------------------------------------------
  */
  const dispatch = useDispatch();
  const loadOrders = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(fetchOrder());
    } catch (err) {
      alert(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  /**
  |--------------------------------------------------
  | Side Effects & Local State
  |--------------------------------------------------
  */
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    loadOrders();
  }, [user.userid]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {isLoading ? (
        <View style={styles.centerLoader}>
          <SkeletonLoadingOrder />
        </View>
      ) : (
        <OrderBody
          user={user}
          orders={orders}
          isRefreshing={isRefreshing}
          loadOrders={loadOrders}
          navigation={navigation}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerLoader: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: Platform.OS === "android" ? 70 : height < 668 ? 70 : 90,
  },
});




import React, { useState, useEffect, useRef } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import { Header, PaymentBody, PaymentFormView } from './components'
import Colors from '../../utils/Colors'
import { SummaryOrder } from '../PreOrderScreen/components'
import CustomText from '../../components/UI/CustomText';

import Loader from '../../components/Loaders/Loader';

import { useSelector, useDispatch } from 'react-redux'
import { createOrder } from '../../actions/order/orderActions'
import { resetCart } from '../../actions/cart'
import { PromotionHolder } from './promotions/PromotionHolder'


export const PaymentScreen = ({ route, navigation }) => {
  /**
  |--------------------------------------------------
  | Route parameters & Stuff
  |--------------------------------------------------
  */
  let token = route.params.token
  const {
    summaryOrders,
    deliveryInformation,
    total,
    cartId,
    fullAddress,
  } = route.params;

  const { deliveryName, deliveryPhone } = deliveryInformation;

  /**
  |--------------------------------------------------
  | Local State
  |--------------------------------------------------
  */
  const [loading, setLoading] = useState(true);
  const [payByCard, setPayByCard] = useState(false);
  const unmounted = useRef(false);

  /**
  |--------------------------------------------------
  | Global State
  |--------------------------------------------------
  */
  const carts = useSelector(state => state.cart.cartItems)
  const cartLoading = useSelector(state => state.cart.cartLoading)
  const orderLoading = useSelector(state => state.order.orderLoading)
  const dispatch = useDispatch();


  /**
  |--------------------------------------------------
  | Sides Effect
  |--------------------------------------------------
  */
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 1000);
    if (!unmounted.current) {
      return () => clearInterval(interval);
    }
  });
  useEffect(() => {
    setPayByCard(token ? true : false);
  }, [token]);


  /**
  |--------------------------------------------------
  | Action Handler
  |--------------------------------------------------
  */

  const _handleAddOrder = async () => {
    try {
      const paymentMethod = payByCard ? 'CC' : 'COD';
      let chargeToken = payByCard ? token : {};
      let finalTotal = total - promotion.value * 1000
      dispatch(
        createOrder(
          chargeToken,
          summaryOrders,
          deliveryName,
          finalTotal,
          paymentMethod,
          fullAddress,
          deliveryPhone
        )
      )
      dispatch(resetCart(cartId))
      navigation.navigate('FinishOrder');
    } catch (err) {
      alert(err);
    }
  };

  /**
  |--------------------------------------------------
  | Render JSX
  |--------------------------------------------------
  */

  const [promotion, setPromotion] = useState({})


  const calculateTotal = () => {
    return Object.keys(promotion).length > 0 ? total - promotion.value * 1000 : total
  }
  return (
    <ScrollView>
      <Header navigation={navigation} />
      {loading || cartLoading || orderLoading ? (
        <Loader />
      ) : (
        <>
          <ScrollView>
            <PaymentBody
              navigation={navigation}
              payByCard={payByCard}
              setPayByCard={setPayByCard}
              token={token}
            />
            <PromotionHolder promotion={promotion} setPromotion={setPromotion} navigation={navigation}/>
            <SummaryOrder cartItems={carts.items} total={calculateTotal()} />
          </ScrollView>
          <View style={styles.total}>
            <TouchableOpacity onPress={_handleAddOrder}>
              <View style={styles.orderButton}>
                <CustomText style={{ color: '#fff', fontSize: 16 }}>
                  Tiến hành đặt hàng
                </CustomText>
              </View>
            </TouchableOpacity>

          </View>
        </>
      )}
    </ScrollView>

  )
}

/**
|--------------------------------------------------
| Custom Styles
|--------------------------------------------------
*/

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  total: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 0,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  orderButton: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: 10
  },
});


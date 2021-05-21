import { API_URL } from '../../utils/Config'
import { predictTimeoutPromise } from '../../utils/Tools'
import { ORDER_FAILURE, ORDER_LOADING, FETCH_ORDER, ADD_ORDER } from '../../@types/orderActionTypes'
import axios from 'axios';
/**
|--------------------------------------------------
| Fetch Order
|--------------------------------------------------
*/
export const fetchOrder = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: ORDER_LOADING,
    });
    const user = getState().auth.user;
    if (user.userid == undefined) {
      return;
    }
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/orders`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "auth-token": user.token,
          },
          method: "GET",
        })
      );
      if (!response.ok) {
        dispatch({
          type: ORDER_FAILURE,
        });
        throw new Error("Something went wrong! Can't get your order");
      }
      const resData = await response.json();
      const filterUserOrder = resData.content.filter(
        (userOrder) => userOrder.userId._id === user.userid
      );
      dispatch({
        type: FETCH_ORDER,
        orderData: filterUserOrder,
      });
    } catch (err) {
      throw err;
    }
  };
};

/**
|--------------------------------------------------
| Create New Order (Add Order)
|--------------------------------------------------
*/
export const createOrder = (
  chargeToken,
  summaryOrders,
  name,
  totalAmount,
  paymentMethod,
  fullAddress,
  phone
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ORDER_LOADING,
    });
    const user = getState().auth.user;

    console.log('====================================');
    console.log(chargeToken,paymentMethod,name);
    console.log('====================================');
    try {
      const response = await predictTimeoutPromise(
        axios.post(`${API_URL}/orders`, {
          token: chargeToken,
          orderInfo: {
            userId: user.userid,
            items: summaryOrders,
            name,
            totalAmount,
            address: fullAddress,
            phone,
            paymentMethod,
          }
        }, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "auth-token": user.token,
          }
        })
      )
      console.log('====================================');
      console.log(response);
      console.log('====================================');
      if (response.status !== 200) {
        dispatch({
          type: ORDER_FAILURE,
        });
        throw new Error("Something went wrong when create new order!");
      }
      const responseData = await response.data.data
      dispatch({
        type: ADD_ORDER,
        orderItem: responseData,
      });
    } catch (err) {
      throw err;
    }
  };
};

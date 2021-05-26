import { API_URL } from "../../utils/Config";
import { predictTimeoutPromise } from "../../utils/Tools";

import {PRODUCT_FAILURE,PRODUCT_LOADING,FETCH_PRODUCTS} from '../../@types/productActionTypes'
import { Alert } from "react-native";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_LOADING,
    });
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/products`, {
          method: "GET",
        })
      );

      if (!response.ok) {
        dispatch({
          type: PRODUCT_FAILURE,
        });
        Alert.alert("Something went wrong!, Please check your internet connection")
        //throw new Error("Something went wrong!, can't get the products");
      }
      const resData = await response.json();
      dispatch({
        type: FETCH_PRODUCTS,
        products: resData.data,
      });
    } catch (err) {
      throw err;
    }
  };
};

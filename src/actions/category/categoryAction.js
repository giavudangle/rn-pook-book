import { API_URL } from "../../utils/Config";
import { predictTimeoutPromise } from "../../utils/Tools";

import {CATEGORY_FAILURE,CATEGORY_LOADING,FETCH_CATEGORIES} from '../../@types/categoryActionTypes'
import { Alert } from "react-native";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: CATEGORY_LOADING,
    });
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/categories`, {
          method: "GET",
        })
      );

      if (!response.ok) {
        dispatch({
          type: CATEGORY_FAILURE,
        });
        Alert.alert("Something went wrong!, Please check your internet connection")
       
      }
      const resData = await response.json();
      dispatch({
        type: FETCH_CATEGORIES,
        payload: resData.data,
      });
    } catch (err) {
      throw err;
    }
  };
};

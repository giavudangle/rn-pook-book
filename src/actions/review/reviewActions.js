import { API_URL } from "../../utils/Config";
import { predictTimeoutPromise } from "../../utils/Tools";

import {FETCH_REVIEW,REVIEW_LOADING} from '../../@types/reviewActionTypes'

import axios from 'axios'

//Fetch Reviews
export const fetchReviews = () => {
  return async (dispatch, getState) => {
      try {
        const response = await predictTimeoutPromise(
          axios.get(`${API_URL}/reviews`)
        );
        dispatch({
          type:FETCH_REVIEW,
          payload:response.data.data
        })

      }
      catch(e){
        throw e;
      }
  };
};
// Create new review
export const createNewReview = (content,product) => {
  return async (dispatch, getState) => {
    const user = getState().auth.user;
    dispatch({
      type:REVIEW_LOADING
    })
    try {
      const response = await predictTimeoutPromise(
        axios.post(`${API_URL}/reviews`, {
          content:content,
          user:user.userid,
          product:product
        })
      );
      dispatch({
        type:FETCH_REVIEW,
        payload:response.data.data
      })
      
    } catch (err) {
      throw err;
    }
  };
};


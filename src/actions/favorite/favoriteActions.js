import { API_URL } from "../../utils/Config";
import { predictTimeoutPromise } from "../../utils/Tools";

import { FETCH_FAVORITE, FAVORITE_FAILURE, FAVORITE_LOADING, ADD_FAVORITE, REMOVE_FAVORITE } from '../../@types/favoriteActionTypes'


import axios from 'axios'


//Fetch Favorite
export const fetchFavorite = () => {
  return async (dispatch, getState) => {
    const user = getState().auth.user;

    if (user.userid != 'undefined') {
      dispatch({
        type: FAVORITE_LOADING,
      });
      try {
        const response = await predictTimeoutPromise(
          axios.get(`${API_URL}/favorites`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'auth-token': user.token
          }
        }))
        if (response.status !== 200){
          dispatch({
            type: FAVORITE_FAILURE,
          });
          throw new Error("Something went wrong!, can't get favorite list");
        }
        const resData = response.data.data;
        const filterUserFavorite = resData.filter(item => item.userId === user.userid)
        let items = [];
        if (filterUserFavorite.length > 0) {
          items = filterUserFavorite[0].items;
        }
        dispatch({
          type: FETCH_FAVORITE,
          favoriteList: items,
        });
      }
      catch(err) {
        throw err;
      }
      return;
    };
  };
}
//Add Favorite
export const addFavorite = (item) => {
  return async (dispatch, getState) => {
    dispatch({
      type: FAVORITE_LOADING,
    });
    const user = getState().auth.user;
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/favorites`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "auth-token": user.token,
          },
          method: "POST",
          body: JSON.stringify({
            userId: user.userid,
            items: [
              {
                item: item._id,
              },
            ],
          }),
        })
      );
      if (!response.ok) {
        dispatch({
          type: FAVORITE_FAILURE,
        });
        throw new Error("Something went wrong!");
      }

      const bestItem ={
        item:{}
      }

      bestItem.item = item

      dispatch({
        type: ADD_FAVORITE,
        addItem: bestItem,
      });
    } catch (err) {
      throw err;
    }
  };
};
export const removeFavorite = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    dispatch({
      type: FAVORITE_LOADING,
    });
    const user = getState().auth.user;
    try {
      const response = await predictTimeoutPromise(
        fetch(`${API_URL}/favorites/${user.userid}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "auth-token": user.token,
          },
          method: "PATCH",
          body: JSON.stringify({
            item: id,
          }),
        })
      );
      if (!response.ok) {
        dispatch({
          type: FAVORITE_FAILURE,
        });
        throw new Error("Something went wrong!");
      }
      dispatch({
        type: REMOVE_FAVORITE,
        itemId: id,
      });
    } catch (err) {
      throw err;
    }
  };
};

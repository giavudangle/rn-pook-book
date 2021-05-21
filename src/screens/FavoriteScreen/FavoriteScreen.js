import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Action
import { fetchFavorite } from "../../actions/favorite";
//Component
import { Header, FavoriteBody } from "./components";
// Utils
import Colors from "../../utils/Colors";
//Loader
import SkeletonLoadingCart from "../../components/Loaders/SkeletonLoadingCart";




export const FavoriteScreen = ({ navigation }) => {
  /**
  |--------------------------------------------------
  | Local State
  |--------------------------------------------------
  */
  const [isRefreshing, setIsRefreshing] = useState(false);
  /**
  |--------------------------------------------------
  | Global State 
  |--------------------------------------------------
  */
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.fav.isLoading);
  const FavoriteProducts = useSelector((state) => state.fav.favoriteList);
  const dispatch = useDispatch();


  /**
  |--------------------------------------------------
  | Action Handler
  |--------------------------------------------------
  */
  const loadFavoriteProducts = useCallback(async () => {
    setIsRefreshing(true);
    try {
      dispatch(fetchFavorite());
    } catch (err) {
      alert(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);



  /**
  |--------------------------------------------------
  | Side Effects
  |--------------------------------------------------
  */
  useEffect(() => {
    loadFavoriteProducts();
  }, [user.userid]);

  /**
  |--------------------------------------------------
  | Render JSX
  |--------------------------------------------------
  */
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {loading
        ? (<SkeletonLoadingCart />)
        : (<FavoriteBody
          user={user}
          FavoriteProducts={FavoriteProducts}
          navigation={navigation}
          loadFavoriteProducts={loadFavoriteProducts}
          isRefreshing={isRefreshing}
        />)
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

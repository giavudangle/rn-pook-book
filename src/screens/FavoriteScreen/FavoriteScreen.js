import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet,TouchableOpacity } from "react-native";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Action
import { fetchFavorite } from "../../actions/favorite";
//Component
import { Header, FavoriteBody } from "./components";
// Utils
import Colors from "../../utils/Colors";
//Loader
import SkeletonLoadingFavorite from "../../components/Loaders/SkeletonLoadingFavorite";

import CustomText from "../../components/UI/CustomText";
import Messages from '../../messages/user'

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
         {Object.keys(user).length === 0 
         ? (
          <View style={styles.center}>
            <CustomText>{Messages["user.login.require"]}</CustomText>
            <View style={styles.nextButton}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <CustomText style={{ color: "#fff" }}>Tiếp tục</CustomText>
              </TouchableOpacity>
            </View>
          </View>
        ) : loading
          ? <SkeletonLoadingFavorite />
          : (<FavoriteBody
              user={user}
              FavoriteProducts={FavoriteProducts}
              navigation={navigation}
              loadFavoriteProducts={loadFavoriteProducts}
              isRefreshing={isRefreshing}/>
            )
        }
         
        
       
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  nextButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.lighter_green,
    borderRadius: 5,
    borderColor: Colors.lighter_green,
    marginTop: 10,
  },
  center: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

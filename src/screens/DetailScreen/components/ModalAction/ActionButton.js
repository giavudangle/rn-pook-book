import React, { useRef, useEffect,useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
//import CustomText
import CustomText from '../../../../components/UI/CustomText';
//icon
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
//Animatable
import * as Animatable from 'react-native-animatable';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Action

import { addToCart } from '../../../../actions/cart';
<<<<<<< HEAD
import { addFavorite, removeFavorite } from '../../../../actions/favorite';
=======
import { addFavorite,removeFavorite } from '../../../../actions/favorite';

>>>>>>> d3e7e57925646b3936aa3e586e9870a3cae474de



import Messages from '../../../../messages/user';
import Colors from '../../../../utils/Colors'

//PropTypes check
import PropTypes from 'prop-types';

export const ActionButton = ({
  user,
  item,
  color,
  setShowSnackbar,
  FavoriteProducts,
  setModalVisible,
  setMessage,
}) => {

  /**
  |--------------------------------------------------
  | Global State 
  |--------------------------------------------------
  */
  const cartLoading = useSelector((state) => state.cart.isLoading);


  /**
  |--------------------------------------------------
  | Local State 
  |--------------------------------------------------
  */
  const unmounted = useRef(false);
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);


  /**
  |--------------------------------------------------
  | Action Handlers
  |--------------------------------------------------
  */
  const dispatch = useDispatch();

  const validateAddToCart = () => {
    return +item.stocks > 0;
  }
  const _handleRemoveItem = async () => {
    await dispatch(removeFavorite(item._id))
  }

  const addToCartAct = async () => {
    if(validateAddToCart()){
      if (Object.keys(user).length === 0) {
        setMessage(Messages['user.login.require']);
        setShowSnackbar(true);
      } else {
        try {
          dispatch(addToCart(item, user.token));
          setModalVisible(true);
        } catch (err) {
          throw err;
        }
      }
    } else {
      Alert.alert('HẾT HÀNG','PookBook sẽ liên hệ cho bạn khi có hàng')
    }
  };
 
  const toggleFavorite = () => {
    // if (Object.keys(user).length === 0) {
    //   setMessage(Messages['user.login.require']);
    //   setShowSnackbar(true);
    // } else if (FavoriteProducts) {
    //   Alert.alert(
    //     'Bỏ yêu thích',
    //     'Bạn có muốn bỏ sản phẩm ra khỏi mục yêu thích?',
    //     [
    //       {
    //         text: 'Hủy',
    //         style: 'cancel',
    //       },
    //       {
    //         text: 'Đồng ý',
    //         onPress: () => dispatch(removeFavorite(item._id)),
    //       },
    //     ],
    //   );
    // } else {
    //   dispatch(addFavorite(item));
    // }

    if (FavoriteProducts === true) {
      Alert.alert(
        'Bỏ yêu thích',
        'Bạn có muốn bỏ sản phẩm ra khỏi mục yêu thích?',
        [
          {
            text: 'Hủy',
            style: 'cancel',
          },
          {
            text: 'Đồng ý',
            onPress: () => _handleRemoveItem(),
          },
        ],
      );
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <Animatable.View
      delay={1500}
      animation='fadeInUp'
      style={styles.actionContainer}
    >
      <View style={styles.action}>
        <TouchableOpacity
          onPress={toggleFavorite}
          // onPress={() => console.log(FavoriteProducts)}
          style={[styles.favorite, { borderColor: color }]}
        >
          {FavoriteProducts ? (
            <LottieView
              source={require('../../../../components/IconAnimation/heart.json')}
              autoPlay={FavoriteProducts}
              loop={false}
            />
          ) : (
            <Ionicons name='ios-heart-empty' size={27} color={color} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addCart, { backgroundColor: color }]}
          onPress={addToCartAct}
        >
          {cartLoading ? (
            <ActivityIndicator size='small' color='#fff' />
          ) : (
            <CustomText style={styles.actionText}>Thêm vào giỏ hàng</CustomText>
          )}
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

ActionButton.propTypes = {
  item: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  setShowSnackbar: PropTypes.func.isRequired,
  FavoriteProducts: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  addCart: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
  },
  favorite: {
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    paddingTop: 5,
    borderRadius: 5,
    height: 50,
  },
  actionText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
});

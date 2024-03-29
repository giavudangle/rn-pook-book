import React,{useEffect,useState,useCallback} from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import {Header,CartBody,TotalButton} from './components'
import Colors from '../../utils/Colors';

//Redux
import { useSelector, useDispatch } from 'react-redux';

// Action 
import {fetchCart} from '../../actions/cart'

//Loader
import Loader from '../../components/Loaders/Loader';

import SkeletonLoadingCart from '../../components/Loaders/SkeletonLoadingCart'

const { height } = Dimensions.get('window');



export const CartScreen = (props) => {

  /**
  |--------------------------------------------------
  | Global State
  |--------------------------------------------------
  */
  const user = useSelector((state) => state.auth.user);
  const carts = useSelector((state) => state.cart.cartItems);
  const loading = useSelector((state) => state.cart.isLoading);
  

  /**
  |--------------------------------------------------
  | Local State
  |--------------------------------------------------
  */
  const [isRefreshing, setIsRefreshing] = useState(false);


  /**
   * Stuff
   */
  let total = 0; 
  const cartItems = carts.items;
  const cartId = carts._id;
  carts.items.map((item) => (total+= +item.item.price * +item.quantity));


  /**
  |--------------------------------------------------
  | Action Handlers
  |--------------------------------------------------
  */
  const dispatch = useDispatch();
  const loadCarts = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(fetchCart())
    } catch (err){
      alert(err)
    }
    setIsRefreshing(false);
  },[dispatch,setIsRefreshing])

  /**
  |--------------------------------------------------
  | Side Effect
  |--------------------------------------------------
  */

  useEffect(() => {
    loadCarts()
  },[user.userid])
  

  return (
    <View style={styles.container}>
      <Header user={user} carts={carts} navigation={props.navigation}/>
      {
        loading  
        ? (<SkeletonLoadingCart/>)
        : (     
          <CartBody
          user={user}
          carts={carts}
          loadCarts={loadCarts}
          isRefreshing={isRefreshing}
          navigation={props.navigation}
          />           
        )
      }
      {
        Object.keys(user).length === 0 
        ? (<></>)
        : carts.items.length === 0 
          ? (<></>)
          : (
            <TotalButton
            user={user}
            total={total}
            cartItems={cartItems}
            cartId={cartId}
            navigation={props.navigation}
            />
          )
      }
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  centerLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
  },
});

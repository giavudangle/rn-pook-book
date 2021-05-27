import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList,
  SafeAreaView,
  Button
} from 'react-native';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions/product';
//Colors
import Colors from '../../utils/Colors';
//Animation
import Animated from 'react-native-reanimated';
//Components
import { Header } from './components/Header'

// Float Button
import { Portal, Provider } from 'react-native-paper';

//

import SkeletonLoading from '../../components/Loaders/SkeletonLoading'
import SnackBar from '../../components/Notification/SnackBar'
import { Carousel } from './components/Carousel'

import { CategorySection } from './components/Categories/CategorySection'


import { FloatButton } from './components/Contact'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)


import banners from "../../db/Banners";

import { fetchCategories } from '../../actions/category/categoryAction';




export const HomeScreen = ({ navigation }) => {
  let scrollY = new Animated.Value(0);

  const isLoading = useSelector(state => state.store.isLoading)
  const notification = useSelector((state) => state.auth.notification);
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.store.products);
  const dispatch = useDispatch();

  const categories = useSelector(state => state.category.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  useEffect(() => {
    const fetching = async () => {
      try {
        dispatch(fetchProducts());
      } catch (err) {
        alert(err);
      }
    };
    fetching();
  }, [user.userid]);



  return (
    <Provider>
      {
        isLoading
          ? (< SkeletonLoading />)
          : (
            <SafeAreaView style={styles.container}>
              <Header
                products={products}
                navigation={navigation}
              />

              <Portal>
                <FloatButton />
              </Portal>

              <AnimatedFlatList
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                  <View style={styles.banner}>
                    <Carousel banners={banners} />
                  </View>
                )}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: { contentOffset: { y: scrollY } },
                    },
                  ],
                  { useNativeDriver: true },
                )}
                data={categories}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                  <CategorySection
                    category={item}
                    name={item.name}
                    listProducts={products}
                    navigation={navigation}
                  />
                )}
              />
              {Object.keys(notification).length === 0 ? (
                <View />
              ) : (
                <SnackBar
                  checkVisible={true}
                  message={
                    Object.keys(user).length === 0
                      ? notification
                      : notification + ' ' + user.name
                  }
                />
              )}



            </SafeAreaView>
          )}
    </Provider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  list: {
    width: '100%',
    marginTop: 50,
    paddingBottom: 20,
  },
  banner: {
    marginBottom: 50
  }
});

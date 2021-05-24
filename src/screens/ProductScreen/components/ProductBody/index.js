import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SectionList,
  Text,
  SafeAreaView
} from 'react-native';
import Animated, { Value } from 'react-native-reanimated';
//Color
import Colors from '../../../../utils/Colors';
import HorizontalItem from './HorizontalDisplayItem';
import CustomText from '../../../../components/UI/CustomText';
import { Header } from '../Header';
//PropTypes check
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

//ITEM_HEIGHT = 100;

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

export const ProductBody = ({
  navigation,
  productsFilter,
  searchFilterFunction,
}) => {
  const categories = useSelector(state => state.category.categories)
   
  const autoMapper = () => {
    const DATA = [];
    categories.map(category => {
      const productsMapped = productsFilter.filter(product => product.category.code === category.code)
      const data = {
        title: category.name,
        data: productsMapped
      }
      DATA.push(data)
    })
    return DATA
  }

  const DATA = autoMapper();
  const scrollY = new Value(0);
  const sectionListRef = useRef(null);


  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Header
          navigation={navigation}
          searchFilterFunction={searchFilterFunction}
          scrollY={scrollY}
        />
      </TouchableWithoutFeedback>
      {productsFilter.length === 0 ? (
        <CustomText style={{ textAlign: 'center', marginTop: 110 }}>
          Không tìm thấy sản phẩm
        </CustomText>
      ) : (
        <AnimatedSectionList
          sections={DATA} // REQUIRED: SECTIONLIST DATA
          keyExtractor={(item) => item._id}
          ref={sectionListRef}
          renderSectionHeader={({ section: { title, data } }) =>
            data.length > 0
              ? (
                <View style={styles.header}>
                  <CustomText style={styles.title}>{title}</CustomText>
                </View>
              ) : <></>}
          renderItem={item =>
            item.section.data.length > 0
              ?
              (
                <HorizontalItem item={item.item} navigation={navigation} />
              ) : <></>
          }

          stickySectionHeadersEnabled={false}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
            // { listener: HandleScrollY, useNativeDriver: false }
          )}
          contentContainerStyle={{ marginTop: 90, paddingBottom: 100 }}
        />
      )}

    </SafeAreaView>
  );
};

ProductBody.propTypes = {
  navigation: PropTypes.object.isRequired,
  productsFilter: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: Colors.white,

  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.leave_green,
  },
});

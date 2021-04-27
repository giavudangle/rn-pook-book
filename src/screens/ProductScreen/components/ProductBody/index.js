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

//ITEM_HEIGHT = 100;

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

export const ProductBody = ({
  navigation,
  productsFilter,
  searchFilterFunction,
}) => {


  const DATA = [];

  const literals = productsFilter.filter((item) => item.category.code ==='VH')
  const lifeSkills = productsFilter.filter((item) => item.category.code === 'KNS');
  const economics = productsFilter.filter((item) => item.category.code === 'KT');
  
  DATA.push({ title: 'Sách Kinh Tế', data: economics });
  DATA.push({ title: 'Sách Kỹ Năng Sống', data: lifeSkills });
  DATA.push({ title: 'Sách Văn Học', data: literals });
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
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.header}>
              <CustomText style={styles.title}>{title}</CustomText>
            </View>
          )}
          renderItem={({ item }) => (
            <HorizontalItem item={item} navigation={navigation} />
          )}
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

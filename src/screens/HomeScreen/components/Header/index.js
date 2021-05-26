// Import react
import React, { createRef, useRef, useState } from 'react';
// Import react-native components
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';
//icon
import { Ionicons } from '@expo/vector-icons';
//Colors
import Colors from '../../../../utils/Colors';
//Search Item component
import Animated, { Easing } from 'react-native-reanimated';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
const { Value, timing } = Animated;
// Calculate window size
const { width, height } = Dimensions.get('window');
import SearchItem from '../Search/SearchItem'

import PropTypes from 'prop-types';







/**
|--------------------------------------------------
| Animation Utils
|--------------------------------------------------
*/

// Input search animation default value
const ___animation_input_box_translate_x = new Value(width)

const ___animation_back_button_opacity = new Value(0)

const ___animation_content_translate_y = new Value(height)

const ___animation_content_opacity = new Value(0)

const headerPlatform = 50;

let scrollY = new Animated.Value(0);

const clampedScrollY = scrollY.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 1],
  extrapolateLeft: 'clamp',
});



// animation configs when focus to search
const __config_focus_box_translate_x = {
  duration: 200,
  toValue: 0,
  easing: Easing.inOut(Easing.ease),
}

const __config_focus_back_button_opacity = {
  duration: 200,
  toValue: 1,
  easing: Easing.inOut(Easing.ease),
};

const __config_focus_content_translate_y = {
  duration: 0,
  toValue: 0,
  easing: Easing.inOut(Easing.ease),
};
const __config_focus_content_opacity = {
  duration: 200,
  toValue: 1,
  easing: Easing.inOut(Easing.ease),
};

// animation configs when blur from search
const __config_blur_input_box_translate_x = {
  duration: 500,
  toValue: width,
  easing: Easing.inOut(Easing.ease),
};
const __config_blur_back_button_opacity = {
  duration: 50,
  toValue: 0,
  easing: Easing.inOut(Easing.ease),
};

const __config_blur_content_translate_y= {
  duration: 0,
  toValue: height,
  easing: Easing.inOut(Easing.ease),
};
const __config_blur_content_opacity = {
  duration: 500,
  toValue: 0,
  easing: Easing.inOut(Easing.ease),
};


// Header & Clamp
const __diff_clamp_scroll_y = Animated.diffClamp(
  clampedScrollY,
  0,
  headerPlatform,
);
const __header_translate_y = Animated.interpolate(__diff_clamp_scroll_y, {
  inputRange: [0, headerPlatform],
  outputRange: [0, -headerPlatform],
  extrapolate: 'clamp',
});
const __header_config_opacity = Animated.interpolate(__diff_clamp_scroll_y, {
  inputRange: [0, headerPlatform],
  outputRange: [1, 0],
  extrapolate: 'clamp',
});

export const Header = ({ style,navigation,products }) => {

  // Local state
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [productsFilter, setProductsFilter] = useState('');

  const inputRef = useRef(null);

  // Search Function
  const searchFilter = (searchTxt) => {
    const data = products.filter((product) =>
      product.title.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setKeyword(searchTxt)
    setProductsFilter(data)
  }


  const onFocus = () => {
    // update focus state
    setIsFocused(true)
    // Call animation
    timing(___animation_input_box_translate_x,__config_focus_box_translate_x).start()
    timing(___animation_back_button_opacity,__config_focus_back_button_opacity).start()
    timing(___animation_content_translate_y,__config_focus_content_translate_y).start()
    timing(___animation_content_opacity,__config_focus_content_opacity).start()

    // force focus to ref
    inputRef.current.focus()

  }

  const onBlur = () => {
    // update focus state
    setIsFocused(false)
  
    // Call animation
    timing(___animation_input_box_translate_x, __config_blur_input_box_translate_x).start();
    timing(___animation_back_button_opacity, __config_blur_back_button_opacity).start();
    timing(___animation_content_translate_y, __config_blur_content_translate_y).start();
    timing(___animation_content_opacity, __config_blur_content_opacity).start();
  }



  return (
    <>
      <SafeAreaView style={{ ...styles.header_safe_area, ...style }}>
        <Animated.View
          style={[
            styles.header,
            {
              transform: [{ translateY: __header_translate_y }],
              opacity: __header_config_opacity,
            },
          ]}
        >
          <View style={styles.header_inner}>
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
            >
              <Ionicons
                name='ios-menu'
                size={30}
                color={Colors.lighter_green}
              />
            </TouchableOpacity>
            <View>
              <Image
                source={require('../../../../assets/Images/logo1.png')}
                style={{
                  width: height < 668 ? 50 : 80, // set size icon
                  resizeMode: 'contain',
                }}
              />
            </View>
            <TouchableOpacity
              activeOpacity={1}
              underlayColor={'#ccd0d5'}
              onPress={onFocus}
              style={styles.search_icon_box}
            >
              <Ionicons name='ios-search' size={20} color={Colors.white} />
            </TouchableOpacity>

            {
              // Animatied
            }
            <Animated.View
              style={[
                styles.input_box,
                { transform: [{ translateX: ___animation_input_box_translate_x }] },
              ]}
            >
              <Animated.View style={{ opacity: ___animation_back_button_opacity }}>
                <TouchableOpacity
                  activeOpacity={1}
                  underlayColor={'#ccd0d5'}
                  onPress={onBlur}
                  style={styles.back_icon_box}
                >
                  <Ionicons
                    name='ios-arrow-back'
                    size={25}
                    color={Colors.light_green}
                  />
                </TouchableOpacity>
              </Animated.View>
              <TextInput
                ref={inputRef}
                placeholder='Tìm kiếm sản phẩm'
                clearButtonMode='always'
                value={keyword}
                onChangeText={(value) => searchFilter(value)}
                style={styles.input}
              />
            </Animated.View>
          </View>
        </Animated.View>
      </SafeAreaView>

      <Animated.View
        style={[
          styles.content,
          {
            opacity: ___animation_content_opacity,
            transform: [{ translateY: ___animation_content_translate_y }],
          },
        ]}
      >
        <View style={styles.content_safe_area}>
          {keyword === '' ? (
            <View style={styles.image_placeholder_container}>
              <Image
                source={require('../../../../assets/Images/logo1.png')}
                style={styles.image_placeholder}
              />
              <Text style={styles.image_placeholder_text}>
                Nhập vào từ khóa{'\n'}
                để tìm kiếm :D
              </Text>
            </View>
          ) : (
            <View
              style={{
                marginHorizontal: 20,
                marginTop:
                  Platform.OS === 'android' ? 0 : height < 668 ? 50 : 20,
                  paddingVertical:40,
              }}
            >
              {productsFilter.length === 0 ? (
                <Text style={styles.image_placeholder_text}>
                  Không tìm thấy sản phầm
                </Text>
              ) : (
                <FlatList
                  data={productsFilter}
                  keyExtractor={(item) => item._id}
                  renderItem={({ item }) => {
                    return (
                      <SearchItem
                        item={item}
                        navigation={navigation}
                      />
                    );
                  }}
                />
              )}
            </View>
          )}
        </View>
      </Animated.View>
    </>
  )
}

Header.propTypes = {
  navigation : PropTypes.object,
  products : PropTypes.array
}



const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    top: Platform.OS === 'ios' ? -20 : -10
  },
  header: {
    position: 'absolute',
    backgroundColor: Colors.white,
    width,
    height: 50,
    top:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : height > 736
          ? 10 
          : 20,
  },
  header_inner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  search_icon_box: {
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: Colors.lighter_green,
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.white,
    width: width,
  },
  back_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.light_grey,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    marginHorizontal: 20,
  },
  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    zIndex: 999,
  },
  content_safe_area: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 80 : 40,
    paddingBottom: 80,
    backgroundColor: Colors.white,
  },
  content_inner: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.light_grey,
  },
  image_placeholder_container: {
    flexDirection: 'column',
    marginTop: 100,
  },
  image_placeholder: {
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  image_placeholder_text: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
  },
  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
  },
  item_icon: {
    marginRight: 15,
  },
});





import React, {useRef} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Dimensions,
  Animated,
  Button
} from 'react-native';

import Slide from './components/Slide'
import SubSlide from './components/SubSlide'
import Pagination from './components/Pagination'

const {width, height} = Dimensions.get('screen')

const slides = [
  {
    name: 'Tìm cuốn sách yêu thích',
    des: 'Tất cả những gì con người làm, nghĩ hoặc trở thành, được bảo toàn một cách kỳ diệu trên những trang sách ...'
  },
  {
    name: 'Một tương lai sáng lạng',
    des: 'Người biết đọc nắm trong tay sức mạnh để khuếch đại bản thân mình ....'
  },
  {
    name: 'Một cuốn sách thực sự',
    des: 'Nên đọc trong tuổi trẻ, rồi đọc lại khi đã trưởng thành, và một nữa lúc già ...'
  }
]


export default function IntroScreen() {

  const scrollX = new Animated.Value(0);
  const scrollClick = useRef(null)

  const backgroundColor = scrollX.interpolate({
    inputRange: [0, width, width * 2],
    outputRange: ["#7EFFB1", "#5BFF9C", "#4DFF94"],
    extrapolate: 'clamp' 
  })

  const textTranslate = scrollX.interpolate({
    inputRange: [0, width, width * 2],
    outputRange: [0, width * -1, width * -2],
    extrapolate: 'clamp'
  })

  return (
    <View style={styles.container}>
        <Animated.View style={{
          backgroundColor: backgroundColor, 
          flex: 6, 
          borderBottomRightRadius: 75
          }}
        >
          <Animated.ScrollView
            ref={scrollClick}
            horizontal
            snapToInterval={width}
            scrollTo={{ x: scrollClick, animated: true }}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {useNativeDriver: false}
            )}
          >
            {
              slides.map(item => {
                return <Slide name={item.name}/>
              })
            }
          </Animated.ScrollView>
        </Animated.View>
        <Animated.View style={[styles.footer, {backgroundColor}]}>
          <Pagination slides={slides} scrollX={scrollX}/>
          <Animated.View style={[styles.footerContent, {transform: [{translateX: textTranslate}]}]}>
            {
              slides.map((item, index) => {
                return <SubSlide 
                  title={item.name} 
                  backgroundColor={backgroundColor}
                  content={item.des}
                  scrollX={scrollX}
                  last={index === slides.length - 1}
                  nextSlide={() => {
                    if(scrollClick.current) {
                      scrollClick.current.scrollTo({x: width * (index + 1)})
                    }
                  }}
                />
              })
            }
          </Animated.View>
        </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 4,
    width: width,
  },
  background: {
    flex: 6,
    backgroundColor: 'red',
    width: width,
  },
  wrapContent: {
    alignItems: 'center',
    paddingTop: 60
  },

  footer: {
    flex: 4,
    backgroundColor: 'red',
    width: width,
    zIndex: 1
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    width: width * slides.length,
    borderTopLeftRadius: 75
  }
})

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';


//Color
import Colors from '../../utils/Colors';
//Redux
import { useSelector } from 'react-redux';
//Components
import SnackBar from '../../components/Notification/SnackBar';

import {Header} from './components/Header'
import {DetailBody} from './components/Body'
import { Comments } from './components/Comments';

import {ActionButton, ModalComponent} from './components/ModalAction'




export const DetailScreen = (props) => {
  const scrollY = new Animated.Value(0);
  const user = useSelector((state) => state.auth.user);
  const { item } = props.route.params;
  const [message, setMessage] = useState('Hello Vudang');
  const [showSnackbar, setShowSnackbar] = useState(true);
  const [color, setColor] = useState(Colors.leave_green);



  const FavoriteProducts = useSelector((state) =>
  state.fav.favoriteList.some((product) => product._id === item._id),
  );

  //color
  const type = item.color;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {
        showSnackbar 
        ? (<SnackBar checkVisible={showSnackbar} message={message} />)
        : (<View/>)
      }

      <Header navigation={props.navigation} scrollY={scrollY} item={item} />

      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
      >
        <DetailBody item={item} color={color} />
        <Comments />
      </Animated.ScrollView>

      <ActionButton
        item={item}
        FavoriteProducts={FavoriteProducts}
        setShowSnackbar={setShowSnackbar}
        setModalVisible={setModalVisible}
        setMessage={setMessage}
        user={user}
        color={color}
      /> 
      <ModalComponent
       item={item}
       color={color}
       modalVisible={modalVisible}
       setModalVisible={setModalVisible}
       navigation={props.navigation}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingBottom: 20 },
});


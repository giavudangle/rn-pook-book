import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';

const { height, width } = Dimensions.get('window');

const Gradient = () => {
  return (
    <LinearGradient
      colors={['#eeeeee', '#dddddd', '#eeeeee']}
      start={{ x: 1.0, y: 0.0 }}
      end={{ x: 0.0, y: 0.0 }}
      style={{
        flex: 1,
        width: 120,
      }}
    />
  );
};

const ContentSkeleton = () => {
  return (
    <View style={styles.content}>
      <View style={{ width: '100%',height:100 }}>
        <Placeholder
          style={{
            ...styles.placeholder,
            width: '60%',
            height: 15,
          }}
        />
        <Placeholder
          style={{
            ...styles.placeholder,
            width: '80%',
            height: 15,
            marginTop: 5,
          }}
        />
         <Placeholder
          style={{
            ...styles.placeholder,
            width: '100%',
            height: 35,
            marginTop: 5,
          }}
        />
      </View>
    </View>
  )
}



const SkeletonLoadingFavorite = () => {
  return (
    <PlaceholderContainer
      style={styles.container}
      animatedComponent={<Gradient />}
      duration={1000}
      replace={true}
    >
      <ContentSkeleton/>
      <ContentSkeleton/>
      <ContentSkeleton/>
      <ContentSkeleton/>
      <ContentSkeleton/>
      <ContentSkeleton/>
     
    </PlaceholderContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    width: width,
    backgroundColor: '#fff',
    height: height,
  },

  placeholder: {
    backgroundColor: '#eeeeee',
    borderRadius: 5,
  },
  banner: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default SkeletonLoadingFavorite;

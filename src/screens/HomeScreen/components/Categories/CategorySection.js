import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import { ProductItem } from "../Product/ProductItem";
import CustomText from "../../../../components/UI/CustomText";
import Colors from "../../../../utils/Colors";
import { BlurView } from "expo-blur";
//PropTypes check
import PropTypes from "prop-types";
const {width,height} = Dimensions.get('screen')

export const CategorySection = ({listProducts, name, bg, navigation,category}) => {

  const mapProductsToCategory = () => {
    return listProducts.filter(item => item.category.code === category.code )
  }

  const flag = mapProductsToCategory();

  return (
    mapProductsToCategory().length ?
    (
    <View style={[styles.category]}>
        {/* <Image style={styles.background} source={bg} blurRadius={10} /> */}
        <View style={styles.titleHeader}>
          <CustomText style={styles.title}>{category.name}</CustomText>
        </View>
        <View style={styles.productList}>
          <FlatList
            data={mapProductsToCategory().slice(0,4)}
            keyExtractor={(item) => item._id}
            numColumns={2}
            columnWrapperStyle={styles.list}
            renderItem={({ item }) => {
              return (
                <ProductItem
                  key={item._id}
                  item={item}
                  navigation={navigation}
                />
              );
            }}
          />
           <TouchableOpacity
          onPress={() => navigation.navigate("Product",{flag})}
          style={{ marginHorizontal: 10,marginTop:10 }}
        >
          <BlurView tint='light' intensity={100} style={styles.seeMore}>
            <CustomText style={styles.seeMoreText}>Xem Thêm</CustomText>
          </BlurView>
        </TouchableOpacity>
        </View>
       
      </View>
    ) : <></>
  )
}






CategorySection.propTypes = {
  listProducts: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  category: {
    height: height/1.2,
    marginHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor:Colors.white,
    bottom:30
  },
  background: {
    position: "absolute",
    resizeMode: "stretch",
    borderRadius: 5,
    height: 518,
    width: "100%",
    bottom: 0,
  },
  titleHeader: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    color: Colors.light_green,
    fontWeight: "500",
    fontFamily:'Roboto-Bold'
  },
  list: {
    justifyContent: "space-between",
  },
  productList: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  seeMore: {
    width: "100%",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'red',
    bottom:20
  },
  seeMoreText: {
    fontSize: 14,
    color: Colors.lighter_green,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
});

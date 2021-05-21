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

export const CategorySection = ({data, name, bg, navigation}) => {

  // Migrate to Functional Component
  const lifeSkills = data.filter((item) => item.category.code === "KNS");
  const literaries = data.filter((item) => item.category.code === "VH");
  const economics = data.filter((item) => item.category.code === "KT");


  const getItems = () => {
    switch(name) {
      case 'Sách kỹ năng sống':
        return lifeSkills
      case 'Sách văn học':
        return literaries
      default :
        return economics
    }

  }

  const trans = getItems()

  

  return (
    trans ?
    (
    <View style={[styles.category]}>
        {/* <Image style={styles.background} source={bg} blurRadius={10} /> */}
        <View style={styles.titleHeader}>
          <CustomText style={styles.title}>{name}</CustomText>
        </View>
        <View style={styles.productList}>
          <FlatList
            
            data={getItems().slice(0,4)}
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
          onPress={() => navigation.navigate("Product",{trans})}
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
  data: PropTypes.array.isRequired,
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
    backgroundColor:'red'
  },
  seeMoreText: {
    fontSize: 14,
    color: Colors.lighter_green,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
});

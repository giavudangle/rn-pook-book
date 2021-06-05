import React from "react";
import { View ,Dimensions} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Colors from "../../utils/Colors";

const {width,height} = Dimensions.get('screen');

const CustomLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        width:width,
        height:height,
        zIndex: 1001,
        justifyContent: "center",
        alignItems:'center',
        alignSelf:'center'
      }}
    >
      <ActivityIndicator size='large' color={Colors.primary} />
    </View>
  );
};

export default CustomLoader;

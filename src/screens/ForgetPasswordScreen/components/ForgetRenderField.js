import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import CustomText from "../../../components/UI/CustomText";
//Colors
import Colors from "../../../utils/Colors";

export default renderField = ({
  keyboardType,
  icon,
  label,
  meta: { touched, error, warning },
  input: { onChange, ...restInput },
}) => {
  return (
    <View style={{ marginTop: 30 }}>
      <TextInput
        placeholder={label}
        autoCapitalize='none'
        clearButtonMode='always'
        mode='outlined'
        selectionColor={Colors.primary}
        theme={{ colors: { primary: Colors.primary } }}
        left={
          <TextInput.Icon
            name={icon}
            size={24}
            color={Colors.lighter_green}
            style={{ paddingRight: 10 }}
          />
        }
        style={{ fontSize: 14 }}
        keyboardType={keyboardType}
        onChangeText={onChange}
        {...restInput}
      />
      {touched &&
        ((error && (
          <CustomText style={{ color: Colors.red ,marginTop:10}}>{error}</CustomText>
        )) ||
          (warning && (
            <CustomText style={{ color: Colors.carrot }}>{warning}</CustomText>
          )))}
    </View>
  );
};

import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
//Colors
import Colors from "../../../utils/Colors";
import CustomText from "../../../components/UI/CustomText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default renderField = ({
  label,
  keyboardType,
  secureTextEntry,
  icon,
  showPass,
  passIcon,
  setShowPass,
  meta: { touched, error, warning },
  input: { onChange, ...restInput },
}) => {
  return (
    <View>
      <View>
        <TextInput
          placeholder={label}
          autoCapitalize='none'
          placeholderTextColor={Colors.white}
          mode='outlined'
          clearButtonMode={passIcon ? "never" : "always"}
          selectionColor={Colors.white}
          theme={{ colors: { primary: Colors.white,underLineColor:'transparent' ,text:Colors.white} }}
          
          left={
            <TextInput.Icon
              name={icon}
              size={24}
              color={Colors.white}
              style={{ paddingRight: 10 }}
            />
          }
          style={{
            fontSize: 14,
            backgroundColor: "transparent",
            marginVertical: 5,
            color:Colors.white
            // paddingHorizontal: 5,
          }}
          keyboardType={keyboardType}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          {...restInput}
        />
        {passIcon ? (
          <MaterialCommunityIcons
            name={showPass ? "eye" : "eye-off"}
            size={24}
            color={Colors.white}
            onPress={() => {
              setShowPass((prev) => !prev);
            }}
            style={{
              position: "absolute",
              top: "40%",
              right: 10,
              zIndex: 100,
            }}
          />
        ) : (
          <></>
        )}
      </View>
      {touched && error && (
        <CustomText
          style={{ color: "red", marginHorizontal: 15, marginTop: 5 }}
        >
          {error}
        </CustomText>
      )}
    </View>
  );
};

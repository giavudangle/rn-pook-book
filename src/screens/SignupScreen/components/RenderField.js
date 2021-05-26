import React from "react";
import { View,StyleSheet } from "react-native";
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
  showConfirmPass,
  setShowConfirmPass,
  autoCapitalize,
  meta: { touched, error, warning },
  input: { onChange, ...restInput },
}) => {
  return (
    <View>
      <TextInput
        style={Styles.body}
        placeholder={label}
        autoCapitalize={autoCapitalize ? "words" : "none"}
        clearButtonMode={passIcon ? "never" : "always"}
        mode="flat"
        selectionColor={Colors.leave_green}
        theme={{ colors: { primary: Colors.leave_green } }}
        left={
          <TextInput.Icon
            name={icon}
            size={24}
            color={Colors.lighter_green}
            style={{ paddingRight: 10 }}
          />
        }
        keyboardType={keyboardType}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        {...restInput}
      />
      {passIcon === "pass" ? (
        <MaterialCommunityIcons
          onPress={() => {
            setShowPass((prev) => !prev);
          }}
          name={showPass ? "eye-off" : "eye"}
          size={24}
          color={Colors.lighter_green}
          style={{
            position: "absolute",
            top: "20%",
            right: 40,
            zIndex: 100,
          }}
        />
      ) : passIcon === "confirm" ? (
        <MaterialCommunityIcons
          onPress={() => {
            setShowConfirmPass((prev) => !prev);
          }}
          name={showConfirmPass ? "eye-off" : "eye"}
          size={24}
          color={Colors.lighter_green}
          style={{
            position: "absolute",
            top: "20%",
            right: 40,
            zIndex: 100,
          }}
        />
      ) : (
        <></>
      )}

      {touched && error && (
        <CustomText style={Styles.textError}>
          {error}
        </CustomText>
      )}
    </View>
  );
};

const Styles=StyleSheet.create({
  textError:{
    color:Colors.straw,
    marginLeft:20,
    marginBottom:2
  },
  body:{
    marginBottom: 20,
    overflow: 'hidden',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor:'#fff',
    width:320,
    height:60,
    alignSelf:'center',
  }
})
import React, { useState, useEffect, useRef } from "react";

import { Text, View, StyleSheet, Dimensions, Alert, TouchableOpacity } from "react-native";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Action
import { UploadProfilePic } from "../../actions/auth";
import { EditButton, ProfilePic, ProfileBody } from "./components";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
//Loader
import Loader from "../../components/Loaders/Loader";

import Colors from '../../utils/Colors'

import AntIcon from '@expo/vector-icons/AntDesign'
import { EditPassword } from "./components/EditPassword";

const { width, height } = Dimensions.get("window");

export const ProfileScreen = (props) => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.isLoading);
  const [imageUri, setImageUri] = useState("");
  const [filename, setFilename] = useState("");
  const [type, setType] = useState("");
  const [uploadButton, setUploadButton] = useState(true);

  const dispatch = useDispatch();
  const unmounted = useRef(false);
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const UploadProfile = async () => {
    try {
      await dispatch(UploadProfilePic(imageUri, filename, type));
      setUploadButton(true);
      if (!unmounted.current) {
        Alert.alert("Cập nhật", "Cập nhật thành công", [
          {
            text: "Ok",
          },
        ]);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <TouchableOpacity style={{ zIndex: 99 }} onPress={() => props.navigation.navigate('HomeTab')}>
          <AntIcon style={{ top: 40, right: 320, position: 'absolute' }} name='arrowleft' size={30} color='white' />
        </TouchableOpacity>
        <View style={styles.header}>
        </View>
        {loading ? <Loader /> : <></>}
        <View style={styles.profileContainer}>

          <View style={styles.profileBox}>
            <EditButton navigation={props.navigation} user={user} />
            <EditPassword navigation={props.navigation} user={user}/>
            <ProfilePic
              user={user}
              imageUri={imageUri}
              setImageUri={setImageUri}
              setType={setType}
              setFilename={setFilename}
              setUploadButton={setUploadButton}
            />
            <ProfileBody
              user={user}
              uploadButton={uploadButton}
              setUploadButton={setUploadButton}
              setImageUri={setImageUri}
              loading={loading}
              UploadProfile={UploadProfile}
            />
          </View>
        </View>
      </View>
    </ActionSheetProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width,
    flexDirection: "row",
    height: 0.15 * height,
    justifyContent: "center",
    backgroundColor: Colors.primary
  },
  profileContainer: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  profileBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width,
    alignItems: "center",
  },
});

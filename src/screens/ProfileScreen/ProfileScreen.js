import React, { useState, useEffect, useRef } from "react";
import { Text,View, StyleSheet, Dimensions, Alert } from "react-native";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Action
import { UploadProfilePic } from "../../reducers";
import { EditButton, ProfilePic, ProfileBody } from "./components";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
//Loader
import Loader from "../../components/Loaders/Loader";

const { width, height } = Dimensions.get("window");

export const ProfileScreen = (props) => {
 

  return (
    <Text>ProfileSCreen</Text>
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

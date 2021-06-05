import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { useSelector } from "react-redux";
import CustomText from "../../../../components/UI/CustomText";
import Colors from "../../../../utils/Colors";

const UserComment = ({ comment }) => {

  const user = useSelector(state => state.auth.user)


  return (
    <View style={styles.userCommentContainer}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePic}
          source={comment.user.profilePicture.length > 0 ?  {uri:comment.user.profilePicture} : require("../../../../assets/Images/logo1.png")}
        />
      </View>
      <View style={{ justifyContent: "center", width: "80%" }}>
        <CustomText style={styles.name}>{comment.user._id === user.userid ?'You':comment.user.name}</CustomText>
        <CustomText>{comment.content}</CustomText>
      </View>
    </View>
  );
};

export default UserComment;

const styles = StyleSheet.create({
  userCommentContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
  },
  profileContainer: {
    justifyContent: "center",
    marginRight: 10,
  },
  profilePic: {
    resizeMode: Platform.OS === "android" ? "cover" : "contain",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.grey,
    marginBottom: 5,
  },
});

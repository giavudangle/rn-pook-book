import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  SafeAreaView
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import { BlurView } from "expo-blur";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import CustomText from "../../../../components/UI/CustomText";
import Colors from "../../../../utils/Colors";
import UserComment from "./UserComment";
import { createNewReview } from "../../../../actions/review";
import CustomLoader from '../../../../components/Loaders/CustomLoader'

const { width, height } = Dimensions.get("window");

export const Comments = ({ commentsData,currentItemId }) => {
  const user = useSelector((state) => state.auth.user);
  const [textComment, setTextComment] = useState("");
  const modalizeRef = useRef(null);

  const isLoading = useSelector(state => state.review.isLoading)

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const dispatch = useDispatch();

  const _handlePostReview = () => {
    dispatch(createNewReview(textComment,currentItemId))
    setTextComment('')
  }

 

  return (
    
    <>
      <View style={styles.commentContainer}>
        <TouchableOpacity onPress={onOpen}>
          <CustomText style={styles.title}>Comments</CustomText>
        </TouchableOpacity>
        <CustomText style={styles.commentCount}>{commentsData.length}</CustomText>
      </View>
      <Portal>
        <Modalize modalHeight={height / 1.1} ref={modalizeRef} snapPoint={height - 200}>
          <SafeAreaView style={styles.contentContainer}>
            {Object.keys(user).length === 0 ? (
              <></>
            ) : (

              <View style={styles.inputContainer}>
                <View style={styles.profileContainer}>
                  <Image
                    style={styles.profilePic}
                    source={
                      user.profilePicture.length === 0
                        ? require("../../../../assets/Images/logo1.png")
                        : { uri: user.profilePicture }
                    }
                  />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    width: "75%",
                  }}
                >
                  <BlurView tint='dark' intensity={10} style={styles.inputBlur}>
                    <TextInput
                      placeholder='Add a public comment...'
                      style={{ width: "100%" }}
                      onChangeText={(text) => setTextComment(text)}
                      value={textComment}
                    />
                  </BlurView>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity disabled={textComment.length > 0 ?  false : true} onPress={_handlePostReview}>
                    <Entypo
                      name='paper-plane'
                      size={25}
                      color={textComment.length === 0 ? Colors.grey : Colors.blue}
                    />
                  </TouchableOpacity>

                </View>
              </View>
            )}
            {
              isLoading ? <CustomLoader/>
              :
             ( commentsData.length > 0
                ? (
                  commentsData.map((comment) => (
                    <UserComment key={comment.id} comment={comment} />
                  ))
                )
                : (
                  <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 10, flex: 1 }}>
                    <Image style={{ width: 100, height: 100 }} source={require('../../../../assets/Images/icon.png')} />
                    <CustomText style={{ color: Colors.primary, width: 300, textAlign: 'center' }}>Hãy để lại bình luận đóng góp cho PookBook các bạn nhé ^^</CustomText>
                  </View>
                ))
            }
          </SafeAreaView>
        </Modalize>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: Colors.light_grey,
    paddingHorizontal: 20,
    marginTop: 50
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  commentCount: {
    fontSize: 15,
    marginHorizontal: 15,
    color: Colors.grey,
  },
  contentContainer: {
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    height: 60,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_grey,
  },
  inputBlur: {
    height: 40,
    justifyContent: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  profileContainer: {
    justifyContent: "center",
  },
  profilePic: {
    resizeMode: Platform.OS === "android" ? "cover" : "contain",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PaymentFormView from "./PaymentFormView";
/**
 * The class renders a view with PaymentFormView
 */
export const AddSubscriptionView = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardFormWrapper}>
        <PaymentFormView {...props} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoText: {
    fontSize: 18,
    textAlign: "center",
  },
});

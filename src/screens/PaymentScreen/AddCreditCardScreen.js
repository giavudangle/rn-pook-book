import React,{useState} from 'react'
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AddSubscriptionView } from "./components";

export const AddCreditCardScreen = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit =  async () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.backIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name='arrow-left' size={30} color='black' />
        </TouchableOpacity>
      </View>
      <AddSubscriptionView
        error={error}
        submitted={submitted}
        onSubmit={onSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:30
  },
  backIcon: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

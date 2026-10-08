import {View, Text, Pressable, StyleSheet, Alert} from "react-native"
import {router} from "expo-router";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BottomNav from "@/components/reusable/BottomNav";

const TimeLimit = () => {
  const showAlert = () => {
    Alert.alert(
      "Limit cannot be ignored"
    )
  }

  return(
    <View style={styles.container}>
        <MaterialCommunityIcons 
          name="timer-sand-complete" 
          size={60} 
          color="white" 
          style={styles.timerIcon}
        />
        <Text style={styles.title}>Time Limit</Text>
        <Text style={styles.subtitle}>You've reached your limit on Instagram</Text>
        
        <Pressable style={styles.button} onPress={() => router.push("/")}>
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>

        <Pressable onPress={showAlert}>
          <Text style={styles.ignoreText}>Ignore Limit</Text>
        </Pressable>
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 130,
  },
  button: {
    backgroundColor: "#1084FD",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 15,
  },
  buttonText: {
    color:"#FFFFFF", 
    fontSize: 18,
  },
  ignoreText: {
    color: "#1084FD",
    textDecorationLine: "underline",
    fontSize: 18,
  },  
  title: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 15,
  },
  subtitle: {
    color: "#FFFFFF",
    marginBottom: 200,
    fontSize: 14,
  },
  timerIcon: {
    marginBottom: 10,
  }
})

export default TimeLimit;
import {View, Text, StyleSheet, Pressable} from "react-native";
import {router} from "expo-router";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const SecondProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => router.push("/")}>
          <Ionicons 
          name="chevron-back" 
          size={24} 
          color="white" 
        />
        </Pressable>
        <Text style={styles.usernameText}>b@ddie$_p0rkS</Text>
      </View>

      <View style={styles.buttonContainer}>
        <MaterialIcons 
          name="notifications-none" 
          size={24} 
          color="white" 
        />
        <MaterialCommunityIcons 
          name="dots-horizontal" 
          size={24} 
          color="white" 
        />
        
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  usernameText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 3,
  }
})

export default SecondProfileHeader;
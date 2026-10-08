import {View, Text, StyleSheet} from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

const SecondProfileButtons = () => {
  return(
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.captionText}>Porks out snorts out!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttons}>Following</Text>
        <Text style={styles.buttons}>Message</Text>
        <Ionicons 
          name="person-add-outline" 
          size={16} 
          color="white"
          style={styles.addIcon} 
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    paddingHorizontal: 12,
  },
  upperContainer: {
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 6,
  },
  captionText: {
    marginLeft: 3,
    color: "#FFFFFF"
  },
  buttons: {
    color: "#FFFFFF",
    backgroundColor: "#2A3037",
    fontWeight: "500",
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 10,
    fontSize: 14,
  },
  addIcon: {
    backgroundColor: "#2A3037",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
  }
})

export default SecondProfileButtons;
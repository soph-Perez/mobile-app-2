import {View, Text, StyleSheet} from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileButtons = () => {
  return(
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.songContainer}>
          <Feather 
            name="play" 
            size={14}
            color="white" 
          />
          <Text style={styles.songText}>One Pork by Drake</Text>
        </View>

        <View style={styles.addContainer}>
          <AntDesign 
            name="plus" 
            size={14} 
            color="#a8a8a8" 
          />
          <Text style={styles.addText}>Add</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttons}>Edit profile</Text>
        <Text style={styles.buttons}>Share profile</Text>
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
    padding: 12,
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#a8a8a8",
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 6
  },
  upperContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#a8a8a8",
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 6,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 6,
  },
  songText: {
    marginLeft: 3,
    color: "#FFFFFF"
  },
  addText: {
    marginLeft: 3,
    color: "#a8a8a8",
  },
  buttons: {
    color: "#FFFFFF",
    backgroundColor: "#2A3037",
    fontWeight: "500",
    paddingHorizontal: 40,
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

export default ProfileButtons;
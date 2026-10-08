import {View, Text, StyleSheet} from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <AntDesign 
        name="plus" 
        size={28} 
        color="white" 
      />
      
      <View style={styles.userContainer }>
        <Feather 
          name="lock" 
          size={16} 
          color="white" 
        />
        <Text style={styles.usernameText}>jp2sexyy</Text>
        <Entypo 
          name="chevron-down" 
          size={16} 
          color="white" 
        />
        <FontAwesome 
          name="circle" 
          size={10} 
          color="red" 
        />
      </View>

      <View style={styles.buttonContainer}>
        <FontAwesome6 
          name="threads" 
          size={24} 
          color="white" 
        />
        <AntDesign 
          name="menu" 
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
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 12,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  usernameText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 24,
    marginLeft: 5,
  }
})

export default ProfileHeader;
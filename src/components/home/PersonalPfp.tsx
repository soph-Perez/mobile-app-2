import {View, Image, Text, StyleSheet} from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';

const PersonalPfp = () => {
  return(
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          style={styles.image}
          source={require("@/assets/images/pfps/profile-pic.jpeg")}
        />
        <AntDesign 
          name="plus" 
          size={18} 
          color="black" 
          style={styles.add}
        />
      </View>

      <Text style={styles.caption}>Your story</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    paddingLeft: 12,
    flexDirection: "column",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 5,
    marginRight: 15
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  add: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 4,
    marginLeft: -30,
  },
  caption: {
    color: "#FFFFFF",
    marginLeft: 12,
    fontSize: 15,
  }
})

export default PersonalPfp;
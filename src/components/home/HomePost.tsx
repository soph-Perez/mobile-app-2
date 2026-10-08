import {View, Image, Text, StyleSheet} from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomePost = () => {
  return(
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <Image
          style={styles.profilePic}
          source={require("@/assets/images/posts/main-page-profile.jpg")}
        />
        <View>
          <Text style={styles.usernameText}>b@ddie$_p0rk$</Text>
          <Text style={styles.locationText}>slaughter house</Text>
        </View>
      </View>

      <View style={styles.followContainer}>
        <Text style={styles.button}>Follow</Text>
        <MaterialCommunityIcons name="align-horizontal-left" size={24} color="white" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0B0F14",
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  followContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 6,
  },
  usernameText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  locationText: {
    color: "#a8a8a8",
  },
  button: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
    backgroundColor: "#2A3037",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 6,
  }
})

export default HomePost;
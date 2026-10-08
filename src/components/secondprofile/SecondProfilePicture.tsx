import {View, Image, Text, StyleSheet} from "react-native";

const SecondProfilePicture = () => {
  return(
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          style={styles.image}
          source={require("@/assets/images/posts/main-page-profile.jpg")}
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
  profileContainer: {
    marginBottom: 5,
    marginRight: 15
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
})

export default SecondProfilePicture;
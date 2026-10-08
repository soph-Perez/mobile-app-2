import {View, Text, StyleSheet} from "react-native";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HomeUpdates = () => {
  return(
    <View style={styles.container}>
        <View style={styles.updateContainer}>
          <FontAwesome5 
            name="check-circle" 
            size={30} 
            color="white" 
            style={styles.checkIcon}
            />
          <Text style={styles.updateText}>You've seen the latest posts from accounts you follow.</Text>
        </View>

        <View style={styles.suggestContainer}>
          <Text style={styles.suggestedText}>Suggested for you</Text>
          <Text style={styles.olderText}>Older posts</Text>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    paddingHorizontal: 10,
  },
  updateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
  },
  suggestContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 24,
  },
  updateText: {
    color: "#a8a8a8",
    fontSize: 12,
  },
  suggestedText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  olderText: {
    fontWeight: "600",
    color: "#688DFF",
    fontSize: 15,
  },
  checkIcon: {
    marginRight: 8,
  }
})

export default HomeUpdates;
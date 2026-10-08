import {View, Text, StyleSheet} from "react-native"

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HomeHeader = () => {
  return(
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="white" />

      <View style={styles.igContainer}>
        <Text style={styles.igText}>Instagram</Text>
        <Entypo name="chevron-small-down" size={24} color="white" />
      </View>

      <FontAwesome5 name="heart" size={24} color="white" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  igContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  igText: {
    fontSize: 24,
    color: "#FFFFFF"
  }
})

export default HomeHeader;
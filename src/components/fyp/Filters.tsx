import {View, Text, StyleSheet, Pressable} from "react-native";

import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";

const Filters = () => {
  const [selected, setSelected] = useState("button1");
  return (
    <View style={styles.container}>
      <Pressable
        onPress = {() => setSelected("button0")}
        style = {selected === "button0" ? styles.selected : styles.normal}
      >
        <Feather 
          name="filter" 
          size={24} 
          color="white" 
        />
      </Pressable>
      
      <Pressable
        onPress={() => setSelected("button1")}
        style = {selected === "button1" ? styles.selected : styles.normal}
      >
        <Text style={styles.filterText}>For you</Text>
      </Pressable>

      <Pressable
        onPress={() => setSelected("button2")}
        style = {selected === "button2" ? styles.selected : styles.normal}
      >
        <Text style={styles.filterText}>Goth Pork</Text>
      </Pressable>

      <Pressable
        onPress={() => setSelected("button3")}
        style = {selected === "button3" ? styles.selected : styles.normal}
      >
        <Text style={styles.filterText}>Sexy Goths Porks</Text>
      </Pressable>
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
  selected:{
    backgroundColor: "#2A3037",
    paddingHorizontal: 10,
    paddingVertical: 10, 
    borderRadius: 20,
  },
  normal: {
    borderWidth: 1,
    borderColor: "#2A3037",
    paddingHorizontal: 10,
    paddingVertical: 10, 
    borderRadius: 20,
  },
  filterText: {
    color: "#FFFFFF",
    fontWeight: "500"
  }
})

export default Filters;
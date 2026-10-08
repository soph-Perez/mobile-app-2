import {View, Pressable, StyleSheet} from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";

const ProfileIcons = () => {
  const [selected, setSelected] = useState('button0');
  return(
    <View style={styles.container}>
      <Pressable
        onPress={() => setSelected('button0')}
        style = {selected === "button0" ? styles.selected : styles.normal}
      >
        <MaterialIcons 
          name="grid-on" 
          size={24} 
          color={selected === "button0" ? "#FFFFFF": "#a8a8a8"}
        />
      </Pressable>

      <Pressable
        onPress={() => setSelected('button1')}
        style = {selected === "button1" ? styles.selected : styles.normal}
      >
        <Octicons 
          name="video" 
          size={24} 
          color={selected === "button1" ? "#FFFFFF": "#a8a8a8"}
        />
      </Pressable>

      <Pressable
        onPress={() => setSelected('button2')}
        style = {selected === "button2" ? styles.selected : styles.normal}
      >
        <FontAwesome 
          name="tag" 
          size={24} 
          color={selected === "button2" ? "#FFFFFF": "#a8a8a8"}
        />
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
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  selected: {
    borderWidth: 2,
    borderColor: "#0B0F14",
    borderBottomColor: "#FFFFFF",
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  normal: {
    paddingVertical: 5,
    paddingHorizontal: 20
  },
})

export default ProfileIcons;
import {View, Text, StyleSheet} from "react-native"

import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';

const Search = () => {
  return(
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather 
          name="search" 
          size={16} 
          color="#a8a8a8" 
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Search with Meta AI</Text>
      </View>

      <Fontisto 
        name="favorite" 
        size={30} 
        color="white" 
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#2A3037",
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 105,
    borderRadius: 25,
    marginRight: 20,
  },
  searchText: {
    color: "#a8a8a8",
    fontSize: 18,
  },
  searchIcon: {
    marginRight: 5,
  }
})

export default Search;
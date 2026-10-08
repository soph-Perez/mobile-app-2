import {View, Text, StyleSheet} from "react-native";

const stats = [
  {key: 1, value: 0, label: "posts"},
  {key: 2, value: 367, label: "followers"},
  {key: 3, value: 210, label: "following"}
]

const Follow = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.usernameText}>John</Text>
      
      <View style={styles.numberCards}>
        {stats.map((stat) => (
          <View key={stat.key}>
            <Text style={styles.valueText}>{stat.value}</Text>
            <Text style={styles.labelText}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    flexDirection: "column",
    paddingVertical: 12,
    paddingRight: 40,
  },
  numberCards: {
    flexDirection: "row",
    gap: 40,
  },
  usernameText: {
    color: "#FFFFFF",
    fontWeight: "600",
    marginBottom: 10,
  },
  valueText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
  },
  labelText: {
    color: "#FFFFFF",
  }
})

export default Follow;
import {View, Text, StyleSheet} from "react-native";

const stats = [
  {key: 1, value: 2, label: "posts"},
  {key: 2, value: 1167, label: "followers"},
  {key: 3, value: 3, label: "following"}
]

const SecondFollow = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.usernameText}>Johnny</Text>
      
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

export default SecondFollow;
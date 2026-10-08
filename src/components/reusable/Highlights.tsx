import {View, StyleSheet, Image, Text, TextStyle, ViewStyle} from "react-native";
import {Profile} from "@/data/profiles"
import { ImageStyle } from "expo-image";

interface HighlightsProps{
  profiles: Profile[];
  imageStyle?: ImageStyle;
  usernameStyle?: TextStyle;
  formatStyle?: ViewStyle;
}

const Highlights = ({profiles, imageStyle, usernameStyle, formatStyle}: HighlightsProps) => {
  return (
    <View style={[styles.container, formatStyle]}>
      {profiles.map((profile) => (
        <View key={profile.id} style={styles.singleProfile}>
          <Image
            source={profile.image}
            style={[styles.profileImg, imageStyle]}
          />
          <Text style={[styles.profileName, usernameStyle]}>{profile.username}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0F14",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singleProfile: {
    alignItems: 'center',
    marginRight: 12,
  },
  profileImg: {
    height: 90,
    width: 90,
    borderRadius: 45
  },
  profileName: {
    paddingTop: 16,
    color: "#FFFFFF",
    fontSize: 15,
  }
});

export default Highlights;
import {View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProfileHeader from "@/components/profile/ProfileHeader";
import Follow from "@/components/profile/Follow";
import PersonalPicture from "@/components/profile/PersonalPicture";
import ProfileButtons from "@/components/profile/ProfileButtons";
import ProfileIcons from "@/components/profile/ProfileIcons";
import Highlights from "@/components/reusable/Highlights";
import PhotoGrid from "@/components/reusable/PhotoGrid";
import BottomNav from "@/components/reusable/BottomNav";

import { personalProfiles } from "@/data/profiles";
import { personalPhotos } from "@/data/photos";

export default function Profile() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.pageContainer}>
        <ProfileHeader />

        <View style={styles.userProfile}>
          <PersonalPicture />
          <Follow />
        </View>

        <ProfileButtons/>

        <View style={styles.highlightContainer}>
          <Highlights profiles={personalProfiles} imageStyle={styles.imageSize} usernameStyle={styles.textSize} formatStyle={styles.format}/>
        </View>

        <ProfileIcons />

        <PhotoGrid photos={personalPhotos}/>

        <BottomNav />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#0B0F14",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userProfile: {
    flexDirection: "row",
  },
  imageSize: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  textSize: {
    fontSize: 12,
  },
  format: {
    justifyContent: "flex-start",
  },
  highlightContainer: {
    marginLeft: 12,
  }
});

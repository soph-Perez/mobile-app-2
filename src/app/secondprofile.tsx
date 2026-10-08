import {View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SecondFollow from "@/components/secondprofile/SecondFollow";
import SecondProfilePicture from "@/components/secondprofile/SecondProfilePicture";
import SecondProfileButtons from "@/components/secondprofile/SecondProfileButtons";
import ProfileIcons from "@/components/profile/ProfileIcons";
import PhotoGrid from "@/components/reusable/PhotoGrid";
import BottomNav from "@/components/reusable/BottomNav";
import SecondProfileHeader from "@/components/secondprofile/SecondProfileHeader";

import { secondPhotos } from "@/data/photos";

export default function SecondProfile() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.pageContainer}>
        <SecondProfileHeader />

        <View style={styles.userProfile}>
          <SecondProfilePicture />
          <SecondFollow />
        </View>

        <SecondProfileButtons/>

        <ProfileIcons />

        <View style={styles.bottom}>
          <PhotoGrid photos={secondPhotos}/>
        </View>

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
  },
  bottom: {
    marginBottom: 225,
  }
});

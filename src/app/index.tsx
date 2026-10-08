import {View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { generalProfiles } from "@/data/profiles";

import HomeHeader from '@/components/home/HomeHeader';
import PersonalPfp from "@/components/home/PersonalPfp";
import Highlights from "@/components/reusable/Highlights";
import HomeUpdates from "@/components/home/HomeUpdates";
import HomePost from "@/components/home/HomePost";
import BottomNav from "@/components/reusable/BottomNav";

export default function Index() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <HomeHeader />

        <View style={styles.stories}>
          <PersonalPfp />
          <Highlights profiles={generalProfiles}/>
        </View>

        <HomeUpdates />
        
        <HomePost />

        <Image
          style={styles.mainPostImg}
          source={require("@/assets/images/posts/second-bropork1.jpeg")}
        />

        <BottomNav />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stories: {
    flexDirection: "row",
  },
  mainPostImg: {
    height: 450,
    width: 400,
    objectFit: "cover",
  }
});

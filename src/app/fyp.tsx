import {View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Search from "@/components/fyp/Search"; 
import Filters from "@/components/fyp/Filters";
import PhotoGrid from "@/components/reusable/PhotoGrid";
import BottomNav from "@/components/reusable/BottomNav";
import { fypPhotos } from "@/data/photos";

export default function Fyp() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <Search />
        <Filters />
        <PhotoGrid photos={fypPhotos}/>
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
});

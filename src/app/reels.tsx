import {StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import TimeLimit from "@/components/reusable/TimeLimit";
import BottomNav from "@/components/reusable/BottomNav";

export default function Reels() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <TimeLimit />
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

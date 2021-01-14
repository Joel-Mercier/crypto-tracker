import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Graph from "../components/Graph";
import Footer from "../components/Footer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});

interface CurrencyScreenProps {};

const CurrencyScreen = ({}: CurrencyScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Graph />
      <Footer />
    </SafeAreaView>
  );
};

export default CurrencyScreen;

import React from "react";
import { View, StyleSheet } from "react-native";

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
    <View style={styles.container}>
      <Graph />
      <Footer />
    </View>
  );
};

export default CurrencyScreen;

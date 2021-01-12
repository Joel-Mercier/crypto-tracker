import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Asset } from "../models/Asset";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  title: {
    fontFamily: "GothamRounded-Medium",
    alignSelf: "center",
  },
  action: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
});

interface CardHeaderProps {
  asset: Asset;
}

const CardHeader = ({ asset }: CardHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />
      <Text style={styles.title}>{asset.name}</Text>
      <View style={styles.action}></View>
    </View>
  );
};

export default CardHeader;

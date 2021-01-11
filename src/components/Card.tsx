import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";

import { Asset } from "../models/Asset";
import colors from "../utils/Colors";

import Button from "./Button";
import CardHeader from "./CardHeader";

const { width } = Dimensions.get("window");
export const CARD_HEIGHT = (width * 1564) / 974;
const styles = StyleSheet.create({
  container: {
    width,
    height: CARD_HEIGHT,
  },
  title: {
    fontFamily: "GothamRounded-Bold",
    fontSize: 28,
    textAlign: "center",
    color: "#432406",
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: "GothamRounded-Light",
    fontSize: 16,
    textAlign: "center",
    color: "#432406",
  },
});

interface CardProps {
  asset: Asset;
}

const Card = ({ asset: { name, symbol } }: CardProps) => {
  const color = colors[symbol] || "#5FA7EE";
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 16,
          margin: 32,
          flex: 1,
          backgroundColor: color,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View>
          <CardHeader />
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{symbol}</Text>
        </View>
        <Button label="See details" />
      </View>
    </View>
  );
};

export default Card;

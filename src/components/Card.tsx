import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Coin } from "../models/Coin";
import { SimplePrice } from "../models/Price";
import colors from "../utils/Colors";
import { priceToCurrency } from "../utils/Money";

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
  coin: Coin;
  simpleCoinPrice: SimplePrice;
}

const Card = ({ coin, simpleCoinPrice }: CardProps) => {
  const navigation = useNavigation();
  const color = colors[coin.symbol] || "#5FA7EE";
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
          <CardHeader coin={coin} />
          <Text style={styles.subtitle}>{coin.name}</Text>
          <Text style={styles.title}>{coin.name}</Text>
          {/* <Text style={styles.title}>
            {priceToCurrency(simpleCoinPrice.usd)}
          </Text> */}
        </View>
        <Button
          label="See details"
          onPress={() => navigation.navigate("Currency")}
        />
      </View>
    </View>
  );
};

export default Card;

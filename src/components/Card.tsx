import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Coin, supportedCoins } from "../models/Coin";
import { SimplePrice } from "../models/Price";
import { priceToCurrency } from "../utils/Money";
import colors from "../utils/Colors";

import Button from "./shared/Button";
import CoinIcon from "./shared/CoinIcon";

const { width } = Dimensions.get("window");
export const CARD_HEIGHT = (width * 1564) / 974;
const styles = StyleSheet.create({
  container: {
    width,
    height: CARD_HEIGHT,
  },
  cardInner: {
    borderRadius: 16,
    margin: 32,
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  inlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "GothamRounded-Bold",
    fontSize: 28,
    color: colors.textColor,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: "GothamRounded-Light",
    fontSize: 16,
    color: colors.textColor,
  },
});

interface CardProps {
  coin: Coin;
  simpleCoinPrice: SimplePrice;
}

const Card = ({ coin, simpleCoinPrice }: CardProps) => {
  const navigation = useNavigation();
  const color =
    supportedCoins.filter(
      (supportedCoin) => supportedCoin.coinGeckoId === coin.id
    )[0].color || "#5FA7EE";
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.cardInner,
          {
            borderRadius: 16,
            margin: 32,
            flex: 1,
            backgroundColor: color,
            padding: 16,
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={styles.inlineContainer}>
          <CoinIcon id={coin.id} size={42} />
          <View>
            <Text style={styles.subtitle}>{coin.symbol.toUpperCase()}</Text>
            <Text style={styles.title}>{coin.name}</Text>
          </View>
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

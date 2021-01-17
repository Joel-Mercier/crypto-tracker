import React from "react";
import { View, StyleSheet } from "react-native";

import { Coin, supportedCoins } from "../../models/Coin";
import { CoinGeckoApiResponse } from "../../services/CoinGeckoApi";

import SimpleCoinPriceItem from "./SimpleCoinPriceItem";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
    backgroundColor: "white",
    borderRadius: 16,
    marginVertical: 16,
    paddingVertical: 24,
  },
});

interface CardsProps {
  simpleCoinPrices: CoinGeckoApiResponse;
  coins: CoinGeckoApiResponse;
}

const SimpleCoinPricesList = ({ simpleCoinPrices, coins }: CardsProps) => {
  return (
    <View style={styles.container}>
      {coins.data
        .filter((coin: Coin) =>
          supportedCoins
            .map((supportedCoin) => supportedCoin.coinGeckoId)
            .includes(coin.id)
        )
        .map((coin: Coin, index: number) => (
          <SimpleCoinPriceItem
            key={index}
            simpleCoinPrice={simpleCoinPrices.data[coin.id]}
            coin={coin}
          />
        ))}
    </View>
  );
};

export default SimpleCoinPricesList;

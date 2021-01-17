import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Coin } from "../../models/Coin";
import { SimplePrice } from "../../models/Price";
import colors from "../../utils/Colors";
import { priceToCurrency, toPercentage } from "../../utils/Money";
import CoinIcon from "../shared/CoinIcon";

interface CardProps {
  simpleCoinPrice: SimplePrice;
  coin: Coin;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBorder,
  },
  text: {
    fontFamily: "GothamRounded-Medium",
    fontSize: 16,
    color: colors.textColor,
  },
  mutedText: {
    fontFamily: "GothamRounded-Medium",
    fontSize: 14,
    color: colors.mutedTextColor,
  },
  inlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

const SimpleCoinPriceItem = ({ simpleCoinPrice, coin }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <CoinIcon id={coin.id} />
        <View>
          <Text style={styles.text} numberOfLines={1}>
            {coin.name}
          </Text>
          {simpleCoinPrice && simpleCoinPrice.eur_market_cap && (
            <Text style={styles.mutedText} numberOfLines={1}>
              {priceToCurrency(simpleCoinPrice.eur_market_cap)}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.priceContainer}>
        {simpleCoinPrice && (
          <>
            <Text
              style={[styles.text, { textAlign: "right" }]}
              numberOfLines={1}
            >
              {priceToCurrency(simpleCoinPrice.eur)}
            </Text>
            <View style={styles.percentageContainer}>
              <MaterialIcons
                name="show-chart"
                size={10}
                color={
                  simpleCoinPrice.eur_24h_change > 0
                    ? colors.success
                    : colors.error
                }
              />
              <Text
                style={[
                  styles.mutedText,
                  {
                    textAlign: "right",
                    color:
                      simpleCoinPrice.eur_24h_change > 0
                        ? colors.success
                        : colors.error,
                  },
                ]}
                numberOfLines={1}
              >
                {toPercentage(simpleCoinPrice.eur_24h_change)}
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default SimpleCoinPriceItem;

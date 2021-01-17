import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { supportedCoins } from "../models/Coin";
import { products } from "../models/Product";
import { CoinGeckoApiResponse } from "../services/CoinGeckoApi";

const { width } = Dimensions.get("window");
const SIZE = 200;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ProductsProps {
  coins: CoinGeckoApiResponse,
  x: Animated.SharedValue<number>;
}

const Products = ({ coins, x }: ProductsProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      {coins && coins.data
        .filter((coin: Coin) =>
          supportedCoins
            .map((supportedCoin) => supportedCoin.coinGeckoId)
            .includes(coin.id)
        )
        .map((supportedCoin, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const style = useAnimatedStyle(() => {
            const translateX = interpolate(
              x.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [width / 2, 0, -width / 2]
            );
            const scale = interpolate(
              x.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [0.61, 1, 0.61]
            );
            return {
              transform: [{ translateX }, { scale }],
            };
          });
          return (
            <Animated.View key={index} style={[styles.container, style]}>
              <Image
                source={supportedCoin.icon}
                style={{ width: SIZE, height: SIZE * 1 }}
              />
            </Animated.View>
          );
        })}
    </View>
  );
};

export default Products;

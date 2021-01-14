/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { products } from "../models/Product";
import Card, { CARD_HEIGHT } from "../components/Card";
import Products from "../components/Products";
import Cards, { cards } from "../components/Cards";
import {
  getCoins,
  CoinGeckoApiResponse,
  getCoinSimplePrices,
} from "../services/CoinGeckoApi";
import { supportedCoins, supportedVsCurrencies } from "../models/Coin";

export const screenAssets = products
  .map((product) => product.picture)
  .concat(cards.map((card) => card.picture));

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  slider: { height: CARD_HEIGHT },
});
const snapToOffsets = [0, CARD_HEIGHT];

const CurrenciesScreen = () => {
  const [coins, setCoins] = useState<CoinGeckoApiResponse>({ data: [] });
  const [
    simpleCoinPrices,
    setSimpleCoinPrices,
  ] = useState<CoinGeckoApiResponse>({ data: [] });
  useEffect(() => {
    async function fetchData() {
      const response = await getCoins();
      const simpleCoinPricesResponse = await getCoinSimplePrices({
        ids: supportedCoins.join(","),
        vs_currencies: supportedVsCurrencies.join(","),
        include_market_cap: "true",
        include_24hr_vol: "true",
        include_24hr_change: "true",
        include_last_updated_at: "true",
      });
      setCoins(response);
      setSimpleCoinPrices(simpleCoinPricesResponse);
    }
    fetchData();
  }, []);
  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const style = useAnimatedStyle((): any => {
    const backgroundColor = interpolateColor(
      translateX.value,
      products.map((_, i) => width * i),
      products.map((product) => product.color2)
    );
    return { flex: 1, backgroundColor };
  });
  return (
    <Animated.View style={style}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffsets}
        snapToEnd={false}
        decelerationRate="fast"
      >
        <SafeAreaView>
          <View style={styles.slider}>
            <>
              {coins &&
                coins.data &&
                simpleCoinPrices &&
                simpleCoinPrices.data && (
                  <Animated.ScrollView
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    decelerationRate="fast"
                    snapToInterval={width}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    {coins.data
                      .filter((coin) => supportedCoins.includes(coin.id))
                      .map((coin, index) => (
                        <Card
                          coin={coin}
                          key={index}
                          simpleCoinPrice={simpleCoinPrices.data[coin.id]}
                        />
                      ))}
                  </Animated.ScrollView>
                )}
              <Products x={translateX} />
            </>
          </View>
        </SafeAreaView>
        <Cards simpleCoinPrices={simpleCoinPrices} coins={coins} />
      </ScrollView>
    </Animated.View>
  );
};

export default CurrenciesScreen;

import React from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
} from "react-native-reanimated";

import { products } from "../models/Product";
import Card, { CARD_HEIGHT } from "../components/Card";
import Products from "../components/Products";
import Cards, { cards } from "../components/Cards";

export const assets = products
  .map((product) => product.picture)
  .concat(cards.map((card) => card.picture));

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  slider: { height: CARD_HEIGHT },
});
const snapToOffsets = [0, CARD_HEIGHT];

const TrackersScreen = () => {
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
        <View style={styles.slider}>
          <Animated.ScrollView
            onScroll={onScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={width}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products x={translateX} />
        </View>
        <Cards />
      </ScrollView>
    </Animated.View>
  );
};

export default TrackersScreen;
